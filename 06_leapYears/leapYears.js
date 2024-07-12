const leapYears = function(year) {
    let leapYear; 

    //checks if year is divisible by 4
    if (year % 4 == 0) {
        leapYear = true;
    } else {
        leapYear = false;
    }

    //checks if year is both divisible by 100 and 400
    if (leapYear == true && year % 100 == 0) {
        if (year % 400 == 0) {
            leapYear = true; 
        } else {
            leapYear = false;
        }
    }
       
    return Boolean(leapYear); 
};

leapYears(700);
// Do not edit below this line
module.exports = leapYears;
