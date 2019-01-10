import React from 'react';
import Pet from './Pet/Pet';

const pets = (props) =>{


    let petlistManager = props.petlist.map((value,index)=>{
        return <Pet
        petDetails = {value}
        click = {()=>props.click(value.birthYear)}
        />
    });

    return(
        <div className="petsContainer">
            {petlistManager}
        </div>
    )
}


export default pets;