function insertionSort(arr) {
    //j i 
    //[1,2,3,5,6,8]  
    for (let i = 1; i < arr.length; i++) {
        let j = i - 1;
        while (j >= 0 && arr[j] > arr[i]) {
            [arr[j], arr[i]] = [arr[i], arr[j]];
            j = j - 1;
            i = j + 1;
        }
    }
    return arr;
}
console.log(insertionSort([6, 8, 24, 7, 9, 33, 66, 11, 22, 44, 5, 3, 1, 2]));