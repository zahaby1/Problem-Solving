
/**
 * Problem: hallo world
 * Platform: LeetCode
 * Difficulty: Easy
 */

/**
 * @return {Function}
 */
var createHelloWorld = function() {
    
    return function(...args) {
        return "Hello World";
    }
};

const f= createHelloWorld()
console.log( f(555));

