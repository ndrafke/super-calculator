import React from 'react';
import Buttons from './Buttons';
import Operators from './Operators';

export default function Display() {
   
    const {display, history} = Operators();

    return (
        <div>
          <div className="calculator">
      <div className="display-container">
        <div id="history" className="history">
          {history}
        </div>
  <div id="display" className="display">
    {display}
        </div>
        </div>
      <Buttons />
  </div>  
        </div>
    )
}
