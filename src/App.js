import React, { Component } from 'react';
import './App.css';
import Home from './Containers/home'
import {Switch, Route, Link } from 'react-router-dom';
import Post from './Components/Post';
import Nav from './Components/nav';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Nav/>
                <h2 className='header'>React Sample Blog Page</h2>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/post/:id' component={Post}/>
                </Switch>
            </div>
        );
    }
}

export default App;
