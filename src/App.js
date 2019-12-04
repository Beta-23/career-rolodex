import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      companies: []
    };
  }
  // Life Cycle Method because of the class component
    componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ companies: users }));
    }
  
  render() {
    return (
      <div className='App'>
      <CardList name= 'Al'>
        {
          // Only renders or changes the element that id that has been modify on the DOM v
          // ia the map array method to create a new array
          this.state.companies.map(company => (<h1 key= { company.id }>{ company.name }</h1>))
        }
      </CardList>
        
      </div>
    );
  }
}

export default App;
