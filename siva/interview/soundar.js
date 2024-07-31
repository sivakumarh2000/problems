const fn = (userinput=[]) => {
    let output = " ";
    for (let index = 0; index < userinput.length; index++) {
        // const element = array[index];
        output = output+index;
        console.log('outttt',output);
        
    }
    return output;
}

console.log(fn([1,2,3,4,5]));