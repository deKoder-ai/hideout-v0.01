import { Component } from 'react';
import CountTasks from './CountTasks.jsx';
import css from './EditableTaskListClass.module.css';

class EditableTaskListClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: props.taskArray,
      inputVal: '',
      error: '',
      editTask: null,
      editValue: '',
    };

    this.x = 50;

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDeleteTask = this.handleDeleteTask.bind(this);
    this.handleEditTask = this.handleEditTask.bind(this);
    this.handleEditInputChange = this.handleEditInputChange.bind(this);
    this.handleSaveEdit = this.handleSaveEdit.bind(this);
    this.onCloseEdit = this.onCloseEdit.bind(this);
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

  handleEditTask(todo) {
    this.setState((state) => ({
      editTask: todo, // Store which task is being edited
      editValue: todo, // Pre-fill input with existing task text
    }));
  }

  handleEditInputChange(e) {
    this.setState({ editValue: e.target.value });
  }

  handleSaveEdit(oldTask) {
    this.setState((state) => ({
      todos: state.todos.map((todo) => (todo === oldTask ? state.editValue : todo)),
      editTask: null,
      editValue: '',
      error: '',
    }));
  }

  onCloseEdit() {
    this.setState({ editTask: null, editValue: '' });
    const input = document.getElementById('taskInput');
    input.focus();
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
          <ul>
            {this.state.todos.map((todo) => (
              <li key={todo} className={css.taskUnit}>
                {this.state.editTask === todo ? (
                  <>
                    <input
                      type='text'
                      className={css.editInput}
                      value={this.state.editValue}
                      autoFocus
                      onChange={this.handleEditInputChange.bind(this)}
                      onKeyDown={(e) => {
                        if (e.key === 'Escape') {
                          this.onCloseEdit();
                        } else if (e.key === 'Enter') {
                          this.handleSaveEdit(todo);
                        }
                      }}
                    />
                    <button className={css.exitEdit} onClick={() => this.onCloseEdit()}>
                      x
                    </button>
                    <button
                      className={css.save}
                      onClick={() => this.handleSaveEdit(todo)}
                    >
                      Edit
                    </button>
                  </>
                ) : (
                  <>
                    <p className={css.tasks}>- {todo}</p>
                    <button
                      className={css.edit}
                      onClick={() => this.handleEditTask(todo)}
                    ></button>
                    <button
                      className={css.delete}
                      onClick={() => this.handleDeleteTask(todo)}
                    ></button>
                  </>
                )}
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

export default EditableTaskListClass;
