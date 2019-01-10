import React from 'react';
import './Modal.css';
import Popup from "reactjs-popup";

const modal = () =>{
    return(
    <Popup 
        trigger={<img className="plusImg" src={require('../../assets/photoshop slices/plus.png')} alt='plus element'></img>}
        modal
        closeOnDocumentClick>
            <div className="modalContent">
                <form>
                    <input type="text" placeholder="Imię"/>
                    <input type="text" placeholder="Wiek"/>
                    <input type="text" placeholder="Gatunek"/>
                    <input type="text" placeholder="Url zdjęcia"/>
                    <input type="text" placeholder="Jedzenie"/>

                    <button>DODAJ</button>
                </form>
            
            </div>
    </Popup>
    )
}


export default modal;