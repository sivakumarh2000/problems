const twoSumFn = (numsarr,target) => {
    let obj = {};
    for (let index = 0; index < numsarr.length; index++) {
        const element = target - numsarr[index];

        if(obj[element]){
            console.log("element",element);
        }


        
    }
}

/* const fn = () => {
    const object ={
        2:"krishna"
    };

    if(object[2]){
        console.log(object[2]);
    }
};

fn() */


const person = {fname:"John", lname:"Doe", age:25}; 
let text = "dob";

if(!person.fname){
    console.log('error');
}