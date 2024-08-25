import React, { useState } from 'react';
import './App.css';

function App() {
  const [task, setTask] = useState('');
  const [date, setDate] = useState('');
  const [todoList, setTodoList] = useState([]);

  const addTask = () => {
    if (task.trim() && date.trim()) {
      setTodoList([...todoList, { task, date, isCompleted: false }]);
      setTask('');  
      setDate('');  
    }
  };

  const markAsDone = (index) => {
    const newList = [...todoList];
    newList[index].isCompleted = !newList[index].isCompleted;
    setTodoList(newList);
  };

  const removeTask = (index) => {
    const newList = [...todoList];
    newList.splice(index, 1);
    setTodoList(newList);
  };

  return (
    <div className="todo-container">
      <h1 className="title">Professional Todo List</h1>

      <div className="input-section">
        <input
          type="text"
          placeholder="Enter a task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>

      <ul className="task-list">
        {todoList.map((item, index) => (
          <li key={index} className={`task-item ${item.isCompleted ? 'completed' : ''}`}>
            <div className="task-details">
              <span className="task-text">{item.task}</span>
              <span className="task-date">Due: {item.date}</span>
            </div>
            <div className="actions">
              <button className="done-btn" onClick={() => markAsDone(index)}>
                {item.isCompleted ? 'Undo' : 'Done'}
              </button>
              <button className="remove-btn" onClick={() => removeTask(index)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
