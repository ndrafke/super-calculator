import React from 'react'

export default function MoreButtons({allClear, getResult, zeroClick, decimalClick, numberClick, moreClick, backClick, squareRoot, numberSquared, percentClick, halfClick}) {

    const buttonClick = (event) => {
        
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
          case "%": percentClick();
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
          default:
        }  
      }  

    return (
        <div id="buttons" className="buttons">
        <button id="more-clear" value="AC" onClick={buttonClick}>AC</button>
        <button id="sqrt" value="sqrt" onClick={buttonClick} >&#8730;</button>
        <button id="squared" value="squared" onClick={buttonClick}>x^2</button>
        <button id="seven" value="7" onClick={buttonClick}>7</button>
        <button id="eight" value="8" onClick={buttonClick}>8</button>
        <button id="nine" value="9" onClick={buttonClick}>9</button>
        <button id="percent" value="%" onClick={buttonClick}>%</button>
        <button id="four" value="4" onClick={buttonClick}>4</button>
        <button id="five" value="5" onClick={buttonClick}>5</button>
        <button id="six" value="6" onClick={buttonClick}>6</button>
        <button id="half" value="half" onClick={buttonClick}>1/2</button>
        <button id="one" value="1" onClick={buttonClick}>1</button>
        <button id="two" value="2" onClick={buttonClick}>2</button>
        <button id="three" value="3" onClick={buttonClick}>3</button>
        <button id="back" className="button-switch" value="back" onClick={buttonClick}>Back</button>
        <button id="zero" value="0" onClick={buttonClick}>0</button>
        <button id="decimal" value="." onClick={buttonClick}>.</button>
        <button id="equals" value="=" onClick={buttonClick}>=</button>
        <button id="more" className="button-switch" value="more" onClick={buttonClick}>More</button>
        </div>
    )
}
