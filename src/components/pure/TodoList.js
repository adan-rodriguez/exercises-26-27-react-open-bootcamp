import { useContext } from "react";
import { todosContext } from "../containers/TodoContainer";
import Todo from "./Todo";

function TodoList({ deleteTodo, changeStatusTodo }) {
  const state = useContext(todosContext);

  let todos = state.todos;

  if (state.filter === "Active") {
    todos = todos.filter((todo) => todo.isCompleted === false);
  }

  if (state.filter === "Completed") {
    todos = todos.filter((todo) => todo.isCompleted === true);
  }

  return (
    <div>
      <p style={{ fontWeight: "bold" }}>{state.filter} todos</p>
      {todos.map((todo, index) => (
        <Todo
          key={index}
          title={todo.title}
          isCompleted={todo.isCompleted}
          deleteTodo={deleteTodo}
          changeStatusTodo={changeStatusTodo}
        />
      ))}
    </div>
  );
}

export default TodoList;
