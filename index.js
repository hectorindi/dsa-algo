function insertionSort(arr) {
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

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let indexMin = 0;
        let min = arr[i];
        for (let j = i+1; j < arr.length; j++) {
            if (arr[j] < min) {
                //min = arr[j];
                indexMin = j;
                changed = true;
                ([arr[i], arr[indexMin]] = [arr[indexMin], arr[i]]);
            }
        }
    }
    return arr;
}
console.log(selectionSort([6, 8, 24, 7, 9, 33, 66, 11, 22, 44, 5, 3, 1, 2]));