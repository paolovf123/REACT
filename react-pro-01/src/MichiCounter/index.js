import './MichiCounter.css';

function MichiCounter({total, completed}){
    return(
      <h1 className='MichiCounter'>
        Has acariciado 
        <span> {completed} </span> 
        de 
        <span> {total} </span> 
        michis
      </h1>
    );
  }

export { MichiCounter };