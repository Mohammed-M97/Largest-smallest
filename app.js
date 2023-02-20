function largest_smallest(array_values) {
    // write your code here
    let min = Math.min(...array_values)
    let max = Math.max(...array_values)
    return [max, min]
}

console.log(largest_smallest([500,123,52,123,22]));