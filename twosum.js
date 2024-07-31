const twoSum = function(nums, target) {
  
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            // console.log('jjjj',j);
            if (nums[i] + nums[j] == target) {
                return [i, j]
            }
        }
    }
};

console.log(twoSum([2,7,11,15],9));

// console.log(twoSum([3,2,4],6));

// console.log(twoSum([3,3],6));

//https://www.tutorialstonight.com/reverse-for-loop-javascript
