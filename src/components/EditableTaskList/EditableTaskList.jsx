import { useState } from 'react';
import CountTasks from './CountTasks.jsx';
import css from './EditableTaskList.module.css';

const EditableTaskList = ({ taskArray, name }) => {
  const [todos, setTodos] = useState(taskArray);
  const [inputVal, setInputVal] = useState('');
  const [error, setError] = useState('');
  const [editTask, setEditTask] = useState(null);
  const [editValue, setEditValue] = useState('');

  const handleInputChange = (e) => {
    setInputVal(e.target.value);
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todos.includes(inputVal)) {
      setError('Task is already included in list');
      document.getElementById('taskInput').select();
    } else if (inputVal === '') {
      setError('Please enter a task');
    } else {
      setTodos([...todos, inputVal]);
      setInputVal('');
      setError('');
    }
  };

  const handleEditTask = (todo) => {
    setEditTask(todo);
    setEditValue(todo);
  };

  const handleEditInputChange = (e) => {
    setEditValue(e.target.value);
  };

  const handleSaveEdit = (oldTask) => {
    setTodos(todos.map((todo) => (todo === oldTask ? editValue : todo)));
    setEditTask(null);
    setEditValue('');
    setError('');
  };

  const onCloseEdit = () => {
    setEditTask(null);
    setEditValue('');
    document.getElementById('taskInput').focus();
  };

  const handleDeleteTask = (remove) => {
    setTodos(todos.filter((todo) => todo !== remove));
  };

  return (
    <div className={css.container}>
      <section>
        <h1 className={css.title}>
          {name} <CountTasks numOfTasks={todos.length} />
        </h1>
        <ul>
          {todos.map((todo) => (
            <li key={todo} className={css.taskUnit}>
              {editTask === todo ? (
                <>
                  <input
                    type='text'
                    className={css.editInput}
                    value={editValue}
                    autoFocus
                    onChange={handleEditInputChange}
                    onKeyDown={(e) => {
                      if (e.key === 'Escape') {
                        onCloseEdit();
                      } else if (e.key === 'Enter') {
                        handleSaveEdit(todo);
                      }
                    }}
                  />
                  <button className={css.exitEdit} onClick={onCloseEdit}>
                    x
                  </button>
                  <button className={css.save} onClick={() => handleSaveEdit(todo)}>
                    Edit
                  </button>
                </>
              ) : (
                <>
                  <p className={css.tasks}>- {todo}</p>
                  <button
                    className={css.edit}
                    onClick={() => handleEditTask(todo)}
                  ></button>
                  <button
                    className={css.delete}
                    onClick={() => handleDeleteTask(todo)}
                  ></button>
                </>
              )}
            </li>
          ))}
        </ul>
        <form onSubmit={handleSubmit}>
          <label htmlFor='task-entry' className={css.label}>
            Enter a task:
          </label>
          <input
            className={css.taskInput}
            type='text'
            name='task-entry'
            id='taskInput'
            value={inputVal}
            onChange={handleInputChange}
          />
          <button className={css.submit} type='submit'>
            Submit
          </button>
        </form>
        <p className={css.inputError}>{error}</p>
      </section>
    </div>
  );
};

export default EditableTaskList;
