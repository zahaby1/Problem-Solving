
/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    return {
        toBe: (val2)=>{
            if (val===val2) return true
            throw "notequal";
        },
        notToBe: (val2)=>{
            if (val!==val2)  return true
            throw "equal";
        }
    }
};


console.log(expect(5).notToBe(5));

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */