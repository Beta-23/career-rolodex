import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';

import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  // constructor runs first before anything else gets called
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
    // e => binds the this.method
    handleChange = (e) => {
      this.setState({ searchField: e.target.value })
    }
  render() {
    const { robots, searchField } = this.state;
    const filteredRobots = robots.filter(robot => 
      robot.name.toLowerCase().includes(searchField.toLowerCase()));
      
    return (
      <div className='App'>
      <SearchBox 
        placeholder= 'Search Robot' 
        handleChange= {this.handleChange}
      />
      <CardList robots= {filteredRobots} />
      </div>
    );
  }
}

export default App;
