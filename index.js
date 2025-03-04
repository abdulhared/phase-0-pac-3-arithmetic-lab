
function introduction(name) {
    return `Hi, my name is ${name}.`;
  }
  
  function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }
 
  function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }

  function add(a, b) {
    return a + b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  function divide(a, b) {
    return a / b;
  }
  

  function increment(n) {
    return n + 1;
  }
  
  function decrement(n) {
    return n - 1;
  }
  
  
  function makeInt(string) {
    return parseInt(string, 10);
  }
  
  function preserveDecimal(string) {
    return parseFloat(string);
  }
  