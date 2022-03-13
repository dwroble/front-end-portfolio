window.onload = function () {
    if (document.readyState == "complete") {
        console.log("Ready");
        var executeButton = document.getElementById("execute-button");
        var wordyTooltip = document.getElementById('wordy-button-div');
        executeButton.onclick = function () {
            Pangram("Two driven jocks help fax my big quiz.");
        };
    }
    else {
        console.log("Not Ready Yet");
    }
};
function Pangram(name) {
    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
        'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
        's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    name = name.toLowerCase();
    var regEx = /[,.]/g;
    var filteredName = name.replace(regEx, '');
    var nameArray = filteredName.split("");
    var sortedName = nameArray.sort();
    var pickedList = [];
    sortedName.filter(function (c, index) {
        return sortedName.indexOf(c) === index;
    });
    for (var i = 0; i < sortedName.length; i++) {
        if (sortedName[i] != " ") {
            if (sortedName[i + 1] != sortedName[i]) {
                pickedList.push(sortedName[i]);
            }
        }
    }
    if (JSON.stringify(pickedList) == JSON.stringify(alphabet)) {
        console.log("Success");
    }
    else {
        console.log("Failure");
    }
    console.log("PickList: " + JSON.stringify(pickedList));
    console.log("Alphabet: " + JSON.stringify(alphabet));
}
function SpaceAge(value) {
    // Planet rotation around sun in years
    // 1 year = 365.25 Earth days, or 31557600 seconds
    var Planets;
    (function (Planets) {
        Planets[Planets["Mercury"] = 0.2408467] = "Mercury";
        Planets[Planets["Venus"] = 0.61519726] = "Venus";
        Planets[Planets["Earth"] = 1] = "Earth";
        Planets[Planets["Mars"] = 1.8808158] = "Mars";
        Planets[Planets["Jupiter"] = 11.862615] = "Jupiter";
        Planets[Planets["Saturn"] = 29.447498] = "Saturn";
        Planets[Planets["Uranus"] = 84.016846] = "Uranus";
        Planets[Planets["Neptune"] = 164.79132] = "Neptune";
    })(Planets || (Planets = {}));
    var ageInput = document.getElementById("age-input");
    var selection = document.querySelector("#planet-list");
    if (ageInput.value == "") {
        console.log("Please enter your age to continue.");
        selection.value = "initial";
    }
    else {
        console.log("Value: " + value);
        switch (value) {
            case "mercury":
                var ageInYears = (365.25 * Planets.Mercury) * parseInt(ageInput.value) / 365.25;
                var ageInSeconds = ageInYears * Math.pow(60, 3);
                PlanetOutput(value, ageInSeconds, ageInYears);
                break;
            case "venus":
                var ageInYears = (365 / 25 * Planets.Venus) * parseInt(ageInput.value) / 365.25;
                var ageInSeconds = ageInYears * Math.pow(60, 3);
                PlanetOutput(value, ageInSeconds, ageInYears);
                break;
            case "earth":
                var ageInYears = (365.25 * Planets.Earth) * parseInt(ageInput.value) / 365.25;
                var ageInSeconds = ageInYears * Math.pow(60, 3);
                PlanetOutput(value, ageInSeconds, ageInYears);
                break;
            case "mars":
                var ageInYears = (365.25 * Planets.Mars) * parseInt(ageInput.value) / 365.25;
                var ageInSeconds = ageInYears * Math.pow(60, 3);
                PlanetOutput(value, ageInSeconds, ageInYears);
                break;
            case "jupiter":
                var ageInYears = (365.25 * Planets.Jupiter) * parseInt(ageInput.value) / 365.25;
                var ageInSeconds = ageInYears * Math.pow(60, 3);
                PlanetOutput(value, ageInSeconds, ageInYears);
                break;
            case "saturn":
                var ageInYears = (365.25 * Planets.Saturn) * parseInt(ageInput.value) / 365.25;
                var ageInSeconds = ageInYears * Math.pow(60, 3);
                PlanetOutput(value, ageInSeconds, ageInYears);
                break;
            case "uranus":
                var ageInYears = (365.25 * Planets.Uranus) * parseInt(ageInput.value) / 365.25;
                var ageInSeconds = ageInYears * Math.pow(60, 3);
                PlanetOutput(value, ageInSeconds, ageInYears);
                break;
            case "neptune":
                var ageInYears = (365.25 * Planets.Neptune) * parseInt(ageInput.value) / 365.25;
                var ageInSeconds = ageInYears * Math.pow(60, 3);
                PlanetOutput(value, ageInSeconds, ageInYears);
                break;
        }
        ageInput.value = "";
        selection.value = "initial";
    }
}
function PlanetOutput(value, ageInSeconds, ageInYears) {
    console.log("Your age, if you were to live on " + value + " would be: " + ageInYears.toFixed(1) + " years old. In seconds that would be: " + ageInSeconds.toFixed(0) + " seconds!");
}
function RobotName() {
    var maxNum = 999;
    var maxLetter = 25;
    var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
        'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
        'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    var a = alphabet[Math.floor(Math.random() * maxLetter)];
    var b = alphabet[Math.floor(Math.random() * maxLetter)];
    var val = Math.floor(Math.random() * maxNum).toString();
    var namesArray = ["AK201"];
    if (parseInt(val) < 10) {
        val = "00" + val;
    }
    else if (parseInt(val) < 100) {
        val = "0" + val;
    }
    var name = a + b + val;
    if (namesArray.indexOf(name) == -1) {
        namesArray.push(name);
        console.log(name + " was pushed to the line.");
    }
    else {
        alert(name + " already exists would you like to factory reset?");
    }
}
function Wordy() {
    var regEx = /[,.?!]/;
    var input = "What is 5 plus 13?";
    var filteredInput = input.replace(regEx, '');
    var inputArray = filteredInput.split(' ');
    var numericalValues = [];
    var operator = "";
    var calculation = {
        '+': function (x, y) { return x + y; },
        '-': function (x, y) { return x - y; },
        '*': function (x, y) { return x * y; },
        '/': function (x, y) { return x / y; },
        '^': function (x, y) { return Math.pow(x, y); },
        '': function () { return "No Operator Provided"; }
    };
    for (var i = 0; i < inputArray.length; i++) {
        var operatorArray = ['plus', 'minus', 'times', 'multiplied', 'divided', 'power'];
        if (parseInt(inputArray[i])) {
            numericalValues.push(parseInt(inputArray[i]));
        }
        if (operatorArray.indexOf(inputArray[i]) != -1) {
            switch (inputArray[i]) {
                case 'plus':
                    operator = '+';
                    break;
                case 'minus':
                    operator = '-';
                    break;
                case 'times':
                    operator = '*';
                    break;
                case 'multiplied':
                    operator = '*';
                    break;
                case 'divided':
                    operator = '/';
                    break;
                case 'power':
                    operator = '^';
                    break;
            }
        }
    }
    console.log(calculation[operator](numericalValues[0], numericalValues[1]));
}
function WordyTooltipOn() {
    document.getElementById('wordy-button-div').style.display = 'block';
}
function WordyTooltipOff() {
    document.getElementById('wordy-button-div').style.display = 'none';
}
