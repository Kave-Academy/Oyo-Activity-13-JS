function run(){
    num = document.getElementById("number").value;
    var number = num;
    var digits = 0;

    // Finding the number of digits

    while (num > 0){
        digits = digits + 1;
        num = parseInt(num/10);
    }

    num = number;
    var sum = 0;

    // calculating sum

    while (num > 0) {
        var digit = num%10;
        sum = sum + Math.pow(digit, digits);
        num = parseInt(num/10);
    }

    // checking sum with original number

    if (sum == number){
        document.getElementById("result").style.color = "gold";
        document.getElementById("result").innerHTML = "The number: " + number + " is Armstrong Number";
    }
    
    else {
        document.getElementById("result").style.color = "red";
        document.getElementById("result").innerHTML = "The number: " + number + " is NOT Armstrong Number";
        }
    }


// function checkArmstrong(){
//     num = document.getElementById("number").value;
//     var Number = num;
//     var digits = 0;
//     // Finding the number of digits
//     while(num > 0){
//     digits = digits + 1;
//     num = parseInt(num/10);
//     }
//     num = Number;
//     var sum = 0;
//     // calculating sum
//     while(num > 0) {
//     var digit = num%10;
//     sum = sum + Math.pow(digit, digits);
//     num = parseInt(num/10);
//     }
//     // checking sum with original number
//     if(sum == Number){
//     document.getElementById("result").style.color = "blue";
//     document.getElementById("result").innerHTML = "The number: " + Number + " is Armstrong Number";
//     }else{
//     document.getElementById("result").style.color = "red";
//     document.getElementById("result").innerHTML = "The number: " + Number + " is NOT Armstrong Number";
//     }
//     }