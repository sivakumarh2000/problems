const reverseString = (str) => {
    let newString = "";

    for (let index = str.length-1; index >=0; index--) {
        // const element = str[index];
        newString += str[index]
        
    }
    return newString;
};

console.log(reverseString('hello'));
