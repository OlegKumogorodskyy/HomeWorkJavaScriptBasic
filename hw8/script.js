
function sum(a, b) {
    return a + b;
  }
  
 
  function main(a = 2, b = 3, cb) {
    const result = sum(a, b);
    
    
    if (typeof cb === 'function') {
      cb(result);  
      return cb(result);  
    } else {
      return result;  
    }
  }
  
  
  function alertOutput(result) {
    alert('Результат: ' + result);
  }
  

  const resultWithCallback = main(5, 7, alertOutput);
  
  
  const resultWithoutCallback = main();
  

  console.log(resultWithCallback);
  console.log(resultWithoutCallback);
  
  