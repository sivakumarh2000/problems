var twoSum = function(nums, target) {
    nums.reduce((acc,curr,index) => {
        if(acc.length>0){
            return acc;
        }

        const ix = nums.findIndex((a) => a+curr === target);
        if(ix !== -1){
            acc = [ix,index];
            return acc;
        }
        return acc;
    },[])
    
};

// console.log(twoSum([2,7,11,15],9));

// console.log(twoSum([3,2,4],6));

console.log(twoSum([3,3],6));