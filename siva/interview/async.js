// Asynchronous function example
function addAsync(a, b, callback) {
    setTimeout(() => {
      const sum = a + b;
      callback(sum);
    }, 2000); // Simulating an asynchronous operation with a delay of 2 seconds
  }
  
  const result = (r) => {
    console.log('After addition');
    console.log('Result:', r);    }


  // Asynchronous code execution
  console.log('Before addition');
  addAsync(2, 3, result);
  console.log('After calling addAsync');
  
  