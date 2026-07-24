// Scientific Calculator

function calculate(){

let expression = document.getElementById("expression").value;

try{

document.getElementById("calcResult").innerHTML=
eval(expression);

}

catch{

document.getElementById("calcResult").innerHTML=
"Invalid Expression";

}

}

// Diameter

function diameter(){

let r=parseFloat(document.getElementById("radius").value);

document.getElementById("diameterResult").innerHTML=
2*r;

}

// Radius

function radius(){

let d=parseFloat(document.getElementById("diameterInput").value);

document.getElementById("radiusResult").innerHTML=
d/2;

}

// Circumference

function circumference(){

let r=parseFloat(document.getElementById("circleRadius").value);

document.getElementById("circumferenceResult").innerHTML=
2*Math.PI*r;

function calculate() {

    let expression = document.getElementById("expression").value;

    try {
        document.getElementById("calcResult").innerHTML = eval(expression);
    }

    catch {

        document.getElementById("calcResult").innerHTML = "Invalid Expression";

    }

}


}