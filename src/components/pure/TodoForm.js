function TodoForm({ title, setTitle, addTodo }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        addTodo();
      }}
    >
      <input
        type="text"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Save todo</button>
    </form>
  );
}

export default TodoForm;
