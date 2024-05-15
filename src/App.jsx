import React, { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [editValue, setEditValue] = useState("");
  const [editId, setEditId] = useState(null);

  const addTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, { id: Date.now(), text: inputValue }]);
      setInputValue("");
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (todo) => {
    setEditValue(todo.text);
    setEditId(todo.id);
  };

  const updateTodo = () => {
    setTodos(
      todos.map((todo) =>
        todo.id === editId ? { ...todo, text: editValue } : todo
      )
    );
    setEditValue("");
    setEditId(null);
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-4xl font-bold mb-4 text-white text-center">
        Todo List
      </h2>
      <div className="flex mb-4">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="flex-grow border border-gray-300 rounded-l px-4 py-2 focus:outline-none focus:border-blue-500"
        />
        <button
          onClick={addTodo}
          className="px-4 py-2 bg-blue-500 text-white rounded-r hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Add
        </button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between mb-2 bg-gray-100 p-2 rounded"
          >
            {editId === todo.id ? (
              <input
                type="text"
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
                className="flex-grow border border-gray-300 rounded-l px-4 py-2 focus:border-blue-500"
              />
            ) : (
              <span>{todo.text}</span>
            )}
            <div>
              {editId === todo.id ? (
                <button
                  onClick={updateTodo}
                  className="px-4 py-2 bg-green-500 text-white rounded-l hover:bg-green-600 focus:bg-green-600"
                >
                  Update
                </button>
              ) : (
                <button
                  onClick={() => editTodo(todo)}
                  className="px-4 py-2 bg-yellow-500 text-white rounded-l hover:bg-yellow-600 focus:bg-yellow-600"
                >
                  Edit
                </button>
              )}
              <button
                onClick={() => deleteTodo(todo.id)}
                className="px-4 py-2 bg-red-500 text-white rounded-r hover:bg-red-600 focus:bg-red-600"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
