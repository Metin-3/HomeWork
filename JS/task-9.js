let number = 6776;

let num1 = parseInt(number / 1000);
let num2 = parseInt(number / 100) %10;
let num3 = parseInt(number / 10) %10;
let num4 = number % 10;

if(num1==num4 && num2==num3){
    console.log("YES");
}
else
{
    console.log("NO");
}