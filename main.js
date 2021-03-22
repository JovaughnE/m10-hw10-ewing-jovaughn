// It is always helpful to use comments in your code.

//Declaration of global constants/variables

const freezingTemp = 32;

const boilingTemp = 212;

let waterTemp = deg => document.getElementById('water-temp').innerHTML = 299;

//Definition of a function to decide if the temp is below or above freezing

function coldEnough(deg) {
    if (deg <= freezingTemp) {
        return deg + "is below freezing. ";
    } else {
        return deg + " is above freezing. ";
    }
}

//Definition of a function to decide if the temp is below or above boiling

function tooHot(deg) {
    if (deg >= boilingTemp) {
        return deg + "is above boiling. ";
    } else {
        return deg + " is below boiling. ";
    }
}

setTimeout( function() {
   document.getElementById('boiling').innerHTML = "The water is HOT, I think it is boiling";
}, 3000);

//Output constants in the corresponding span in the HTML Document.
document.getElementById('boiling-temp').innerHTML = 212;
document.getElementById('freezing-temp').innerHTML = 32;
document.getElementById('water-temp').innerHTML = waterTemp();

//Invocation of functions

coldEnough();

tooHot() 
    document.getElementById('boiling').classList.add('show');
