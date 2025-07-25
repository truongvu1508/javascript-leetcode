/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    const fn = (acc, f) => f(acc);
    return function(x) {
        return functions.reduceRight(fn, x);
    }

    return function(x){
        for(const fn of functions.reverse()){
            x = fn(x);
        }
        return x;
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */