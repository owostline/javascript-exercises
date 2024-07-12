const removeFromArray = function(array, ...valuesToRemove) {
    return array.filter(function (element) {
        return !valuesToRemove.includes(element);
    });
};

removeFromArray(['hey', 2, 3, 'ho'], '1',3);
// Do not edit below this line
module.exports = removeFromArray;
