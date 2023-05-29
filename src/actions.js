export const CREATE_TODO = "CREATE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const COMPLETE_TODO = "COMPLETE_TODO";
export const TODOS_IN_PROGRESS = "TODOS_IN_PROGRESS";
export const TODOS_SUCCESS = "TODOSSUCCESS";
export const TODOS_FAILURE = "TODOS_FAILURE";

export const createTodo = (todo) =>{
    return { 
        type: CREATE_TODO,
        payload: todo
    }
}

export const removeTodo = (id) =>{
    return { 
        type: REMOVE_TODO,
        payload: id
    }
}

export const completeTodo = (todo) => {
    return {
        type: COMPLETE_TODO,
        payload: todo
    }
}

export const todosinProgress = () => {
    return{
        type: TODOS_IN_PROGRESS
    }
}

export const todosSuccess = (todos) => {
    return{
        type: TODOS_SUCCESS,
        payload: todos
    }
}

export const todosFailure = () => {
    return{
        type: TODOS_FAILURE
    }
}
