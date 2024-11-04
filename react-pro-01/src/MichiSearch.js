import React from 'react';
import './MichiSearch.css'
function MichiSearch({searchValue, setSearchValue}){
    return(
        <input className='MichiSearch' placeholder="Acariciar dos michis Negros" 
          value={searchValue}
          onChange={(event)=>{
            setSearchValue(event.target.value);
          }
        }>
        
        </input>
    );
  }

export {MichiSearch};