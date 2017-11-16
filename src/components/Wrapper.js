import React, { Component } from 'react'
import Header from './Header'
import Content from './Content'

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
                <Header />
                <p>What's your moood?</p>
                <input
                    className='InputWrapper'
                    type='text'
                    ref='title'
                    value={this.state.title}
                    onChange={this.handleChange.bind(this)} />
                    <Content />
            </div>
        )
    }
    
}

export default Wrapper