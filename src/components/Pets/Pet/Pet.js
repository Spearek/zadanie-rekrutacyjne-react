import React from 'react';
import './Pet.css';

const pet = (props)=> {

    let petFoodlist = 'null';

    if(props.petDetails.favFoods !== undefined){
        console.log("Hello");
    
    }
    return(
        <div className="petInfo">
            <img src={props.petDetails.photo} alt={props.petDetails.species}/>
            <div className="petdetails">
            <p>Imię: {props.petDetails.name}</p>
            <p>Wiek: {2019 - props.petDetails.birthYear}</p>
            <p>Gatunek: {props.petDetails.species}</p>
            </div>
        </div>
        
    )
}


export default pet;