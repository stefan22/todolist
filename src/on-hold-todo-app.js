import React, { Component } from 'react';
import NavbarComp from './components/navbar-comp';
import './todo-app.css';
import DefaultTodos from './components/default-todos';

class TodoApp extends Component {

  constructor(props) {
    super(props);

    this.state = {
      todo: '',
      default: DefaultTodos
    };

    this.handleInputSubmit = this.handleInputSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);

    
  }// const

  handleInputSubmit(event) {
    debugger;
    console.log(event);
    const stateTodoVal = JSON.stringify(this.state.todo);
    console.log('Current State is: ' + JSON.stringify(this.state));
    event.preventDefault();
    return stateTodoVal;


  }// handleInputSubmit


  handleInputChange(event) {
    const tarPrevValue = event.target.defaultValue;
    console.log('prev value: ', tarPrevValue);
    const name = event.target.name;
    const tarCurValue = event.target.value;
    console.log('current value: ', tarCurValue);

    this.setState({
      [name]: tarCurValue
    
    });

  }// handleInputChange

  

  render() {


    return (

      <div className='todo-wrapper'>

          <NavbarComp />

        <div className='main-content'>
          <div className='container'>
            <div className='row'>
              <div className='col-12'>
                <div className='todomain'>
                  <div className='todoinput'>
                    <form id='todoform'
                      onSubmit={this.handleInputSubmit}>
                      <input type='text'
                        name='todo'
                        value= {this.state.todo}
                        onChange= {this.handleInputChange}
                        placeholder='enter your todo' />
                      <button type='submit' 
                              className='btn btn-primary ml-3' 
                              color='primary'>Add Todo
                      </button>
                    </form>
                  </div>

                    <div className='todo-response'>
                        {this.state.todo}

                       
                        <DefaultTodos />
                       
                  
                    </div>

                </div>
                </div>
              </div>
            </div>
        </div>

      </div>

    );

  }// render










}// TodoApp class


export default TodoApp;