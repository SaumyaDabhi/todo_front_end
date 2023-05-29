import { COMPLETE_TODO, CREATE_TODO, REMOVE_TODO, TODOS_IN_PROGRESS, TODOS_SUCCESS, TODOS_FAILURE } from "./actions";

const initialState = {
    todos: [],
    isLoading: true
}

/* export const isLoadingReducer = (state = initialState,action) => {
    switch(action.type){
        case TODOS_IN_PROGRESS: return {...state, isLoading:true}
        case TODOS_SUCCESS: return state
        case TODOS_FAILURE: return state
        default: return state
    }
} */

export const todosReducer = (state = initialState,action) => {
    switch(action.type){
        case CREATE_TODO: {
            /* const { text } = action.payload; */
            return {
                ...state,
                todos: state.todos.concat(JSON.parse(action.payload))
            }
        }

        case REMOVE_TODO: {
            /* const { text } = action.payload; */
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
            }
        }

        case COMPLETE_TODO: {
            const updatedTodo = JSON.parse(action.payload);
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if(todo.id === updatedTodo.id){
                        return updatedTodo
                    }
                    return todo;
                })
            }
        }

        case TODOS_IN_PROGRESS: return {...state, isLoading:true}

        case TODOS_SUCCESS: {
            return {
                ...state,
                todos: state.todos.concat(action.payload),
                isLoading:false,
                /* todos: [...state.todos, action.payload] */
            }
        }

        case TODOS_FAILURE: return state

        default: return state;
    }
}


