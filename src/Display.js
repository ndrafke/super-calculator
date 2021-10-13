import React from 'react';
import Buttons from './Buttons';


export default function Display({display, history}) {
   

    return (
        <div>
         
      <div className="display-container">
        <div id="history" className="history">
          {history}
        </div>
  <div id="display" className="display">
    {display}
        </div>
        </div>
      
   
        </div>
    )
}
