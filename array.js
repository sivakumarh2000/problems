/* Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]] */


// const arrayFn = (arr=[]) => {
// // const change = [...new Set(arr)];

// const data = 
// console.log('change',change);
// };

// arrayFn([[1,3],[2,6],[8,10],[15,18]])

var merge = function(intervals) {
    // sort
    const data = intervals.sort((a, b) => a[0] - b[0]);
    console.log('data',data);
    
    let previous = intervals[0];
    console.log('previous',previous);
    let result = [previous];
    console.log('result',result);
    
    for(let i = 1; i < intervals.length; i++) {

        // console.log('iiiii',i);
        // console.log('length',i<intervals.length);
        // console.log('intervals',intervals);
        let current = intervals[i];
        // console.log('current',current);
        if(previous[1] >= current[0]) {
            previous[1] = current[1];
        } else {
            result.push(current);
            previous = current;
        }
    }
    return result;
};

const a = merge([[1,3],[2,6],[8,10],[15,18]]);
console.log('a',a);