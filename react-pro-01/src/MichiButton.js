import React from 'react';
import './MichiButton.css'
function MichiButton ({click, setClick, addMichi}){
    return(
      <>
        <button className="MichiButton" onClick={()=>{
          setClick(click++);
        }}>
          <img src='https://static.vecteezy.com/system/resources/previews/016/776/122/non_2x/silhouette-of-a-cat-s-paw-paw-prints-a-dog-or-cat-puppy-icon-a-trace-of-a-pet-vector.jpg'></img>
        </button>
        <p className='MichiClick'>Chocaste la motita {click} veces</p>
      </>
    );
  }
export {MichiButton};
/*defaultMichis.push({text:`${newMichi}`, completed: false});
{newMichi, defaultMichis}
*/
