import React, {useState, useEffect} from 'react'
import {useParams, useHistory} from 'react-router-dom'
import Axios from 'axios'

export const TodoList = () => {

    const [data, setData] = useState({dtoList:[], pageList:[]})

    const param = useParams()
    const history = useHistory()
    const page = param.page

    useEffect(() => {
        console.log("PAGE: " + page)
        getData()
    },[page])

    const movePage = (pageNum) => {
        history.push("/todo/list/" + pageNum)
    }

    const getData = async () => {
        
        const res = await Axios.get("http://localhost:8080/todo/list?page=" + page)
        console.log(res)
        setData({dtoList: res.data.dtoList, pageList:res.data.pageList })

    }

    return (
        <div>
            <h1>TodoList</h1>
            <ul>
                {data.dtoList.map((todo) => <li key={todo.tno}>{todo.tno} -------- {todo.text}</li>)}
            </ul>

            <ul>
                {data.pageList.map((pageNum) => <li key={pageNum} onClick={() => { movePage(pageNum)  }}>{pageNum}</li>)}
            </ul>
 
        </div>
    )
}