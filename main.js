// It is always helpful to use comments in your code.

//Declaration of global constants/variables

const freezingTemp = 32;

const boilingTemp = 212;

const deg = 299;

function waterTemp() {
    let x = deg;

}

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

//Output constants in the corresponding span in the HTML Document.
document.getElementById('boiling-temp').innerHTML = 212;
document.getElementById('freezing-temp').innerHTML = 32;
document.getElementById('water-temp').innerHTML = deg;