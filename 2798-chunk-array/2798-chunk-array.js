/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    const result = [];
    let index = 0;
    
    while (index < arr.length) {
        const group = arr.slice(index, index + size);
        result.push(group);
        index += size;
    }
    
    return result;
};
