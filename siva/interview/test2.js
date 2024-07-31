const object = {
    name:'imran',
    age:22
};

const object2 = {
    email:"imran@gmail.com",
    pincode:601203
}




const anotherObject = {...object,...object2};

console.log(anotherObject);

O