import React, { Component } from 'react';
import SomeTodos from '../shared/some-todos';
import './default-todos.css';


class DefaultTodos extends Component {

  constructor(props) {
    super(props);

    this.state = {
      deftods: SomeTodos
      
    };


  }// const

  render() {

    const deftodos = this.state.deftods.map((toes) => {
      
      return (

        <li key={toes.id}>
          <span>{toes.task}</span>

         
          <span>{toes.completed}</span>
        </li>

      );


    });
    

    return (
      <ul className='deftods'>
       {deftodos}
      </ul>

    );


  }// render






}// DefaultTodos class


export default DefaultTodos;