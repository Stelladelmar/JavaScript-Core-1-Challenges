// Write code to print all numbers from `num` down to 1
// You may assume `num` will be a positive number

var countdown = function(num) {
    for (let i = num; i >= 1; i--){
        console.log(i);
    }
};
countdown(10);

var countdownWithWhile =function(num){
    let i =num;

    while ( i >=1 ){
        console.log(i);
        i--
    }
}
countdownWithWhile(10)