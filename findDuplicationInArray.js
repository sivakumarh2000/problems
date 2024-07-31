const arry = [1, 2, 1, 3, 4, 3, 5];

const toFindDuplicates = arry => {
    return arry.filter((item, index) => arry.indexOf(item) !== index)
    // return arry.filter((item, index) => {
    //     // console.log('itemsss',item);
    //     // console.log('indexx',index);
    //     /**
    //      * Taking Index Position Of Items In the Array
    //      */
    //     const data = arry.indexOf(item);
    //     // console.log('data',data);

    //     /**
    //      * Checking Difference Between data and index
    //      */
    //     const diff = data !== index;
    //     // console.log('diff',diff);
    //     return diff;
    // })

}
const duplicateElements = toFindDuplicates(arry);
console.log(duplicateElements);