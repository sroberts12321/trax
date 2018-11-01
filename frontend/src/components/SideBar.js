import React, { Component } from 'react'

class SideBar extends Component {
    render() {
        return (
            <div className="sidebar">
                <ul>
                    <a href='/home'><li>Home</li></a>
                    <a href='/characters'><li>Characters</li></a>
                    <a href='/dmtools'><li>DM Tools</li></a>
                    <a href='/contact'><li>Contact</li></a>
                </ul>

            </div>
        )
    }
}

export default SideBar;