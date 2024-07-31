


const twoSumFn = (array=[],target) => {
    let hashMap={};

    for (let index = 0; index < array.length; index++) {
        const element = target - array[index]
        if(hashMap[element]){
            return [array.indexOf(element),array.indexOf(hashMap[element])]
        }
        hashMap[array[index]] = element

        console.log('hashMap out IF',hashMap);

        
    }
};

console.log(twoSumFn([1,2,3,4,5],4));

// {1:2}

let arrr = [1,1,1,1,1,2,2,23,4,5,666,6,6,6,0];

const countFn = (arrr=[]) => {
   const counts = {};

    arrr.forEach((el) => {
        counts[el] = counts[el] ? (counts[el] + 1) : 1;
    })
    return counts;

}

// console.log(countFn(arrr));