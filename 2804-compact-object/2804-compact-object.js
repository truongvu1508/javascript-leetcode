/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
    if (obj === null) return null;

    if (Array.isArray(obj)) {
        return obj
            .filter(Boolean)
            .map(compactObject);
    }

    if (typeof obj === 'object') {
        const result = {};
        for (const key in obj) {
            const value = obj[key];
            if (Boolean(value)) {
                result[key] = compactObject(value);
            }
        }
        return result;
    }

    return obj;
};