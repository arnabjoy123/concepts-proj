function TodoItem() {
  return (
    <div>
      <input type="checkbox" />
      <input className="border" readOnly placeholder="test" />
      <button className="border">Save/Edit</button>
      <button className="border">Delete</button>
    </div>
  );
}

export default TodoItem;
