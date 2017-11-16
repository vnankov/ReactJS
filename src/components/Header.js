import React, { Component } from 'react'
import Notification from './Notification'

class Header extends Component {
    render() {
        return(
            <div className='Header'>
                <h2>I am header ...</h2>
                <Notification />
            
            </div>
        )
    }
}
export default Header