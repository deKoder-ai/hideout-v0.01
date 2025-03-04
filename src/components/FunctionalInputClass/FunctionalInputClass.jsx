import { Component } from 'react';
import CountTasks from './CountTasks.jsx';
import css from './FunctionalInputClass.module.css';

class FunctionalInputClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: props.taskArray,
      inputVal: '',
      error: '',
    };

    this.x = 50;

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDeleteTask - this.handleDeleteTask.bind(this);
  }

  handleInputChange(e) {
    this.setState((state) => ({
      ...state,
      inputVal: e.target.value,
      error: '',
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.todos.includes(this.state.inputVal)) {
      this.setState((state) => ({
        ...state,
        error: 'Task is already included in list',
      }));
      const input = document.getElementById('taskInput');
      input.select();
    } else if (this.state.inputVal === '') {
      this.setState((state) => ({
        ...state,
        error: 'Please enter a task',
      }));
    } else if (this.state.inputVal !== '') {
      this.setState((state) => ({
        todos: state.todos.concat(state.inputVal),
        inputVal: '',
        error: '',
      }));
    }
  }

  handleDeleteTask(remove) {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo !== remove),
    }));
  }

  render() {
    return (
      <div className={css.container}>
        <section>
          <h1 className={css.title}>
            {this.props.name} <CountTasks numOfTasks={this.state.todos.length} />
          </h1>

          {/* <h4>All the tasks!</h4> */}
          <ul>
            {this.state.todos.map((todo, index) => (
              <li key={todo} className={css.taskUnit}>
                <p className={css.tasks}>- {todo}</p>
                <button
                  className={css.delete}
                  onClick={() => this.handleDeleteTask(todo)}
                ></button>
              </li>
            ))}
          </ul>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor='task-entry' className={css.label}>
              Enter a task:
            </label>
            <input
              className={css.taskInput}
              type='text'
              name='task-entry'
              id='taskInput'
              value={this.state.inputVal}
              onChange={this.handleInputChange}
            />
            <button className={css.submit} type='submit'>
              Submit
            </button>
          </form>
          <p className={css.inputError}>{this.state.error}</p>
        </section>
      </div>
    );
  }
}

export default FunctionalInputClass;
