import React, { Component } from 'react';
import './list-comp.css';
import TaskComp from './task-comp';


class ListComp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      
    };
    

  }// const

  render() {
    return (
      <div className='list'>
        {this.props.todos.map((todo, index) => {
          return (
            <TaskComp 
              key={index}
              handleClick={this.props.handleClick} 
              todo={todo}
            />       

          )  
        })}
      
      




        
      </div>
    );


  }// render






}// ListComp class


export default ListComp;