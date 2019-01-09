import React from 'react';

const displayedSpecies = (props) => {
    return (
        <option value = {props.selected}>{props.selected}</option>
    )
}

export default displayedSpecies;