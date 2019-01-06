import React from 'react';
import './Pet.css';
import '../../../assets/photoshop slices/delete.png'

const pet = (props)=> {

    let favorites = null;

    if(props.petDetails.favFoods !== undefined){
        favorites = (
           <div className="favFoodContainer">
               <p>Ulubione jedzenie:</p>
               {props.petDetails.favFoods.map(value=>{
                   return <p className="dish">{value}</p>
               })}
           </div>     
            )
    
    }
    return(
        <div className="petInfo">
            <img src={props.petDetails.photo} alt={props.petDetails.species}/>
            <div className="petdetails">
                <p>Imię: {props.petDetails.name}</p>
                <p>Wiek: {2019 - props.petDetails.birthYear}</p>
                <p>Gatunek: {props.petDetails.species}</p>
                {favorites}
            </div>
            <img className="close" src={require('../../../assets/photoshop slices/delete.png')} alt='delete element' onClick={props.click} />
        </div>
        
    )
}


export default pet;