const givenArray = [1,2,3,4,5];
const target = 9;

const twoSumFn = (givenArray=[],target) => {
    const hashMap = {};
 
    for (let index = 0; index < givenArray.length; index++) {
        const element = target - givenArray[index];
        if(hashMap[element]){
            return [givenArray.indexOf(element),givenArray.indexOf(hashMap[element])];
        }
        hashMap[givenArray[index]] = element;
    }
    return hashMap;

};

const result = twoSumFn(givenArray,target);
console.log('result',result);
