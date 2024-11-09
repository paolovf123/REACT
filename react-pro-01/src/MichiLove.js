import React from 'react';
import './MichiLove.css'
function MichiLove({newMichi,setNewMichi}){
    return(
        <input className='MichiLove' placeholder="Ingresa un nuevo michi al que dar amor" 
          value={newMichi}
          onChange={(event)=>{
            setNewMichi(event.target.value);
          }
        }>
        </input>
    );
  }

export {MichiLove};