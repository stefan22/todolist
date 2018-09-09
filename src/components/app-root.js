import React, { Component } from 'react';
import './app-root.css';
import NavbarComp from './navbar-comp';
import DefaultTodos from './default-todos';
import FormComp from './form-comp';
import ListComp from './list-comp';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      todos: [
        {
          value: 'do your taxes',
          done: false
        },
        {
          value: 'call your brother, birthday friday',
          done: false
        },
        {
          value: 'buy some groceries',
          done: true
        }
      ]   
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }// const

  handleChange(evt) {
    console.log(evt.target.value);
    this.setState({
      inputValue: evt.target.value
    });

  }// handleChange 

  handleClick() {
    console.log('handle click');

  }

  handleSubmit(evt) {
    evt.preventDefault();
    console.log('submit');
    const newTodo = {
      value: this.state.inputValue,
      done: false
    };
    const todos = this.state.todos;
    todos.push(newTodo);
    this.setState({todos: todos, inputValue: ''});

  }// handleSubmit


  render() {


    return (

      <div className='todo-wrapper'>

        <NavbarComp />

        <div className='main-content'>
          <div className='container'>
            <div className='row'>
              <div className='col-12'>
                <div className='todomain'>
                
                  <div className='todo-response'>
                   
                    <FormComp
                      handleChange={this.handleChange}
                      inputValue={this.state.inputValue} 
                      handleSubmit={this.handleSubmit}
                    />

                    <ListComp
                      todos={this.state.todos} 
                      handleClick={this.handleClick}
                    />

                    <DefaultTodos 
                    />


                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    );



  }// render





}// App class


export default App;