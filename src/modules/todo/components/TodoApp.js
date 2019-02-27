import React from 'react';
import { TodoContext } from './todo-context';

import '../../../TodoApp.css';

import { TodoActions } from './TodoActions'
import { TodoList } from './TodoList'
import { TodoAdd } from './TodoAdd'
import {getData} from "../../../api/api";

export default class TodoApp extends React.Component {
  constructor(props) {
    super(props);

    this.handleFilter = (value) => {
      this.setState({
        filter: value
      })
    };

    this.addTodo = (e) => {
      let target = e.target;
      let value = target.value;

      if(e.keyCode === 13) {

        let todo = {
          id: new Date().getTime(),
          title: value,
          completed: false
        };
  
        this.setState({
          todos: [...this.state.todos, todo]
        }, () => {
          target.value = ''
        })
      }
    };
    
    this.state = {
      todos: [
        { id: 1, title: 'Todo 1', completed: false },
        { id: 2, title: 'Todo 2', completed: true },
        { id: 3, title: 'Todo 3', completed: false }
      ],
      filter: 'all', // active, completed,
      deleted: [],
      handleFilter: this.handleFilter,
      addTodo: this.addTodo
    }    
  }
  componentDidMount() {
      getData('/todos')
      .then(data => {
          this.setState({
              todos: data.json,
          });
      });
  }
  render() {
    return  <React.Fragment>
      <section className="todoapp">
        <TodoContext.Provider value={this.state}>
          <TodoAdd />
          <TodoList />
          <TodoActions />
        </TodoContext.Provider>
      </section>
    </React.Fragment>;
  }
}