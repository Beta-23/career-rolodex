import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      robots: []
    };
  }
  // Life Cycle Method because of the class component
    componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ robots: users }));
    }
  
  render() {
    return (
      <div className='App'>
      <CardList robots= {this.state.robots}>
        
      </CardList>
        
      </div>
    );
  }
}

export default App;
