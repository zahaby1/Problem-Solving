

var map = function(arr, fn) {

    let reset=[]

            for (let i= 0; i < arr.length; i++) {
                reset.push(fn(arr[i],i))
            }
        return reset

};