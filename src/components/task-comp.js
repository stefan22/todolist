import React, { Component } from 'react';
import './task-comp.css';


class TaskComp extends Component {

  constructor(props) {
    super(props);




  }// const

  render() {



    return (

      <div className='task'>

       <p>
        <span style={{textDecoration: this.props.todo.done ? 
         'line-through' : 'none'}}>
          {this.props.todo.value}
        </span> 
        <button onClick={this.props.handleClick} className='btn btn-success btn-sm ml-3'>{this.props.todo.done ? 'Completed' : 'Not Complete'}</button>
      </p>

      </div>


    );


  }// render






}// TaskComp class


export default TaskComp;