import React, { useState } from 'react';
import { Input, Tabs, List, Checkbox, Button } from 'antd';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    // 添加新任务的逻辑
  };

  const toggleTodo = (index) => {
    // 标记任务完成的逻辑
  };

  const editTodo = (index, newText) => {
    // 编辑任务的逻辑
  };

  const deleteTodo = (index) => {
    // 删除任务的逻辑
  };

  const deleteDoneTodos = () => {
    // 删除已完成任务的逻辑
  };

  const deleteAllTodos = () => {
    // 删除所有任务的逻辑
  };

  return (
    <div>
      <Input
        placeholder="Add new task"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        onPressEnter={addTodo}
      />
      <Tabs>
        {/* 所有任务、已完成任务和待办任务的列表 */}
      </Tabs>
      <Button onClick={deleteDoneTodos}>Delete done tasks</Button>
      <Button onClick={deleteAllTodos}>Delete all tasks</Button>
    </div>
  );
};

export default TodoList;
