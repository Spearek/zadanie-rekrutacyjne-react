import React from 'react';
import './Pet.css';
import '../../../assets/photoshop slices/delete.png'

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
            <img className="close" src={require('../../../assets/photoshop slices/delete.png')} alt='xxx' />
        </div>
        
    )
}


export default pet;