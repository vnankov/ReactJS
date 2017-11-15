import React, { Component } from 'react';
import './App.css';
import TodoList from './components/TodoList'
import Wrapper from './components/Wrapper'
import SideBar from './components/SideBar'
import Header from './components/Header'
class App extends Component {
  render() {
    return(
      <div className='App'>
        <Header />
        <SideBar />
        <Wrapper />
        <TodoList />
        
      </div>
    )
  }
}

export default App;
