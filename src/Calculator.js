import React, {useState} from 'react';
import Display from './Display';
import Buttons from './Buttons';

function Calculator() {
  const [display, setDisplay] = useState("0");
  const [history, setHistory] = useState("0");
  const [result, setResult] = useState("0");
  const [lastKeyType, setLastKeyType] = useState(null);

   //AC button 
   const allClear = () => {
    setDisplay("0");
    setHistory("0");
    setLastKeyType(null);
    setResult("0");
    console.log("all clear");
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
        
    console.log("zero")
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
    console.log("number")
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

  return (
    <div>
      <div className="calculator">
      <Display history={history} display={display}/>
      <Buttons allClear={allClear} getResult={getResult} operatorClick={operatorClick} zeroClick={zeroClick} decimalClick={decimalClick} numberClick={numberClick}/>
      </div>
    </div>
  );
}

export default Calculator;
