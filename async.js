const addAsync = (a,b,cb) =>  {
setTimeout(() => {
    console.log('111111');
    const result = a+b;
    cb(result);
},2000)
};

const resultFn = (r) => {
console.log('In Result:',r);
}

console.log("Before Addition");
addAsync(1,2,resultFn);
console.log('After calling addAsync');
