console.log("Hello JAVASCRIPT");

//document.getElementById("header").innerHTML="Idan King";

const yuval = document.getElementsByClassName("item2");
yuval[0].innerHTML="Yuval Queen";

var x, y;
x=6;
y=" hi";
z = x+y;
console.log(z);

var pilot = {
    "name": "Dana",
    "id": 546,
    "score": 9,
    
}

function MyFirstFunction() {
    document.getElementById("header").innerHTML="Hello JAVASCRIPT";
}
const MyFunction2 = ()=>{
    var collection = document.getElementsByClassName("item3");
    console.log(collection);
    collection[0].innerHTML="this is function generated";
}

console.log(pilot.name + "'s score is " + pilot.score);
