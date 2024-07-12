const sumAll = function(firstInt, secondInt) {
    //check if negative value
    if (firstInt < 0 || secondInt < 0) {
        return 'ERROR';

    //assigns to a variable on which is lower or higher
    } else if (firstInt < secondInt) {
        let lower = firstInt, higher = secondInt;
        let sum = 0;
            for (let i = lower; i!==higher+1; i++) {
            sum = sum + i;
            }
        return sum;

    } else if (firstInt > secondInt) {
        let lower = secondInt, higher = firstInt;
        let sum = 0;
            for (let i = lower; i!==higher+1; i++) {
            sum = sum + i;
            }
        return sum;

    } else {
        return 'ERROR';
    }
};

sumAll(1, 4);
// Do not edit below this line
module.exports = sumAll;
