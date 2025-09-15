// Jackson Patton and Doan Nguyen
const prompt = require('prompt-sync')(); // allows prompts to work

function findMin(x, y, z){
    if( !isNaN(x) && !isNaN(y) && !isNaN(z)){
        if(x > y && z > y){ // checks that y is smaller than x and z
            return y;
        }
        else if(y > x && z > x){ // checks that x is smaller than y and z
            return x;
        }
        else return z; // if x and y are not smaller it returns z
    }
    else{
        if(x > y){
            return y;
        }
        else return x;
    }
}
console.log("This is minimum of two or three numbers");

console.log(findMin(10, 20));
console.log(findMin(100, 150, 200))


function findNth1(n){ // finds nth term of 2, 6, 14, 26, 42 
    return 2 * n * n - 2 * n + 2;
}

console.log("\nThis is the first series");

console.log(findNth1(3));

function findNth2(n){ // finds nth term of 1, 2, 6, 24, 120, 720
    let answer =1;
    for(x = 1; x <= n; x++){
        answer *= x;
    }
    return answer;
}

console.log("\nThis is the second series");

console.log(findNth2(5));


function findNth3(n){ // finds nth term of 1, 1, 2, 3, 5, 8, 13 
    if(n <= 0){
        return 0;
    }
    if(n === 1 || n === 2){
        return 1;
    }

    let a = 1, b = 1, answer;

    for (let i = 3; i <= n; i++) {
        answer = a + b;
        a = b;
        b = answer;
    }
    return answer;
}
console.log("\nThis is the third series");

console.log(findNth3(6));



function HCF(x ,y){ // finds the HCF of two numbers
    let answer, check;
    if(x > y){
        answer = x % y; // checks the remainder of x and y
        check = y % answer;
        if(check === 0){ // if its 0 it means that is the HCF
            return answer
        }
        else if(check === 2){ // if its 2 that means it can go smaller one more time
            check = answer % check;
            return check; 
        }
        else return check // if its 1 it can't go smaller
    }
    else{ // same here just incase they put the smaller number first
        answer = y % x;
        check = x % answer; 
        if(check === 0){
            return answer
        }
        else if(check === 2){
            check = answer % check;
            return check;
        }
        else return check;
    }
}

console.log("\nThis is HCF");

console.log(HCF(93,75));
console.log(HCF(93,18));
console.log(HCF(6, 4));
console.log(HCF(104, 53));


function LCM(x, y){
    let hcf;
    hcf = HCF(x, y); // uses HCF to get the LCM
    if(hcf === 1){
        return hcf; // if the answer is just one its easier to just print the hcf
    }
    else{
        return (x * y)/hcf
    }
}

console.log("\nThis is LCM");
console.log(LCM(8, 12));
console.log(LCM(23,53));



function mTable(){
    let x, a, b;
    while(true){
        
        
        
        x = Number(prompt("Please input your table starting with what you want to multiply: "));
        a = Number(prompt("Now input what you'd like to start at: "));
        b = Number(prompt("Now enter what you'd like it to go to: "));

        if(isNaN(x) || isNaN(a) || isNaN(b)){
            console.log("Invalid character entered, end of program.")
            break;
        }
        else
        for(a; a <= b;a ++){

            console.log(`${x} * ${a} = ${x*a}`);
        }
    }
}

//console.log("\nThis is the first multiplication table");
// console.log(mTable())

function betterMTable(){
    let x, y, a, b;
    while(true){
        
        
        
        x = Number(prompt("Please input your table starting with what you want to start multiplying at: "));
        y = Number(prompt("Now input the number you'd like to end at: "))
        a = Number(prompt("Now input what you'd like to start at: "));
        b = Number(prompt("Now enter what you'd like it to go to: "));

        let a2 = a, b2 = b;

        if(isNaN(x) || isNaN(y) || isNaN(a) || isNaN(b)){ // checks that all inputs were numbers 
            console.log("Invalid character entered, end of program.")
            break; // if they entered a letter or something other than a number it ends the program
        }
        else
        for(x; x <= y;x++){
            for(a; a <= b;a ++){
                console.log(`${x} * ${a} = ${x*a}`);
            }
            console.log("\n");
            a=a2;
            b=b2; // resets a and b to what the user entered so it doesnt break the loop
        }
    }
    
}

//console.log("\nThis is the second multiplication table");
// console.log(betterMTable());

//<p>yuh</p>
//<p></p>

//b2 change

