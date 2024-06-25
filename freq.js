function freq(s) {
    const obj = {};
    for (let char of s) {
        if (obj[char]) {
            obj[char] += 1;
        } else {
            obj[char] = 1;
        }
    }
    return obj;
}

const string = "hello world hi everyone";
const result = freq(string);
console.log(result);



















