// DEFINE YOUR FUNCTION BELOW:
function returnDay(x) {
    if (x < 1 || x > 7) {
        return null;
    }
    let week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    return week[x - 1];
}

console.log(returnDay(13));
console.log(returnDay(-13));
console.log(returnDay(0));
console.log(returnDay(7));