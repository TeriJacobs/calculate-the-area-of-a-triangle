// var side1 = 7;
// var side2 = 7;
// var side3 = 5;

// var answer = 7 + 7 + 5;

function calculate(){
    
var a = parseInt(document.getElementById("side1").value);
var b = parseInt(document.getElementById("side2").value);
var c = parseInt(document.getElementById("side3").value);

var s = (a + b + c )/2;
var area =  Math.sqrt(s*((s-a)*(s-b)*(s-c)));


document.getElementById('result').innerHTML = area;

}


//document.getElementById("result").innerHTML = answer;