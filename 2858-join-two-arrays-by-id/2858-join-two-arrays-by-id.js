/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    const activeObj = {};
    arr1.forEach(element => {
        activeObj[element.id] = { ...element};
    })
    arr2.forEach(element => {
        activeObj[element.id] = { ...activeObj[element.id], ...element};
    })

    return Object.values(activeObj).sort((a,b) => a.id - b.id);
};