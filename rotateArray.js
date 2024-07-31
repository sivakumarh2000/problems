function rotateArray(arr, k) {
    // Normalize k to handle cases where k > arr.length
    k = k % arr.length;
    
    console.log('kkkkk',k);

    // Rotate the array to the right by k steps
    const rotated = arr.splice(-k).concat(arr);
    
    return rotated;
  }
  
  // Example usage
  const arr = [1, 2, 3, 4, 5];
  const k = 1;
  const rotatedArray = rotateArray(arr, k);
  console.log(rotatedArray); // Output: [4, 5, 1, 2, 3]
  