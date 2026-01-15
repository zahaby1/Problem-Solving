/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */

var cancellable = function(fn, args, t) {
    //  نعمل تايمر لتأخير تنفيذ fn
    const timerId = setTimeout(() => {
        fn(...args);
    }, t);

    //  نرجّع دالة الإلغاء
    return function cancelFn() {
        clearTimeout(timerId);
    };
};

// example

// const cancel = cancellable(fn, args, 1000);
// setTimeout(cancel, 500);


/**
 *  const result = [];
 *
 *  const fn = (x) => x * 5;
 *  const args = [2], t = 20, cancelTimeMs = 50;
 *
 *  const start = performance.now();
 *
 *  const log = (...argsArr) => {
 *      const diff = Math.floor(performance.now() - start);
 *      result.push({"time": diff, "returned": fn(...argsArr)});
 *  }
 *       
 *  const cancel = cancellable(log, args, t);
 *
 *  const maxT = Math.max(t, cancelTimeMs);
 *           
 *  setTimeout(cancel, cancelTimeMs);
 *
 *  setTimeout(() => {
 *      console.log(result); // [{"time":20,"returned":10}]
 *  }, maxT + 15)
 */