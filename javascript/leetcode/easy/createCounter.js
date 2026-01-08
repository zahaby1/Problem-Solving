
/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */

var createCounter = function(init) {
    let count = init
    return {
        increment:()=>{
            return ++count
        },
        reset:()=>{
            count = init;
            return count
        },
        decrement:()=>{
            return --count
        },
    }
};
const counter= createCounter(5)

console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());

console.log(counter.decrement());
console.log(counter.decrement());


console.log(counter.reset());



