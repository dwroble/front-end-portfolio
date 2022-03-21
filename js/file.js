window.onload = function () {
    if (document.readyState == "complete") {
        console.log("Ready");
        var executeButton = document.getElementById("execute-button");
        var handshakeButton = document.getElementById("handshake-button");
        var pangramInput = document.getElementById("pangram-input");
        var handshakeInput = document.getElementById("handshake-input");
        executeButton.onclick = function () {
            console.log(pangramInput.value);
            Pangram(pangramInput.value);
        };
        handshakeButton.onclick = function () {
            SecretHandshake(parseInt(handshakeInput.value));
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
    var regEx = /[,.():'"?!]/g;
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
    document.getElementById('pangram-results').style.display = 'block';
    if (JSON.stringify(pickedList) == JSON.stringify(alphabet)) {
        document.getElementById('pangram-result').innerHTML = "{" + name + "}: <u>is a pangram!</u>";
    }
    else {
        document.getElementById('pangram-result').innerHTML = "{" + name + "} <u>is NOT a pangram!</u>";
    }
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
        document.getElementById("planet-result-header").innerHTML = "Please enter your age to continue.";
        document.getElementById("planet-result-years").innerHTML = "";
        document.getElementById("planet-result-seconds").innerHTML = "";
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
    var resultsHeader = document.getElementById("planet-result-header");
    var yearResults = document.getElementById("planet-result-years");
    var secondsResult = document.getElementById("planet-result-seconds");
    var ageSecondString = "";
    var outputSeconds = "";
    var outputArray = ageInSeconds.toFixed(0).toString().split("");
    var reverseArray = outputArray.reverse();
    outputSeconds = outputArray.join("").toString();
    console.log(outputSeconds);
    for (var i = outputSeconds.length - 1; i >= 0; i--) {
        console.log("String: " + outputSeconds[i]);
        console.log("Mod: " + i % 3);
        ageSecondString += outputSeconds[i];
        if (i != 0 && i % 3 == 0) {
            ageSecondString += ',';
        }
    }
    document.getElementById("planet-results").style.display = 'block';
    resultsHeader.innerHTML = "Your age, if you lived on " + value + ", would be:";
    yearResults.innerHTML = "<strong>" + ageInYears.toFixed(1) + "</strong> years old.";
    secondsResult.innerHTML = "<strong>" + ageSecondString + "</strong> seconds old.";
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
    //Change this to any simple math word problem
    var input = "How many times does 5 go into 13?";
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
        '': function (x) { return x ? 0 : x = null; }
    };
    for (var i = 0; i < inputArray.length; i++) {
        var operatorArray = ['plus', 'added', 'add', 'minus', 'times', 'multiplied', 'divided', 'power'];
        if (parseInt(inputArray[i])) {
            numericalValues.push(parseInt(inputArray[i]));
        }
        if (operatorArray.indexOf(inputArray[i]) != -1) {
            switch (inputArray[i]) {
                case 'plus':
                    operator = '+';
                    break;
                case 'added':
                    operator = '+';
                case 'add':
                    operator = '+';
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
function SecretHandshake(input) {
    if (input == null) {
        //TODO: output for null input
        throw new Error();
    }
    //Change decimal input to binary 
    var inputValue = dec2bin(input);
    var key = {
        1: 'Wink',
        10: 'Double blink',
        100: 'Close your eyes',
        1000: 'Jump'
    };
    var inputArray = inputValue.toString().split('');
    //Changes the input array into an array that represents a binary number
    for (var i = 0; i < 5 - inputArray.length; i++) {
        inputArray.unshift('0');
    }
    var outputValuesArray = [];
    inputArray = inputArray.reverse();
    for (var i = 0; i < inputArray.length; i++) {
        if (inputArray[i] == '1') {
            switch (i) {
                case 0:
                    outputValuesArray.push('1');
                    break;
                case 1:
                    outputValuesArray.push('10');
                    break;
                case 2:
                    outputValuesArray.push('100');
                    break;
                case 3:
                    outputValuesArray.push('1000');
                    break;
                case 4:
                    outputValuesArray = outputValuesArray.reverse();
                    break;
                default:
                    console.log("Invalid Input!");
            }
        }
    }
    var displayArray = [];
    for (var i = 0; i < outputValuesArray.length; i++) {
        displayArray.push(key[outputValuesArray[i]]);
    }
    document.getElementById("handshake-output").innerHTML = displayArray.join(', ');
}
function dec2bin(dec) {
    return parseInt((dec >>> 0).toString(2));
}
