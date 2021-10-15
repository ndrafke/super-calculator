import React from 'react';

export default function Display({display, history}) {
   
  //Display screen for calculator:
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
