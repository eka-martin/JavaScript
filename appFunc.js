function repeat(str, numTimes) {
    let result = '';
    for (let i = 0; i < numTimes; i++) {
        result += str; // result+str=...
    }
    console.log(result)
}
// if str ="LOL " numTimes=5 so result = LOL LOL 
//LOL LOL LOL 


function add(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        return false;
    }
    let sum = x + y;
    return sum; // or return = x + y 
    // it works also in console "add(add(5+3),5) = 13"

}