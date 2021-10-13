import React, {useState} from 'react';
import Display from './Display';
import Buttons from './Buttons';
import MoreButtons from './MoreButtons';

function Calculator() {
  const [display, setDisplay] = useState("0");
  const [history, setHistory] = useState("0");
  const [result, setResult] = useState("0");
  const [lastKeyType, setLastKeyType] = useState(null);
  const [buttons, setButtons] = useState(1)

   //AC button 
   const allClear = () => {
    setDisplay("0");
    setHistory("0");
    setLastKeyType(null);
    setResult("0");
  };
  // equals button 
   const getResult = () => {
    let answer = Math.round(1000000000000 * eval(history)) / 1000000000000;
      setDisplay(answer);
      setHistory(history + "=" + answer);
      setLastKeyType("result");
      setResult(answer);
  };
 //operators
   const operatorClick = (operator) => {
  
    const endsWithTwoOperators = /[*+-/]{1}[*+-/]{1}$/;
    const operatorAndMinus = /[*+-/]{1}-{1}$/;
    const endsWithDoubleMinus = /- -$/;    

   if(endsWithDoubleMinus.test(history)){
      setLastKeyType("operator");
      setDisplay(operator)
      setHistory(history.slice(0, -3) + operator)
    }

    else if(!operatorAndMinus.test(history) && lastKeyType === "operator" && operator !== "-"){
    setLastKeyType("operator")
    setDisplay(operator)
    setHistory(history.replace(history[history.length - 1], operator))
    }

    else if(endsWithTwoOperators.test(history)){
    setLastKeyType("operator")
    setDisplay(operator)
    setHistory(history.slice(0, -2) + operator)
  }

  // to allow subtracting negative integers:
    else if(!endsWithTwoOperators.test(history) && history[history.length - 1] === "-" && operator === "-"){
      setLastKeyType("operator")
      setDisplay(operator)
      setHistory(history + " " + operator) 
  }
  else if(operatorAndMinus.test(history)){
      setLastKeyType("operator")
      setDisplay(operator)
      setHistory(history.slice(0, -2) + operator)
  }
  
    else if(display === "0" && operator === "-"){ 
          setLastKeyType("operator")
          setHistory("-")
          setDisplay("-")
      }
  // to start new formula with previous answer 
    else if(lastKeyType === "result"){
        setLastKeyType("operator")
        setDisplay(operator)
        setHistory(result + operator)
    }
      else{
          setLastKeyType("operator");
          setDisplay(operator);
          setHistory(history + operator);
      }
};

   const zeroClick = (number) => {
        
    if(display === "0" && number === "0"){
      setLastKeyType("number")
      setDisplay(number)
    }
    else if(history === "0" && number === "0"){
        setLastKeyType("number")
        setHistory(number)
    }
    else if(number === "0" && lastKeyType === "result"){
        setLastKeyType("number")
        setDisplay(number)
        setHistory(number)
    }
    else if(number === "0"){
        setLastKeyType("number")
        setDisplay(display + number)
        setHistory(history + number)
    } 
  };
    const decimalClick = (number) => {
   
     if(number === "." && display === "0"){
        setLastKeyType("number")
        setDisplay("0.")
        setHistory("0.")
    }
    else if(number === "." && history === "0"){
        setLastKeyType("number")
        setHistory("0.")
    }
    else if(number === "." && display.indexOf(number) !== -1){ 
        setLastKeyType("number")
        setDisplay(display)
        setHistory(history)
    }
    else if(number === "." && lastKeyType === "result"){
       setLastKeyType("number")
       setDisplay("0.")
       setHistory("0.")
   } 
   else if(number === "."){
       setLastKeyType("number")
       setDisplay(display + number)
       setHistory(history + number)
   } 
  };
    const numberClick = (number) => {
    
    if(display.length > 15){ 
        setLastKeyType("number")
        setDisplay(display)
        setHistory(history) 
    }
    else if(display === "0" && history === "0"){
        setLastKeyType("number")
        setDisplay(number)
        setHistory(number) 
    }
    else if(history === "0"){ 
        setLastKeyType("number")
        setHistory(number) 
    }
    else if(lastKeyType === "operator"){ 
        setLastKeyType("number")
        setHistory(history + number)
        setDisplay(number)
    }
    else if(lastKeyType === "result"){ 
        setLastKeyType("number")
        setDisplay(number)
        setHistory(number) 
    }
    else if(display[display.length - 6] === "."){
        setLastKeyType("number")
        setHistory(history)
        setDisplay(display) 
    }
    else{ 
        setLastKeyType("number")
        setDisplay(display + number)
        setHistory(history + number)
    }
  };

  const moreClick = () => {
    console.log(buttons)
    if(buttons === 1){
      setButtons(2);
    }
    else {
      setButtons(1);
    }
  }

  const squareRoot = () => {
    if(lastKeyType === "result"){
      let answer = Math.sqrt(result);
    setDisplay(answer);
    setHistory("SquareRoot of " + result + " = " + answer);
    setLastKeyType("result");
    setResult(answer);
    }
    else{
    let answer = Math.sqrt(history);
    setDisplay(answer);
    setHistory("SquareRoot of " + history + " = " + answer);
    setLastKeyType("result");
    setResult(answer);
    }
  }

  const numberSquared = () => {
    
    if(lastKeyType === "result"){
      let answer = Math.pow(result, 2);
      setDisplay(answer);
      setHistory(result + "^2 = " + answer);
      setLastKeyType("result");
      setResult(answer);
    }
    else{
      let answer = Math.pow(history, 2);
      setDisplay(answer);
      setHistory(history + "^2 = " + answer);
      setLastKeyType("result");
      setResult(answer);
    }
  }
  const percentClick = () => {
    let answer = eval(history * .01);
    setDisplay(answer);
    setHistory(answer);
    setLastKeyType("result");
    setResult(answer);
  }

  return (
    <div>
      <div className="calculator">
      <Display history={history} display={display}/>
      {buttons === 1 ? <Buttons allClear={allClear} getResult={getResult} operatorClick={operatorClick} zeroClick={zeroClick} decimalClick={decimalClick} numberClick={numberClick} moreClick={moreClick}/> : <MoreButtons allClear={allClear} getResult={getResult} operatorClick={operatorClick} zeroClick={zeroClick} decimalClick={decimalClick} numberClick={numberClick} moreClick={moreClick} squareRoot={squareRoot} numberSquared={numberSquared} percentClick={percentClick} />}
      </div>
    </div>
  );
}

export default Calculator;
