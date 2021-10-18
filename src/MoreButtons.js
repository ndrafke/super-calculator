import React from 'react'

export default function MoreButtons({allClear, getResult, zeroClick, decimalClick, numberClick, moreClick, backClick, tenPercent, fifteenPercent, twentyPercent, twentyFivePercent}) {

    const buttonClick = (event) => {
        
        let val = event.target.value;
        switch(val){
          case "AC": allClear();
            break;
          case "=": getResult();
            break;
          case "0": zeroClick(val);
            break;
          case ".": decimalClick(val);
            break;
          case "10%": tenPercent();
          break;
          case "15%": fifteenPercent();
          break; 
          case "20%": twentyPercent();
          break; 
          case "25%": twentyFivePercent();
          break;   
          case "1": case "2": case "3": case "4": case "5": case "6": case "7": case "8": case "9": numberClick(val);
          break;
          case "more": moreClick();
          break;
          case "back": backClick();
          break;
          default:
        }  
      }  

    return (
        <div id="buttons" className="buttons">
        <button id="clear" value="AC" onClick={buttonClick}>AC</button>
        <button id="10percent" className="smaller-text" value="10%" onClick={buttonClick} >10%</button>
        <button id="15percent" className="smaller-text" value="15%" onClick={buttonClick}>15%</button>
        <button id="seven" value="7" onClick={buttonClick}>7</button>
        <button id="eight" value="8" onClick={buttonClick}>8</button>
        <button id="nine" value="9" onClick={buttonClick}>9</button>
        <button id="percent" className="smaller-text" value="20%" onClick={buttonClick}>20%</button>
        <button id="four" value="4" onClick={buttonClick}>4</button>
        <button id="five" value="5" onClick={buttonClick}>5</button>
        <button id="six" value="6" onClick={buttonClick}>6</button>
        <button id="25%" className="smaller-text" value="25%" onClick={buttonClick}>25%</button>
        <button id="one" value="1" onClick={buttonClick}>1</button>
        <button id="two" value="2" onClick={buttonClick}>2</button>
        <button id="three" value="3" onClick={buttonClick}>3</button>
        <button id="more" className="button-switch" value="more" onClick={buttonClick}>More</button>
        <button id="zero" value="0" onClick={buttonClick}>0</button>
        <button id="decimal" value="." onClick={buttonClick}>.</button>
        <button id="equals" value="=" onClick={buttonClick}>=</button>
        <button id="back" className="button-switch" value="back" onClick={buttonClick}>Back</button>
        </div>
    )
}
