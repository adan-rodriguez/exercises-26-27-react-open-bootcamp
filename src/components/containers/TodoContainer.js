import React, { useReducer, useState } from "react";
import Filter from "../pure/Filter";
import TodoForm from "../pure/TodoForm";
import TodoList from "../pure/TodoList";

export const todosContext = React.createContext(null);

const ADD = "ADD";
const STATUS = "STATUS";
const DELETE = "DELETE";
const FILTER = "FILTER";

const initialState = {
  todos: [],
  filter: "All",
};

const todosReducer = (state, action) => {
  switch (action.type) {
    case ADD:
      state.todos.push({ title: action.payload, isCompleted: false });
      return {
        ...state,
        todos: state.todos,
      };
    case STATUS:
      const todoToChangeStatus = state.todos.find(
        (todo) => todo.title === action.payload
      );
      todoToChangeStatus.isCompleted = !todoToChangeStatus.isCompleted;
      return {
        ...state,
        todos: state.todos,
      };
    case DELETE:
      const todoToDelete = state.todos.find(
        (todo) => todo.title === action.payload
      );
      state.todos.splice(state.todos.indexOf(todoToDelete), 1);
      return {
        ...state,
        todos: state.todos,
      };
    case FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    default:
      break;
  }
};

const filters = ["All", "Active", "Completed"];

function TodoContainer() {
  const [state, dispatch] = useReducer(todosReducer, initialState);

  const [title, setTitle] = useState("");

  const addTodo = () => {
    dispatch({
      type: ADD,
      payload: title,
    });
    setTitle("");
  };

  const deleteTodo = (title) => {
    dispatch({ type: DELETE, payload: title });
  };

  const changeStatusTodo = (title) => {
    dispatch({ type: STATUS, payload: title });
  };

  const applyFilter = (filter) => {
    dispatch({ type: FILTER, payload: filter });
  };

  return (
    <>
      <todosContext.Provider value={state}>
        <TodoList deleteTodo={deleteTodo} changeStatusTodo={changeStatusTodo} />
      </todosContext.Provider>
      <div>
        {filters.map((filter, index) => (
          <Filter key={index} applyFilter={applyFilter}>
            {filter}
          </Filter>
        ))}
      </div>
      <TodoForm title={title} setTitle={setTitle} addTodo={addTodo} />
    </>
  );
}

export default TodoContainer;
