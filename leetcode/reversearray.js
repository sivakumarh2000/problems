let numbers = [1, 2, 3, 4, 5];
let reversedNumbers = [];

for(let i = numbers.length -1; i >= 0; i--) {
  reversedNumbers.push(numbers[i]);
}

console.log(reversedNumbers);

// Adding Plus 3 Numbers

/* for (let index = 0; index < numbers.length; index+=2) {
    const element = numbers[index];
    console.log('element',element);
    reversedNumbers.push(element)
    
}

console.log("reversedNumbers",reversedNumbers); */


/* const reverseList = (head) => {
  let current = head
  let prev = null
  let next = null
  
  while (current) {
      next = current.next
      current.next = prev
      prev = current
      current = next
  }

  return prev
}; */

// const result = reverseList([1,2,3,4,5,6]);
// console.log('result: ',result);

// console.log(reverseList([1,2,3,4,5,6]));