import React, { Component } from 'react';
import './App.css';
import Pets from './components/Pets/Pets';
import SpeciesFilter from './components/SpeciesFilter/SpeciesFilter';

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
    ],
    speciesList:[],
    displayedSPecies:[
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
    ],
    displayedValue:'Gatunki'
  }

  componentDidMount(){
    this.speciesListHandler();
  }

  deletePetHandler = (petIndex) =>{
    const newPetArr = JSON.parse(JSON.stringify(this.state.pets));
    newPetArr.splice(petIndex,1);
    this.setState({pets: newPetArr});
  }

  speciesListHandler = () =>{
    let list = this.state.pets.map(species=>{return species.species}).reduce((x,y)=>{
      if(x.indexOf(y)<0) x.push(y);
      return x;
    },[])
    this.setState({speciesList:list});
  }


  speciesDisplayHandler=(event)=>{
    let activePet = event.target.value;
    if (event.target.value === 'Gatunki') {
      let pets=this.state.pets;
      this.setState({displayedSPecies:pets,displayedValue:'Gatunki'})
    }
    else{
      let displayed = this.state.pets.filter(pet=>{return pet.species === event.target.value});
      this.setState({displayedSPecies:displayed,displayedValue:activePet})
    }
  }


  ageSortHandler = ()=>{
    let newPetArr = JSON.parse(JSON.stringify(this.state.pets));
    let petAges = newPetArr.map(value=>{return value.birthYear});
    petAges.sort();
      if(this.state.sorted){
        petAges.reverse();
        this.setState({sorted:false});
    }
    else{
      this.setState({sorted:true});
    }
    let sortedPetArr =[];
    for(let i=0;i<petAges.length;i++){
      newPetArr.forEach(element => {
        if(element.birthYear === petAges[i]){
          sortedPetArr.push(element)
        }
      });
    }
    this.setState({pets:sortedPetArr});
  }

  nameSortHandler = ()=>{
    let newPetArr = JSON.parse(JSON.stringify(this.state.pets));
    let petNames = newPetArr.map(value=>{return value.name});
    petNames.sort();
      if(this.state.sorted){
        petNames.reverse();
        this.setState({sorted:false});
    }
    else{
      this.setState({sorted:true});
    }
    let sortedPetArr =[];
    for(let i=0;i<petNames.length;i++){
      newPetArr.forEach(element => {
        if(element.name === petNames[i]){
          sortedPetArr.push(element)
        }
      });
    }
    this.setState({pets:sortedPetArr});
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

    return (
      <div className="App">
        <div className="sortingElements">
          <div className="itemsLeft">
            <h5>Sortowanie</h5>
            <button onClick={this.ageSortHandler}>WIEK</button>
            <button onClick={this.nameSortHandler}>IMIE</button>
          </div>
          <div className="itemsRight">
            <h5>Filtry</h5>
            <SpeciesFilter
              petList={this.state.speciesList}
              list = {this.speciesListHandler}
              changed={this.speciesDisplayHandler}
              selectValue={this.state.displayedValue}/>
          </div>
        </div>


        <Pets 
          petlist={this.state.displayedSPecies}
          click={this.deletePetHandler}
          />
      </div>
    );
  }
}

export default App;
