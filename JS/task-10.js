let num1 = 200;
let num2 = 100;
let num3 = 150;

if((num1 > num2 && num1 > num3) && (num2 < num1 && num2 < num3)){
    console.log("Answer: ", (num1 + num2) / 2);
}
else if((num1 > num2 && num1 > num3) && (num3 < num1 && num3 < num2)){
    console.log("Answer: ", (num1 + num3) / 2);
}
else if((num2 > num1 && num2 > num3) && (num1 < num2 && num1 < num3)){
    console.log("Answer: ", (num2 + num1) / 2);
}
else if((num2 > num1 && num2 > num3) && (num3 < num1 && num3 < num2)){
    console.log("Answer: ", (num2 + num3) / 2);
}
else if((num3 > num1 && num3 > num2) && (num1 < num2 && num1 < num3)){
    console.log("Answer: ", (num3 + num1) / 2);
}
else if((num3 > num1 && num3 > num2) && (num2 < num1 && num2 < num3)){
    console.log("Answer: ", (num3 + num2) / 2);
}
else
{
    console.log("Numbers are the same: ", num1=num2=num3);
}
