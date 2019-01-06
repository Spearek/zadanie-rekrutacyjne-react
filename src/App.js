import React, { Component } from 'react';
import './App.css';
import Pets from './components/Pets/Pets';

class App extends Component {

  state ={
    pets:[
      {
        name: "Purrsloud",
        species: "Cat",
        favFoods: ["wet food", "dry food", "<strong>any</strong> food"],
        birthYear: 2016,
        photo: "https://learnwebcode.github.io/json-example/images/cat-2.jpg"
      },
      {
        name: "Barksalot",
        species: "Dog",
        birthYear: 2008,
        photo:  "https://learnwebcode.github.io/json-example/images/dog-1.jpg"
      },
      {
        name: "Meowsalot",
        species: "Cat",
        favFoods: ["tuna", "catnip", "celery"],
        birthYear: 2012,
        photo: "https://learnwebcode.github.io/json-example/images/cat-1.jpg"
      }
    ]
  }

  /*constructor(props) {
    super(props);

    this.state = {
      pets: []
    };

    fetch("http://127.0.0.1:8080/pets-data.json")
      .then(resp => resp.json())
      .then(this.setState.bind(this));
  }*/

  render() {
   // console.log(this.state.pets);
   // console.log(this.state.pets[0]);

    return (
      <div className="App">
        <Pets
        petlist={this.state.pets}
        />
      </div>
    );
  }
}

export default App;
