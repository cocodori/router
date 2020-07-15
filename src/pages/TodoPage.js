import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
  } from "react-router-dom";
import { TodoList } from '../components/TodoList';
import { TodoInput } from '../components/TodoInput';

export const TodoPage = () => {
    return (
        <div>
            <h1>Todo Page</h1>
            <div>
                <p><Link to={'/todo/list/1'}>List</Link></p>
                <p><Link to={'/todo/register'}>Register</Link></p>
            </div>
            <Route path={'/todo/list/:page'}>
                <TodoList></TodoList>
            </Route>
            <Route path={'/todo/register'}>
                <TodoInput></TodoInput>
            </Route>
        </div>
    )
}
