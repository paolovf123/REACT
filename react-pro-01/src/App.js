import { MichiCounter } from './MichiCounter';
import { MichiSearch } from './MichiSearch';
import { MichiList } from './MichiList';
import { MichiItem } from './MichiItem';
import { MichiButton } from './MichiButton';
import './App.css';


/*librarys*/
import React from 'react';

const defaultMichis = [
  {text: 'Michi cabro', completed: false},
  {text: 'Michi visexual', completed: true},
  {text: 'Michi normal', completed: false},
  {text: 'Michi sexoso', completed: false}
];

function App() {
  const total = defaultMichis.length;
  let c=0;
  if (defaultMichis.completed = true){
    c++;
  }
  return (
    <React.Fragment>
      <MichiCounter completed={c} total={total}/>
      <MichiSearch/>

      <MichiList>
        {defaultMichis.map(michi =>(
          <MichiItem 
          key={michi.text} 
          text={michi.text}
          completed ={michi.completed}
          />
        ))}
      </MichiList>
      <MichiButton/>
    </React.Fragment>
  );
}
export default App;
