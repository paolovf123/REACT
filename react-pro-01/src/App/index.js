import {useLocalStorage} from './useLocalStorage';
import {AppUI} from './AppUI';

/*librarys*/
import React from 'react';

function App() {
  const [michiPendiente, saveMichis] = useLocalStorage('Michis_V1',[]);

  const [searchValue, setSearchValue]= React.useState('');

  const [nuevoMichi, setNuevoMichi] = React.useState('');

  const [click, setClick] = React.useState(0);

  const searchedMichi = michiPendiente.filter((michi)=>{
      return michi.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase());
    }
  );

  const totalMichis = michiPendiente.length;
  const countMichis = michiPendiente.filter(michi =>michi.completed).length;

  const MichiAcariciado = (text) => {
    let newGato = [...michiPendiente];
    const michiIndex = newGato.findIndex(
      (michi)=>michi.text == text
    );
    newGato[michiIndex].completed = true;
    saveMichis(newGato);
  }

  const MichiMorido = (text) => {
    let newGato = [...michiPendiente];
    const michiIndex = newGato.findIndex(
      (michi)=>michi.text == text);
    newGato.splice(michiIndex,1);
    saveMichis(newGato);
  }
  const presionarenter = (event) => {
    if (event.key === 'Enter' && nuevoMichi.trim() !== '') {
      const gatoActual = [...michiPendiente, {text: nuevoMichi, completed: false}];
      saveMichis(gatoActual);
      setNuevoMichi('');
    }
  }

  return(
    <AppUI
    countMichis={countMichis}
    totalMichis={totalMichis} 
    searchValue={searchValue} 
    setSearchValue={setSearchValue} 
    searchedMichi={searchedMichi} 
    MichiAcariciado={MichiAcariciado} 
    MichiMorido={MichiMorido} 
    click={click} 
    setClick={setClick} 
    setNuevoMichi={setNuevoMichi} 
    presionarenter={presionarenter} 
    nuevoMichi={nuevoMichi}
    />
  );
}
export default App;