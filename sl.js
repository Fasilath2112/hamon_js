function findSecondLargest(arr) {
    arr = Array.from(new Set(arr));
    if (arr.length < 2) {
        return "Array length should be at least 2";
    }
    arr.sort((a, b) => b - a); 
    return arr[1]; 
}
const array = [35, 15, 45, 55, 55, 25];
console.log(findSecondLargest(array)); 
