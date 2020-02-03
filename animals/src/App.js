import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/layout/Header';
import Animals from './components/Animals';
import AddAnimal from './components/AddAnimal';
import About from './components/pages/About';
// import uuid from 'uuid'
import axios from 'axios';


import './App.css';


class App extends Component {
  state = {
    animals: []
  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(res => this.setState({animals: res.data}))
  }

  markAdopted = (id) => {
    this.setState({
      animals: this.state.animals.map(animal => {
        if (animal.id === id) {
          animal.adopted = !animal.adopted
        }
        return animal;
      })
    })
  }

  //Delete Animal
  delAnimal = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => this.setState({ animals: [...this.state.animals.filter(animal => animal.id !== id)] }))
  }

  // Add Animal
  addAnimal = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      adopted: false
    })
    .then(res => this.setState({ animals: [...this.state.animals, res.data]}));
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className='container'>
            <Header />
            <Route exact path='/' render={props => (
              <React.Fragment>
                <AddAnimal addAnimal={this.addAnimal} />
                <Animals animals={this.state.animals} markAdopted={this.markAdopted} delAnimal={this.delAnimal} />
              </React.Fragment>
            )} />
            <Route path='/about' component={About} />
          </div>
        </div>
      </Router>
    );
  }
}
export default App;
