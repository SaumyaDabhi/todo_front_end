import { React, useEffect } from "react";
import ToDoForm from "../ToDoForm/ToDoForm";
import ToDoItem from "../ToDoItem/ToDoItem";
import { loadTodos } from "../thunk";
import { useDispatch } from "react-redux";

const ToDoList = ({completedTodos, incompletedTodos, isLoading}) =>{
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadTodos(dispatch))
    }, [dispatch])

    const message = <div>Loading...</div>

    const content = (
        <div class="sm:mx-[5rem] md:mx-[10rem] lg:mx-[15rem] xl:mx-[25rem] 2xl:mx-[35rem]">
            <ToDoForm  incompletedTodos={incompletedTodos}></ToDoForm>
            <h3 class="font-bold text-center m-4">Incomplete:</h3>
            {incompletedTodos && incompletedTodos.map(todo => <ToDoItem key = {todo.id} todo={todo} />)}
            <h3 class="font-bold text-center m-4">Complete:</h3>
            {completedTodos && completedTodos.map(todo => <ToDoItem key = {todo.id} todo={todo} />)}
        </div>
    )
    return isLoading ? message : content;
}

export default ToDoList;
