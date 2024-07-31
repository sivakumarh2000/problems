function divide(a, b) {
    if (!b) {
      throw new Error('Divide by zero error');
    }
    return a / b;
  }
  
  try {
    const result = divide(10, 0);
    console.log(result); // This line will not be executed
  } catch (error) {
    console.log(error.message); // Output: Divide by zero error
  }
  

// const result = divide(10, 0);
// console.log(result); // This line will not be executed


// http://wwww.sivakumar.com/pagination?offset=0?pagesize=5


//route

// /pagination


// for(let i=0;i<=givenArray.length;i++){
//   const element = target - givenArray[i]
//   if(hashMap[element]){
//       return [givenArray.indexOf(element),givenArray.indexOf(hashMap[element])];
//   }
//   hashMap[givenArray[i]] = element;
// }
// return hashMap;