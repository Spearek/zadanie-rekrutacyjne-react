import React from 'react';
import './Pet.css';
import '../../../assets/photoshop slices/delete.png'

const pet = (props)=> {

    return(
        <div className="petInfo">
            <img src={props.petDetails.photo} alt={props.petDetails.species}/>
            <div className="petdetails">
                <p>Imię: {props.petDetails.name}</p>
                <p>Wiek: {2019 - props.petDetails.birthYear}</p>
                <p>Gatunek: {props.petDetails.species}</p>
            </div>
            <img className="close" src={require('../../../assets/photoshop slices/delete.png')} alt='xxx' onClick={props.click} />
        </div>
        
    )
}


export default pet;