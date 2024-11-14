import { MichiCounter } from '../MichiCounter';
import { MichiSearch } from '../MichiSearch';
import { MichiList } from '../MichiList';
import { MichiItem } from '../MichiItem';
import { MichiButton } from '../MichiButton';
import { AgregarMichi } from '../AgregarMichi';
import React from 'react';

function AppUI({
    countMichis,
    totalMichis,
    searchValue,
    setSearchValue,
    searchedMichi,
    MichiAcariciado,
    MichiMorido,
    click,
    setClick,
    setNuevoMichi,
    presionarenter,
    nuevoMichi,
    loading,
    error
}){
     
  return (  
    <React.Fragment>

      <MichiCounter completed={countMichis} total={totalMichis}/>
      <MichiSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <MichiList>
        {loading && <p>Carganding...</p>}
        {error && <p>Error en loa carga!!</p>}
        {(!loading && searchedMichi==0) && <p>Ingresa un nuevo michi para acariciar</p>}
        {searchedMichi.map(michi =>(
          <MichiItem 
          key={michi.text} 
          text={michi.text}
          completed={michi.completed} 
          onAcariciado={()=>MichiAcariciado(michi.text)}
          noMichi={()=>MichiMorido(michi.text)}
          />
        ))}
      </MichiList>
      <MichiButton click={click} setClick={setClick} />
      <AgregarMichi nuevoMichi={nuevoMichi} setNuevoMichi={setNuevoMichi} presionarenter={presionarenter}/>
    </React.Fragment>
  );
}

export {AppUI};