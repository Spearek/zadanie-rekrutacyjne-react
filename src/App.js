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

  
  deletePetHandler = (petIndex) =>{
    const newPetArr = JSON.parse(JSON.stringify(this.state.pets));
    newPetArr.splice(petIndex,1);
    this.setState({pets: newPetArr});
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
        <div className="sortingElements">
          <div className="itemsLeft">
            <h5>Sortowanie</h5>
            <button>WIEK</button>
            <button>IMIE</button>
          </div>
          <div className="itemsRight">
            <h5>Filtry</h5>
            <select>
            <option value="species">GATUNKI</option>
              <option value="cat">CAT</option>
              <option value="dog">DOG</option>
            </select>
          </div>
        </div>


        <Pets 
          petlist={this.state.pets}
          click={this.deletePetHandler}
          />
      </div>
    );
  }
}

export default App;
