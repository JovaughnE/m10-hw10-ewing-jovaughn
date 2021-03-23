// It is always helpful to use comments in your code.

//Declaration of global constants/variables

const freezingTemp = 32;

const boilingTemp = 212;

let waterTemp = 299;

document.getElementById('water-temp').innerHTML = waterTemp;

console.log(waterTemp);
//Definition of a function to decide if the temp is below or above freezing

function compareTemp(deg) {
    if (deg <= 32) {
        document.getElementById('frozen').classList.add('show');
    } else if (deg >= 212) {
        document.getElementById('boiling').classList.add('show');
    } else {
        document.getElementById('good-temp').classList.add('show');
    }
    return deg;
}

//Output constants in the corresponding span in the HTML Document.
document.getElementById('boiling-temp').innerHTML = 212;
document.getElementById('freezing-temp').innerHTML = 32;

//Let's find our function compareTemp, wait 3 seconds, then pass in waterTemp
setTimeout(compareTemp, 3000, waterTemp);