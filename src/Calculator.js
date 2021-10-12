import Display from './Display';


function Calculator({history, display}) {
  

  return (
    <div>
      <Display history={history} display={display}/>
    </div>
  );
}

export default Calculator;
