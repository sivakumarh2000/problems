// function aadhar(name,age,sex,pincode) {
//     // console.log(name);
//     const aadharObject = {
//         name,
//         age,
//         sex,
//         pincode
//     };

//     return aadharObject;
// }

// console.log(aadhar('imran',22,'male',601203));


const aadhar = (name,age,sex,pincode) => {
        const aadharObject = {
        name,
        age,
        sex,
        pincode
    };

    return aadharObject;
}
// console.log(aadhar('imran',22,'male',601203));

module.exports = {
    aadhar
}