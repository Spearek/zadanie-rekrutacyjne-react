import React from 'react';
import SelectedSpecies from './SelectedSpecies/SelectedSpecies';

const filter = (props) =>{
    let species = props.petList.map(pet=>{
        return <SelectedSpecies
            selected={pet}/>
    });
    return(
    <div>
        <select onChange={props.changed} value={props.displayedValue}>
            <option value='Gatunki'>Gatunki</option>
            {species}
        </select>
    </div>
    )
}


export default filter;