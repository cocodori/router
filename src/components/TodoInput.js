import React,{useState} from 'react'
import Axios from 'axios'
import { Redirect } from 'react-router-dom'

export const TodoInput = (pros) => {
    
    const[text, setText] = useState('')
    const[goList, setGoList] = useState(false)

    const saveTodo = async () => {
        const header = {headers:{'content-type':'application/json'}}

        const tno = await Axios.post('http://localhost:8080/todo/',{text:text},header)

        console.log(tno)

        setGoList(true)
    }

    return (
        <div>
            {goList?<Redirect to={'/todo/list/1'}></Redirect>:''}
            <h1>TodoInput</h1>
            <input type='text' onChange={(e)=>{setText(e.target.value)}}></input>
            <button onClick={()=>{saveTodo()}}>SAVE</button>

        </div>
    )
}
