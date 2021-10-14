import React from 'react'

export default function Buttons({allClear, getResult, operatorClick, zeroClick, decimalClick, numberClick, moreClick}) {

    const handleClick = (event) => {
        
        let val = event.target.value;
        switch(val){
          case "AC": allClear();
            break;
          case "=": getResult();
            break;
          case "+":
          case "-":
          case "*":
          case "/": operatorClick(val);
            break;
          case "0": zeroClick(val);
            break;
          case ".": decimalClick(val);
            break;
          case "1": case "2": case "3": case "4": case "5": case "6": case "7": case "8": case "9": numberClick(val);
          break;
          case "more": moreClick();
          break;
          default: allClear();
        }  
      }  

    return (
        <div id="buttons" className="buttons">  
        <button id="clear" value="AC" onClick={handleClick}>AC</button>
        <button id="divide" value="/" onClick={handleClick} >&#247;</button>
        <button id="seven" value="7" onClick={handleClick}>7</button>
        <button id="eight" value="8" onClick={handleClick}>8</button>
        <button id="nine" value="9" onClick={handleClick}>9</button>
        <button id="multiply" value="*" onClick={handleClick}>x</button>
        <button id="four" value="4" onClick={handleClick}>4</button>
        <button id="five" value="5" onClick={handleClick}>5</button>
        <button id="six" value="6" onClick={handleClick}>6</button>
        <button id="subtract" value="-" onClick={handleClick}>-</button>
        <button id="one" value="1" onClick={handleClick}>1</button>
        <button id="two" value="2" onClick={handleClick}>2</button>
        <button id="three" value="3" onClick={handleClick}>3</button>
        <button id="add" value="+" onClick={handleClick}>+</button>
        <button id="zero" value="0" onClick={handleClick}>0</button>
        <button id="decimal" value="." onClick={handleClick}>.</button>
        <button id="equals" value="=" onClick={handleClick}>=</button>
        <button id="more" className="button-switch" value="more" onClick={handleClick}>More</button>     
      </div>
    )
}
