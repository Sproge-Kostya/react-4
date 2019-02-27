import React from 'react'

export const defaultState = {
  todos: [],
  filter: 'all',
  deleted: [],
  handleFilter: () => {},
  addTodo: () => {}
};

export const TodoContext = React.createContext(defaultState);