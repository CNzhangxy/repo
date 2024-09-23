import React, { useState } from 'react';
import { List, Checkbox, Button, Input } from 'antd';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo('');
    }
  };

  const handleToggleComplete = (index) => {
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDeleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <Input
        placeholder="Add new task"
        value={newTodo}
        onChange={handleInputChange}
      />
      <Button type="primary" onClick={handleAddTodo}>
        Add
      </Button>
      <List
        itemLayout="horizontal"
        dataSource={todos}
        renderItem={(item, index) => (
          <List.Item>
            <List.Item.Meta
              title={
                <Checkbox
                  checked={item.completed}
                  onChange={() => handleToggleComplete(index)}
                >
                  {item.text}
                </Checkbox>
              }
            />
            <Button type="danger" onClick={() => handleDeleteTodo(index)}>
              Delete
            </Button>
          </List.Item>
        )}
      />
    </div>
  );
};

export default TodoApp;
