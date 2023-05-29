import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodos } from '../thunk';

const ToDoForm = ({incompletedTodos}) => {
    const [inputvalue, setinputvalue] = useState('');
    const dispatch = useDispatch();

    return(
        <div class='flex flex-row gap-y-2 mt-4 p-8 relative rounded-[8px] shadow-[0px_4px_8px_rgba(128,128,128,0.3)] bg-slate-50'> 
            <input
                class='w-3/4 absolute bottom-4 rounded-none[8px] outline-0 border-b-4' 
                type="text" 
                placeholder='Type your new ToDo here'
                value={inputvalue}
                onChange={e => setinputvalue(e.target.value)}></input>
            <button 
            class='absolute right-5 bottom-4 space-x-4 rounded inline-block p-1 bg-green-500 hover:bg-green-600 font-semibold text-slate-100'
            onClick={() => {
                const isDuplicateText = incompletedTodos.some(todo => todo.text === inputvalue);
                if(!inputvalue){
                    alert("Please enter your Todo");
                }
                else if(isDuplicateText){
                    alert("This Todo already exist");
                }
                else{
                    dispatch(addTodos(inputvalue));
                }
                setinputvalue('');
            }
            }>Create ToDo</button>
        </div>
    )
}

export default ToDoForm;