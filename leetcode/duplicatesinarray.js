const dupArray = [1,2,3,4,5,1,3,6,6,6]

const toFindDuplicates = (dupArray=[]) => {
  

    // let ele;
   /*  dupArray.forEach((e) => {
        // console.log('eleeeee',e);
        if(typeof(e) === "string"){
            console.log('String Not Allowed');
        }
    })
 */
    const data = dupArray.filter((ele,index)  => {


        const eleIndex = dupArray.indexOf(ele);
        // console.log('eleIndex',eleIndex);


        // console.log('match',eleIndex===index);
        
        const diff = eleIndex === index;
        // console.log('diff',diff);
        return diff;

    });
    return data;

    // const data = [...new Set(dupArray)];
    // return data;

}

const result = toFindDuplicates(dupArray);
console.log('result',result);

// const eleIndex = dupArray.indexOf(dupArray[2]);
// console.log('eleIndex',eleIndex);