export function analyzeArray(array) {
    let object = {};
    let sum = 0;
    let length = array.length;
    array.forEach(num => {
        sum += num;
    })
    let average = sum / length;
    let min = Math.min(...array);
    let max = Math.max(...array);

    object["average"] = average;
    object["min"] = min;
    object["max"] = max;
    object["length"] = length;
    
    return object;
    
}