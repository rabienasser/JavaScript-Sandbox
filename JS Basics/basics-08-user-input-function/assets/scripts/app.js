const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function writeToLog(  
  operationIdentifier,
  prevResult, 
  operationNumber,
  newResult
 ) { 
     const logEntry = {
    operaton: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult
  };
  logEntries.push(logEntry);
  console.log(logEntries);
   }
 

function add() {
  const enteredNumber = parseInt(userInput.value);
  const calcDescription = `${currentResult} + ${enteredNumber}`;
  const initialResult = currentResult;
  currentResult = currentResult + parseInt(enteredNumber);
  createAndWriteOutput("+", initialResult, enteredNumber);
  writeToLog("add", initialResult, enteredNumber, currentResult);
}

function subtract() {
  const enteredNumber = parseInt(userInput.value);
  const calcDescription = `${currentResult} - ${enteredNumber}`;
  const initialResult = currentResult;
  currentResult = currentResult - parseInt(enteredNumber);
  createAndWriteOutput("-", initialResult, enteredNumber);
  writeToLog("subtract", initialResult, enteredNumber, currentResult);

}


function multiply() {
  const enteredNumber = parseInt(userInput.value);
  const calcDescription = `${currentResult} * ${enteredNumber}`;
  const initialResult = currentResult;
  currentResult = currentResult * parseInt(enteredNumber);
  createAndWriteOutput("*", initialResult, enteredNumber);
  writeToLog("multiply", initialResult, enteredNumber, currentResult);

}


function divide() {
  const enteredNumber = parseInt(userInput.value);
  const calcDescription = `${currentResult} / ${enteredNumber}`;
  const initialResult = currentResult;
  currentResult = currentResult / parseInt(enteredNumber);
  createAndWriteOutput("/", initialResult, enteredNumber);
  writeToLog("divide", initialResult, enteredNumber, currentResult);

}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
