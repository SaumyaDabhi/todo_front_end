import './App.css';
import ToDoList from './ToDoList/ToDoList';
import { useSelector } from "react-redux";
import { getCompletedTodos, getIncompletedTodos } from "./selectors";

const App = () => {
/*   const todos = useSelector((state) => state.todos);
  const isLoading = useSelector(state => state.isLoading); */
/*   let todos = useSelector(state => {
    console.log('State: ', state);
    return state.pieChart.todos;
  }); */
  const completedTodos = useSelector(getCompletedTodos);
  const incompletedTodos = useSelector(getIncompletedTodos);
  const isLoading = useSelector(state => state.todosReducer.isLoading);
  return (
    <div className="App">
      <ToDoList completedTodos={completedTodos} incompletedTodos={incompletedTodos} isLoading={isLoading}></ToDoList>
    </div>
  );
}

export default App;
