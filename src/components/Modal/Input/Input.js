import React from 'react';

const inputs = (props)=>{
    return( <input type="text" placeholder={props.placeholder} value={props.value} onChange={props.changed}/>)
}


export default inputs;