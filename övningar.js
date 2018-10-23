
//Skapa en array som innehåller en lista över dina favoritböcker.
let books = ["The messy middle by scott belsky", "Lake success by gary shteyngart"
,"French exit by patrick dewitt", "There there by tommy orange"];
//Skriv ut den första boken
console.log("Första boken i listan är "+ books[0]+".");//Första boken i listan är The messy middle by scott belsky.
//Skriv ut den sista boken
console.log("Sista boken i listan är "+books[3]+".");//Sista boken i listan är There there by tommy orange.
//Skriv ut alla böcker i konsolen i sorterad ordning.
console.log("I listan finns: "+ books.sort()+".");//I listan finns: French exit by patrick dewitt,Lake success by gary shteyngart,The messy middle by scott belsky,There there by tommy orange.
//Skriv därefter ut antal böcker
console.log("Det finns "+ books.length+" boker i listan.");//Det finns 4 boker i listan.

//-----------------------------------------------------------\\

/* 
Skapa en funktion som heter hello
Funktionen visar meddelandet
”Hello World”
i konsolfönstret.
Anropa funktionen 5 gånger.
*/ 

function hello(){
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
}
hello();
/*Hello World
Hello World
Hello World
Hello World
Hello World*/

//---------------------------------------\\


//Skapa en funktion som beräknar summan av två tal.

function sumOf2(x,y){
let sum = x + y
console.log(sum); 

}
sumOf2(4,7)//11

//Skapa en funktion som beräknar summan av tre tal.

function sumOf3(a,b,c){
    let sum3 = a+b+c
    return sum3
}
console.log(sumOf3(5,4,9));//18