import React from 'react';
import './Modal.css';
import Popup from "reactjs-popup";
import Input from './Input/Input';

const modal = (props) =>{

   let inputsContainer = props.newPet.map(p=>{return <Input
    placeholder={p.type}
    value={p.value}
    changed={(event)=>props.changed(event,p.type)}
    />
    });
    return(
    <Popup 
        trigger={<img className="plusImg" src={require('../../assets/photoshop slices/plus.png')} alt='plus element'></img>}
        modal
        closeOnDocumentClick>
            <div className="modalContent">
                <form>
                    {inputsContainer}

                    <p class="btn" onClick={props.updated}>DODAJ</p>
                </form>
            
            </div>
    </Popup>
    )
}


export default modal;