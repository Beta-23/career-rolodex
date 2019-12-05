import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      robots: [],
      searchField: ''
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
      <input 
        type='search' 
        placeholder= 'Search Robot' 
        onChange={e => {
          this.setState({ searchField: e.target.value }, () => 
          console.log(this.state)
          );
        }} 
      />
      <CardList robots= {this.state.robots} />
 
      </div>
    );
  }
}

export default App;
