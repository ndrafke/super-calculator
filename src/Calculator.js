import React, {useState} from 'react';
import Display from './Display';
import Buttons from './Buttons';
import MoreButtons from './MoreButtons';
import EvenMoreButtons from './EvenMoreButtons';

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
     if(lastKeyType === "result"){
       setDisplay(display);
       setHistory(history);
       setLastKeyType("result");
       setResult(result)
     }
     else{
    let answer = Math.round(1000000000000 * eval(history)) / 1000000000000;
      setDisplay(answer);
      setHistory(history + "=" + answer);
      setLastKeyType("result");
      setResult(answer);
     }
  };
 //operators
   const operatorClick = (operator) => {
    //regexes for handling operators:
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
    setLastKeyType(lastKeyType);
    if(buttons === 1){
      setButtons(2);
    }
    else if(buttons === 2){
      setButtons(3);
    }
  }

  const backClick = () => {
    setLastKeyType(lastKeyType);
    if(buttons === 2){
      setButtons(1);
    }
    else if(buttons === 3){
      setButtons(2);
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
    else if(lastKeyType === "number"){
      let answer = Math.pow(history, 2);
      setDisplay(answer);
      setHistory(history + "^2 = " + answer);
      setLastKeyType("result");
      setResult(answer);
    }
  }
  const percentClick = () => {
    if(lastKeyType === "result"){
      let answer = eval(result * .01);
      setDisplay(answer);
      setHistory(answer);
      setLastKeyType("result");
      setResult(answer);
    }
    else if(lastKeyType === "number"){
    let answer = eval(history * .01);
    setDisplay(answer);
    setHistory(answer);
    setLastKeyType("result");
    setResult(answer);
    }
  }

  const tenPercent = () => {
    if(lastKeyType === "result"){
      let answer = Math.round(1000000000000 * eval(result * .10)) / 1000000000000;
      setDisplay(answer);
      setHistory(answer);
      setLastKeyType("result");
      setResult(answer);
    }
    else if(lastKeyType === "number"){
      let answer = Math.round(1000000000000 * eval(history * .10)) / 1000000000000;
    setDisplay(answer);
    setHistory(answer);
    setLastKeyType("result");
    setResult(answer);
    }
  }

  const fifteenPercent = () => {
    if(lastKeyType === "result"){
      let answer = Math.round(1000000000000 * eval(result * .15)) / 1000000000000;
      setDisplay(answer);
      setHistory(answer);
      setLastKeyType("result");
      setResult(answer);
    }
    else if(lastKeyType === "number"){
      let answer = Math.round(1000000000000 * eval(history * .15)) / 1000000000000;
    setDisplay(answer);
    setHistory(answer);
    setLastKeyType("result");
    setResult(answer);
    }
  }

  const twentyPercent = () => {
    if(lastKeyType === "result"){
      let answer = Math.round(1000000000000 * eval(result * .20)) / 1000000000000;
      setDisplay(answer);
      setHistory(answer);
      setLastKeyType("result");
      setResult(answer);
    }
    else if(lastKeyType === "number"){
      let answer = Math.round(1000000000000 * eval(history * .20)) / 1000000000000;
    setDisplay(answer);
    setHistory(answer);
    setLastKeyType("result");
    setResult(answer);
    }
  }

  const twentyFivePercent = () => {
    if(lastKeyType === "result"){
      let answer = Math.round(1000000000000 * eval(result * .25)) / 1000000000000;
      setDisplay(answer);
      setHistory(answer);
      setLastKeyType("result");
      setResult(answer);
    }
    else if(lastKeyType === "number"){
      let answer = Math.round(1000000000000 * eval(history * .25)) / 1000000000000;
    setDisplay(answer);
    setHistory(answer);
    setLastKeyType("result");
    setResult(answer);
    }
  }

const halfClick = () => {
  if(lastKeyType === "result"){
    let answer = eval(result / 2);
    setDisplay(answer);
    setHistory(answer);
    setLastKeyType("result");
    setResult(answer);
  }
  else if(lastKeyType === "number"){
    let answer = eval(history / 2);
    setDisplay(answer);
    setHistory(answer);
    setLastKeyType("result");
    setResult(answer);
  }
}

  const factorialize = () => {
    if(lastKeyType === "result"){
      let answer = 1;
      for(let i = 1; i <= result; i++){
        answer *= i
      }
    setDisplay(answer);
    setHistory(answer);
    setLastKeyType("result");
    setResult(answer);
    }
    else if(lastKeyType === "number"){
      let answer = 1;
      for(let i = 1; i <= history; i++){
        answer *= i
      }
    setDisplay(answer);
    setHistory(answer);
    setLastKeyType("result");
    setResult(answer);
    }
  }

  const isPrime = () => {
    
    if(lastKeyType === "result"){
      if(+result === 2){
        setDisplay(result + ": is a prime number")
        return
      }
      else if(+result < 2){
        setDisplay(history + ": not a prime number")
        return
      }
      else if(!Number.isInteger(+result)){
        console.log("not an integer")
        setDisplay("Only Integers can be prime")
        return
      }
      for(let i = 2; i < +result; i++){
        console.log(i);
        console.log(+result % i !== 0);
        if(+result % i === 0){
          console.log(true);
          setDisplay(result + ": not a prime number");
          return
        }
          setDisplay(result + ": is a prime number") 
      } 
      
    }
    else if(lastKeyType === "number"){
      
      if(+history === 2){
        setDisplay(history + ": is a prime number");
        setResult(history);
        setLastKeyType("result");
        return
      }
      else if(+history < 2){
        setDisplay(history + ": not a prime number");
        setResult(history);
        setLastKeyType("result");
        return
      }
      else if(!Number.isInteger(+history)){
        console.log("not an integer")
        setDisplay("Only Integers can be prime");
        setResult(history);
        setLastKeyType("result");
        return
      }
      for(let i = 2; i < +history; i++){
        console.log(i);
        console.log(+history % i !== 0);
        if(+history % i === 0){
          console.log(true);
          setDisplay(history + ": not a prime number");
          setResult(history)
          setLastKeyType("result");
          return
        }
          setDisplay(history + ": is a prime number");
          setResult(history)
          setLastKeyType("result"); 
      } 
    }
  }

  return (
    <div>
      <div className="calculator">
      <Display history={history} display={display}/>
      {buttons === 1 ? 
      <Buttons 
      allClear={allClear} 
      getResult={getResult} 
      operatorClick={operatorClick} 
      zeroClick={zeroClick} 
      decimalClick={decimalClick} 
      numberClick={numberClick} 
      percentClick={percentClick}
      moreClick={moreClick}/> : buttons === 2 ?
      <MoreButtons 
      allClear={allClear} 
      getResult={getResult} 
      operatorClick={operatorClick} 
      zeroClick={zeroClick} 
      decimalClick={decimalClick} 
      numberClick={numberClick} 
      moreClick={moreClick}
      backClick={backClick} 
      tenPercent={tenPercent}
      fifteenPercent={fifteenPercent}
      twentyPercent={twentyPercent}
      twentyFivePercent={twentyFivePercent}
      
      /> : 
      <EvenMoreButtons 
      allClear={allClear} 
      getResult={getResult} 
      operatorClick={operatorClick} 
      zeroClick={zeroClick} 
      decimalClick={decimalClick} 
      numberClick={numberClick} 
      backClick={backClick}
      squareRoot={squareRoot} 
      numberSquared={numberSquared} 
      isPrime={isPrime}
      factorialize={factorialize}
      halfClick={halfClick}
      />
      }
      </div>
    </div>
  );
}

export default Calculator;
