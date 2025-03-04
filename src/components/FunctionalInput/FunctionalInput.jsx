import { useState } from 'react';
import css from './FunctionalInput.module.css';

const FunctionalInput = ({ props }) => {
  const [todos, setTodos] = useState(props.taskArray);
  const [inputVal, setInputVal] = useState('');

  const handleInputChange = (e) => {
    setInputVal(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos((todo) => [...todo, inputVal]);
    setInputVal('');
  };

  return (
    <section>
      <h1 className={css.title}>{props.name}</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='task-entry' className={css.label}>
          Enter a task:
        </label>
        <input
          className={css.taskInput}
          type='text'
          name='task-entry'
          value={inputVal}
          onChange={handleInputChange}
        />
        <button type='submit' className={css.submit}>
          Submit
        </button>
      </form>
      {/* <h4>All the tasks!</h4> */}
      <ul>
        {todos.map((todo) => (
          <li key={`${todo}-${crypto.randomUUID()}`} className={css.tasks}>
            {todo}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FunctionalInput;
