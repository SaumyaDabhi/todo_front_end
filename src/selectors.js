import { createSelector } from 'reselect';

export const getCompletedTodos = createSelector (
    state => state.todosReducer.todos,
    todos => todos.filter(todo => todo.isCompleted)
)

export const getIncompletedTodos = createSelector (
    state => state.todosReducer.todos,
    todos => todos.filter(todo => !todo.isCompleted)
)
