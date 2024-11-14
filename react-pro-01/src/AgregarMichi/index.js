import React from 'react';
import './AgregarMichi.css'
function AgregarMichi({nuevoMichi, setNuevoMichi, presionarenter}){
    return(
        <input className='MichiLove' placeholder="Ingresa un nuevo michi al que dar amor" 
          value={nuevoMichi}
          onChange={(event)=>setNuevoMichi(event.target.value)}
          onKeyDown = {presionarenter}
          >
        </input>
    );
  }

export {AgregarMichi};