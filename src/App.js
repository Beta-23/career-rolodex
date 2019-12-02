import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      companies: [
        { 
          name: 'Coinbase', id: 'career1'
        },
        { 
          name: 'Workday', id: 'career2'
        },
        { 
          name: 'Amazon', id: 'career3'
        },
        { 
          name: 'Twilio', id: 'career4'
        },
        { 
          name: 'Nvidia', id: 'career5'
        }, 
      ]
    }
  }
    componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json().then(users => console.log(users)))
    }
  
  render() {
    return (
      <div className='App'>
        {
          // Only renders or changes the element that id that has been modify on the DOM v
          // ia the map array method to create a new array
          this.state.companies.map(company => (<h1 key= { company.id }>{ company.name }</h1>))
        }
      </div>
    );
  }
}

export default App;
