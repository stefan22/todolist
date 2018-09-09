import React, { Component } from 'react';
import './form-comp.css';


class FormComp extends Component {

  constructor(props) {
    super(props);

   
  
  }// const

  

  render() {

    return (
      <div className='todo-input'>
      
        <form 
          onSubmit={(evt) => this.props.handleSubmit(evt)}
          id='todoform'>

          <input type='text'
            name='todo'
            
            onChange={(evt) => this.props.handleChange(evt)}
            value={this.props.inputValue}
            placeholder='enter your todo' />

          <button type='submit'
            className='btn btn-primary ml-3'
            color='primary'>Add Todo
          </button>
        </form>

      </div>
      

    );


  }// render






}// FormComp class


export default FormComp;