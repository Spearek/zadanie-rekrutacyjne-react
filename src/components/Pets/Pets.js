import React from 'react';
import Pet from './Pet/Pet';

const pets = (props) =>{

    console.log(props.petlist);
    let petlistManager = props.petlist.map(value=>{
        return <Pet
        petDetails = {value}
        />
    });

    return(
        <div className="petsContainer">
            {petlistManager}
        </div>
    )
}


export default pets;