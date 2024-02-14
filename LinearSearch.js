function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Return the index if the target is found
        }
    }
    return -1; // Return -1 if the target is not found
}

// Example usage:
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const TargetValue = 6;
const result = linearSearch(array, TargetValue);

if (result !== -1) {
    console.log(`${TargetValue} found at index ${result}`);
} else {
    console.log(`${TargetValue} not found`);
}
