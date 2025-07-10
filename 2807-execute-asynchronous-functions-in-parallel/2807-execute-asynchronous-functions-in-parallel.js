/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
    return new Promise((resolve, reject) => {
        let results = [];
        let completed = 0;
        let isRejected = false;
        functions.forEach((fn, index)=>{
            fn().then(res=>{
                if(isRejected) return;
                results[index] = res;
                completed++;
                if(completed === functions.length){
                    resolve(results)
                }
            }).catch(error=>{
                if(!isRejected){
                    isRejected = true;
                    reject(error)
                }
            });
        });
    });
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */