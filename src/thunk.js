import { createTodo, todosinProgress, todosSuccess, todosFailure, removeTodo, completeTodo } from "./actions";
import axios from 'axios';

export const loadTodos = () => async (dispatch) => {
    dispatch(todosinProgress());
    await axios.get("https://todo-back-end-vrfq.onrender.com/todos")
    .then(response => {
        const todos = response.data;
        dispatch(todosSuccess(todos));
    })
    .catch(error => {
        dispatch(todosFailure());
        console.log(error);
    });
};

export const addTodos = (text) => async (dispatch) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const newTodo = text
    const todo = JSON.stringify({
    "text": newTodo
    });

    const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: todo,
    redirect: 'follow'
    };

    await fetch("https://todo-back-end-vrfq.onrender.com/todos", requestOptions)
    .then(response => response.text())
    .then(result => dispatch(createTodo(result)))
    .catch(error => console.log('error', error));
}

export const deleteTodo = (id) => async (dispatch) => {
    const requestOptions = {
        method: 'DELETE',
        redirect: 'follow'
      };
      
      await fetch(`https://todo-back-end-vrfq.onrender.com/todos/${id}`, requestOptions)
        .then(response => response.text())
        .then(result => dispatch(removeTodo(id)))
        .catch(error => console.log('error', error));
}

export const finishTodo = (id) => async (dispatch) => {
    const requestOptions = {
        method: 'POST',
        redirect: 'follow'
      };
      
      fetch(`https://todo-back-end-vrfq.onrender.com/todos/${id}/completed`, requestOptions)
        .then(response => response.text())
        .then(result => dispatch(completeTodo(result)))
        .catch(error => console.log('error', error));
}