import React from 'react';
import './MichiButton.css'
function MichiButton (){
  let [click, setClick] = React.useState(0)
    return(
      <>
        <p className='MichiClick'>Chocaste la motita {click} veces</p>
        <button className="MichiButton" onClick={(evet)=>{
            setClick(click++)
            }
          }>
          <img src='https://static.vecteezy.com/system/resources/previews/016/776/122/non_2x/silhouette-of-a-cat-s-paw-paw-prints-a-dog-or-cat-puppy-icon-a-trace-of-a-pet-vector.jpg'></img>
        </button>
      </>
    );
  }
export {MichiButton};