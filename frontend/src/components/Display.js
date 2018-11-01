import React, { Component } from 'react';
import CharacterMenu from './CharacterMenu'
import Home from './Home'
import Characters from './Characters'

export default class Display extends Component {
    render() {
        return (
            <div>
                <CharacterMenu />
                <Home />
                <Characters />
            </div>
        )
    }
}
