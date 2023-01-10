function Todo({ title, isCompleted, changeStatusTodo, deleteTodo }) {
  return (
    <div>
      <span
        onClick={() => changeStatusTodo(title)}
        style={{
          textDecoration: isCompleted ? "line-through" : "none",
          textDecorationColor: isCompleted ? "green" : "none",
          color: isCompleted ? "green" : "black",
        }}
      >
        {title}
      </span>
      <button onClick={() => deleteTodo(title)}>Delete</button>
    </div>
  );
}

export default Todo;
