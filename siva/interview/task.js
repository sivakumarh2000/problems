// 1.Reverese A String
const reverseString = (str) => {
    //Empty String
    let newString = "";
    for (let index = str.length-1; index >= 0; index--) {
        // const element = str[index];
        // console.log('element',element);
        newString += str[index]
        
    }

    return newString;
};

const result = reverseString('Enter a string:');
console.log('result',result);

// 2.Remove Duplicates From Array Of String
const chars = ['a','b','c','a'];
const uniqueChars = [...new Set(chars)];

// console.log('uniqueChars',uniqueChars);


// 3.Remove Duplicates From Array Of Objects
const arrObj = [
    {
        name:"siva"
    },
    {
        name:"akash"
    },
     {
        name:"akash"
    }
    // 'siva',
    // 'akash',
    // "kumar",
    // 'siva'
];


const removeDuplicates = (arr=[]) => {
    let unique = arr.reduce((acc,curr) => {
        // console.log('acc',acc);
        // console.log('curr',curr);
        // console.log('includes',acc.includes(curr));
        // console.log('includes',acc.push(curr));

        if(!acc.includes(curr))
            acc.push(curr);
            return acc;
        


    },[]);
    console.log('unique',unique);
    return unique;

};

// removeDuplicates(arrObj);


const duplicateArray = ['a', 'a', 'b', 'b', 'c', 'c','c'];

const elementCounts = {};

 duplicateArray.forEach((element) => {
//   console.log('eleeee',(elementCounts[element] || 0) + 1);
 return elementCounts[element] = (elementCounts[element] || 0) + 1;
});

// console.log('elementCounts', elementCounts);