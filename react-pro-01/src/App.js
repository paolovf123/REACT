import { MichiCounter } from './MichiCounter';
import { MichiSearch } from './MichiSearch';
import { MichiList } from './MichiList';
import { MichiItem } from './MichiItem';
import { MichiButton } from './MichiButton';
import './App.css';


/*librarys*/
import React from 'react';
const defaultMichis=[
  {text: 'Michi cabro', completed: false},
  {text: 'Michi visexual', completed: true},
  {text: 'Michi normal', completed: false},
  {text: 'Michi sexoso', completed: false},
  {text: 'Michi lesbico', completed: true},
  {text: 'Michi poliquistico', completed: true}
]

function App() {
  const [michiPendiente, setMichiPendiente] = React.useState(defaultMichis);
  const [searchValue, setSearchValue]= React.useState('');

  const searchedMichi = michiPendiente.filter((michi)=>{
   const michiTextMin = michi.text.toLowerCase();
    const michiTextMay = michi.text.toUpperCase();
    if(michiTextMin.includes(searchValue)){
      return michi.text.includes(searchValue);
    }
    if(michiTextMay.includes(searchValue)){
      return michi.text.includes(searchValue);
    }
    if(michi.text.includes(searchValue)){
      return michi.text.includes(searchValue);
    }
  }
);

  const totalMichis = michiPendiente.length;
  const countMichis = michiPendiente.filter(michi =>michi.completed).length;
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
          />
        ))}
      </MichiList>
      <MichiButton/>
    </React.Fragment>
  );
}
export default App;
