import './MichiList.css'
function MichiList (props){
    return(
      <ul className='GatosList'>
        {props.children}
      </ul>
    );
  }
export { MichiList };