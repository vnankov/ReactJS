import React, { Component } from 'react'
import TodoStore from '../stores/TodoStore'
class Wrapper extends Component{
    
    handleChange (event) {
        this.setState({title: event.target.value})
      }
      constructor(props){
        super(props)
    
        this.state = {
          title: '',
          todos: []
        }
        
      }
    
    
    render(){
        return(
            <div className='Wrapper'>
                <h1>I am contents</h1>
                <input
                    class='InputWrapper'
                    type='text'
                    ref='title'
                    value={this.state.title}
                    onChange={this.handleChange.bind(this)} />

            </div>
        )
    }
    
}

export default Wrapper