import React from "react";
import { useDispatch } from 'react-redux';
import { deleteTodo, finishTodo } from "../thunk";

const ToDoItem = ({ key, todo }) => {
    const dispatch = useDispatch();

    return(
        <div class="flex flex-col gap-y-2 mt-4 p-8 relative rounded-[8px] shadow-[0px_4px_8px_rgba(128,128,128,0.3)] bg-slate-50">
            <h3 class="absolute top-2 font-semibold">{ todo.text }</h3>
            <p class="absolute bottom-2 font-light">Created At: {(new Date(todo.createdAt)).toDateString()}</p>
            <div class="absolute right-5 bottom-4 space-x-4">
                {todo.isCompleted ? null : <button class="rounded inline-block p-1 bg-green-500 hover:bg-green-600 font-semibold text-slate-100" onClick={() => dispatch(finishTodo(todo.id))}>Mark as Complete</button>}
                <button 
                class="rounded inline-block p-1 bg-red-500 hover:bg-red-600 font-semibold text-slate-100"
                onClick={() => dispatch(deleteTodo(todo.id))}
                >Remove</button>
            </div> 
        </div>
    )
}

export default ToDoItem;
