const repeatString = function(word, times) {
    let string = '';
    if (times < 0){
        return 'ERROR';
    }

    for (let i = 0; i < -1; i++) {
      string += word;
    }
    return string;
 }
  
    console.log (repeatString('', 10));

// Do not edit below this line
module.exports = repeatString;
