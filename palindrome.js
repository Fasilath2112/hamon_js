function isPalindrome(str) {
    str = str.toLowerCase(); // Convert string to lowercase
    let j = str.length - 1;
    
    for (let i = 0; i < j; i++, j--) {
        if (str[i] !== str[j]) {
            return false;
        }
    }
    return true;
}

let str1 = "racecar";
let str2 = "nitin";
let str3 = "Rama";
let str4 = "Mom";

console.log(isPalindrome(str1)); // true
console.log(isPalindrome(str2)); // true
console.log(isPalindrome(str3)); // false
console.log(isPalindrome(str4)); // true
