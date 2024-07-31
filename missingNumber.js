function findMissingNumber(arr) {
    const n = arr.length + 1;
    console.log('nnn',n);

    /**
     * n=5
     * n*(n+1)/2 = 5*(5+1)/2 = 15
     * expectedSum = 15
     */
    const expectedSum = (n * (n + 1)) / 2;
    console.log('expectedSum',expectedSum);


    /**
     * sum parameter is 0
     * num parameter is array iterated 1,3,4,5
     * actualSum is returning the sum+num = 0 + (1,3,4,5) = 13
     */
    const actualSum = arr.reduce((sum, num) => sum+num,0)
    console.log('actualSum',actualSum);

    // Return expectedSum - actualSum
    return expectedSum - actualSum;
  }

  console.log(  findMissingNumber([1,3,6,9,7,5,2,11,14,13]));