import './MichiItem.css';
function MichiItem (props){
    return(
      <li className="ListItem">
        <img className="check-yes check-none" src="https://images.vexels.com/media/users/3/157932/isolated/preview/951a617272553f49e75548e212ed947f-icono-de-marca-de-verificacion-curvada.png"></img>
        <p className={`MichiText ${props.completed && 'MichiText--complete'}`}>{props.text}</p>
        <img className="x-yes x-none" src="https://img.freepik.com/psd-gratis/marca-cruz-aislada_23-2151478807.jpg" ></img>
      </li>
    );
  }

export { MichiItem };