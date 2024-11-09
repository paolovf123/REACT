import { MichiCounter } from './MichiCounter';
import { MichiSearch } from './MichiSearch';
import { MichiList } from './MichiList';
import { MichiItem } from './MichiItem';
import { MichiButton } from './MichiButton';
import { MichiLove } from './MichiLove';
import './App.css';


/*librarys*/
import React from 'react';
const defaultMichis=[
  {text: 'Michi marron', completed: false},
  {text: 'Michi blanco', completed: true},
  {text: 'Michi normal', completed: false},
  {text: 'Michi vaquita', completed: false},
  {text: 'Michi naranja', completed: true},
  {text: 'Michi kawai', completed: true}
]

function App() {
  const [michiPendiente, setMichiPendiente] = React.useState(defaultMichis);
  const [searchValue, setSearchValue]= React.useState('');
  const [click, setClick] = React.useState(0);

  const searchedMichi = michiPendiente.filter((michi)=>{
      return michi.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase());
    }
  );

  const [newMichi,setNewMichi] = React.useState('');

  const totalMichis = michiPendiente.length;
  const countMichis = michiPendiente.filter(michi =>michi.completed).length;

  const MichiAcariciado = (text) => {
    let newGato = [...michiPendiente];
    const michiIndex = newGato.findIndex(
      (michi)=>michi.text == text
    );
    newGato[michiIndex].completed = true;
    setMichiPendiente(newGato);
  }

  const MichiMorido = (text) => {
    let newGato = [...michiPendiente];
    const michiIndex = newGato.findIndex(
      (michi)=>michi.text == text);
    newGato.splice(michiIndex,1);
    setMichiPendiente(newGato);
  }

  const addMichi = ()=>{
    let newGato = {text : newMichi, completed: false};
    setMichiPendiente(newGato);
  }
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
      <MichiButton click={click} setClick={setClick} addMichi={()=>addMichi} />
      <MichiLove newMichi={newMichi} setNewMichi={setNewMichi}/>
    </React.Fragment>
  );
}
export default App;
