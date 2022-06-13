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
                min = arr[j];
                indexMin = j;
                ([arr[i], arr[indexMin]] = [arr[indexMin], arr[i]]);
                console.log("arr : ", arr);
            }
        }
    }
    return arr;
}
console.log(selectionSort([6, 8, 24, 7, 9, 33, 66, 11, 22, 44, 5, 3, 1, 2]));
function mergeArr(arr1, arr2) {
    let merged = [];
    let i=0, j=0;
    while (i <= arr1.length - 1 && j <= arr2.length - 1) {
        if(arr1[i] < arr2[j]) {
            merged.push(arr1[i]);
            i++;
        } else {
            merged.push(arr2[j]);
            j++;
        }
    }
    while (i > arr1.length - 1 && j <= arr2.length - 1) {
        merged.push(arr2[j]);
        j++;
    }
    while (j > arr2.length - 1 && i <= arr1.length - 1) {
        merged.push(arr1[i]);
        i++;
    }
    
    return merged;
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return mergeArr(left, right);
}

mergeSort([4,2,9,55,7,66,88,86]);


function quickSort(arr, start, end) {
    if (start < end) {
        let pivot = partition(arr, start, end);
        quickSort(arr, start, pivot);
        quickSort(arr, pivot+1, end);
    }
}

function partition(arr, start, end) {
    let pivot = arr[end];
    let smallCount = 0;
    for (let i = end -1 ; i >= 0; i--) {
        if (arr[i] < pivot) {
            smallCount++;
        }
    }
}