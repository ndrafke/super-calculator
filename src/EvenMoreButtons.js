import React from 'react'

export default function EvenMoreButtons({allClear, getResult, zeroClick, decimalClick, numberClick, moreClick, backClick, squareRoot, numberSquared, isPrime, factorialize, halfClick}) {

    const moreButtonClick = (event) => {
        
        let val = event.target.value;
        switch(val){
          case "AC": allClear();
            break;
          case "=": getResult();
            break;
          case "squared": numberSquared();
          break;
          case "sqrt": squareRoot();
            break;
          case "prime": isPrime();
            break;
          case "factorial": factorialize();
            break;
          case "half": halfClick();
          break;  
          case "0": zeroClick(val);
            break;
          case ".": decimalClick(val);
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
        <button id="clear" value="AC" onClick={moreButtonClick}>AC</button>
        <button id="sqrt" value="sqrt" className="smaller-text" onClick={moreButtonClick} >&#8730;</button>
        <button id="squared" value="squared" className="smaller-text" onClick={moreButtonClick}>x^2</button>
        <button id="seven" value="7" onClick={moreButtonClick}>7</button>
        <button id="eight" value="8" onClick={moreButtonClick}>8</button>
        <button id="nine" value="9" onClick={moreButtonClick}>9</button>
        <button id="prime" style={{fontSize: "1rem"}} value="prime" onClick={moreButtonClick}>prime?</button>
        <button id="four" value="4" onClick={moreButtonClick}>4</button>
        <button id="five" value="5" onClick={moreButtonClick}>5</button>
        <button id="six" value="6" onClick={moreButtonClick}>6</button>
        <button id="factorial" className="smaller-text" value="factorial" onClick={moreButtonClick}>n!</button>
        <button id="one" value="1" onClick={moreButtonClick}>1</button>
        <button id="two" value="2" onClick={moreButtonClick}>2</button>
        <button id="three" value="3" onClick={moreButtonClick}>3</button>
        <button id="half" className="smaller-text" value="half" onClick={moreButtonClick}>1/2</button>
        <button id="zero" value="0" onClick={moreButtonClick}>0</button>
        <button id="decimal" value="." onClick={moreButtonClick}>.</button>
        <button id="equals" value="=" onClick={moreButtonClick}>=</button>
        <button id="back" className="button-switch" value="back" onClick={moreButtonClick}>Back</button>
        </div>
    )
}
