// It is always helpful to use comments in your code!
//Declaration of variables Deg, waterTemp
var deg = x;

var waterTemp = document.getElementById('water-temp');

//Declaration of constants boilingTemp and freezingTemp
const boilingTemp = 212;

const freezingTemp = 32;

//Inserting the boilingTemp into the span
document.getElementById("boiling-temp").innerHTML = boilingTemp;
document.getElementById("freezing-temp").innerHTML = freezingTemp;

//Declaration of the function for hot or cold
function hotOrCold(deg) {
    const freezingTemp = 32;
    if (freezingTemp <= deg) {
        return deg + "is below freezing ";
    } else {
        return deg + "is above freezing ";
    }
}

hotOrCold();
 document.getElementById('show').innerHTML = "It is below freezing!";
 document.getElementById('hide').innerHTML = "It is below freezing!";

//Javascript function to toggle the sub-menu to show on hover
//function hotOrCold() {
//    console.log(this.children[1]);
//    this.children[1].classList.toggle('show');
//    }