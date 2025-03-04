import { Component } from 'react';
import css from './CountTasks.module.css';

class CountTasks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: props.numOfTasks,
    };

    // bind methods here
  }

  render() {
    return (
      <>
        <span className={css.numOfTasks}> - {this.props.numOfTasks}</span>
      </>
    );
  }
}

export default CountTasks;
