const oddOrEven = function(value){
    var count = 0;
    var total = 0;
    console.log(value);
    while(value != 0){
        total = (value % 10) + total;
        value = Math.floor(value / 10);
        ++count;
    }
    const average = total / count;
    if(average % 2 == 0){
        return `The sum of the digits of this number divided by the number of digits ${average} and this average is even`;
    }
    else{
        return `The sum of the digits of this number divided by the number of digits ${average} and this average is odd`;
    }
}

console.log(oddOrEven(1347));
console.log(oddOrEven(13));
console.log(oddOrEven(41));