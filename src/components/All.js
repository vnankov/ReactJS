import React, { Component } from 'react'
import TodoList from './TodoList'
import Wrapper from './Wrapper'
import SideBar from './SideBar'

export default class All extends Component {
    render () {
        return(
            <div>
                 <SideBar />
                 <Wrapper />
                 <TodoList />
            </div>
        )
    }
}