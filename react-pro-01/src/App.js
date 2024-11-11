import { MichiCounter } from './MichiCounter';
import { MichiSearch } from './MichiSearch';
import { MichiList } from './MichiList';
import { MichiItem } from './MichiItem';
import { MichiButton } from './MichiButton';
import { AgregarMichi } from './AgregarMichi';
import './App.css';


/*librarys*/
import React from 'react';

function useLocalStorage(itemName, initialValue){
  const localStorageItem = localStorage.getItem(itemName);
  
  let parsedItem;
  if(!localStorageItem){
  localStorage.setItem(itemName,JSON.stringify(initialValue));
    parsedItem = [];
  } else{
    parsedItem = JSON.parse(localStorageItem);
  }
  const [item, setItem] = React.useState(parsedItem);
  const saveItem = (newItem) =>{
    localStorage.setItem('Michis_V1',JSON.stringify(newItem));
    setItem(newItem);
  };
  return [item, saveItem];
};
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
  };
  console.log(nuevoMichi);
  return (  
    <React.Fragment>
      <MichiCounter completed={countMichis} total={totalMichis}/>
      <MichiSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <MichiList>
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
export default App;
