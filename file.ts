//initial state ready functions
window.onload = function() {

    if(document.readyState == "complete"){
        console.log("Ready");
        var executeButton = document.getElementById("execute-button");
        var handshakeButton = document.getElementById("handshake-button");
        var pangramInput = document.getElementById("pangram-input") as HTMLInputElement;
        var handshakeInput = document.getElementById("handshake-input") as HTMLInputElement;

        executeButton.onclick =  function() {
            console.log(pangramInput.value);
            Pangram(pangramInput.value);
        }

        handshakeButton.onclick = function() {
            SecretHandshake(parseInt(handshakeInput.value));
        }
    }
    else{
        console.log("Not Ready Yet");
    }
}

//Validates wether or not a phrase includes all the letters of the alphabet (a pangram)
//From https://exercism.org/tracks/typescript/exercises/pangram
function Pangram(name: string): void {
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
                    'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
                    's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    name = name.toLowerCase();
    const regEx = /[,.():'"?!]/g;
    var filteredName = name.replace(regEx, '');
    let nameArray = filteredName.split("");
    let sortedName = nameArray.sort();
    let pickedList: string[] = [];

    sortedName.filter((c, index) => {
        return sortedName.indexOf(c) === index;
    });

    for(let i = 0; i < sortedName.length; i++){
        if(sortedName[i] != " "){
            if(sortedName[i + 1] != sortedName[i]){
                pickedList.push(sortedName[i]);
            }
        }
    }

    document.getElementById('pangram-results').style.display = 'block';

    if (JSON.stringify(pickedList) == JSON.stringify(alphabet)){
        document.getElementById('pangram-result').innerHTML = "{" + name + "}: <u>is a pangram!</u>"
    }
    else{
        document.getElementById('pangram-result').innerHTML = "{" + name + "} <u>is NOT a pangram!</u>"
    }
}

//Calculates your rotations around the sun (your age) on other planets
//From https://exercism.org/tracks/typescript/exercises/space-age
function SpaceAge(value: string){
    
    // Planet rotation around sun in years
    // 1 year = 365.25 Earth days, or 31557600 seconds
    enum Planets{
        Mercury = 0.2408467,
        Venus = 0.61519726,
        Earth = 1.0, 
        Mars = 1.8808158,
        Jupiter = 11.862615,
        Saturn = 29.447498,
        Uranus = 84.016846,
        Neptune = 164.79132
    }

    let ageInput = document.getElementById("age-input") as HTMLInputElement;
    let selection = document.querySelector("#planet-list") as HTMLSelectElement;

    if(ageInput.value == ""){
        document.getElementById("planet-result-header").innerHTML = "Please enter your age to continue.";
        document.getElementById("planet-result-years").innerHTML = "";
        document.getElementById("planet-result-seconds").innerHTML = "";
        selection.value = "initial";
    }
    else{
        console.log("Value: " + value);
        switch(value){
            case "mercury":
                var ageInYears: number = (365.25 * Planets.Mercury) * parseInt(ageInput.value) / 365.25;
                var ageInSeconds: number = ageInYears * Math.pow(60, 3);
                PlanetOutput(value, ageInSeconds, ageInYears);
                break;
            case "venus":
                var ageInYears: number = (365/25 * Planets.Venus) * parseInt(ageInput.value) / 365.25;
                var ageInSeconds: number = ageInYears * Math.pow(60, 3);
                PlanetOutput(value, ageInSeconds, ageInYears);
                break;
            case "earth":
                var ageInYears: number = (365.25 * Planets.Earth) * parseInt(ageInput.value) / 365.25;
                var ageInSeconds: number = ageInYears * Math.pow(60, 3);
                PlanetOutput(value, ageInSeconds, ageInYears);
                break;
            case "mars":
                var ageInYears: number = (365.25 * Planets.Mars) * parseInt(ageInput.value) / 365.25;
                var ageInSeconds: number = ageInYears * Math.pow(60, 3);
                PlanetOutput(value, ageInSeconds, ageInYears);
                break;
            case "jupiter":
                var ageInYears: number = (365.25 * Planets.Jupiter) * parseInt(ageInput.value) / 365.25;
                var ageInSeconds: number = ageInYears * Math.pow(60, 3);
                PlanetOutput(value, ageInSeconds, ageInYears);
                break;
            case "saturn":
                var ageInYears: number = (365.25 * Planets.Saturn) * parseInt(ageInput.value) / 365.25;
                var ageInSeconds: number = ageInYears * Math.pow(60, 3);
                PlanetOutput(value, ageInSeconds, ageInYears);
                break;
            case "uranus":
                var ageInYears: number = (365.25 * Planets.Uranus) * parseInt(ageInput.value) / 365.25;
                var ageInSeconds: number = ageInYears * Math.pow(60, 3);
                PlanetOutput(value, ageInSeconds, ageInYears);
                break;
            case "neptune":
                var ageInYears: number = (365.25 * Planets.Neptune) * parseInt(ageInput.value) / 365.25;
                var ageInSeconds: number = ageInYears * Math.pow(60, 3);
                PlanetOutput(value, ageInSeconds, ageInYears);
                break;
        }
        ageInput.value = "";
        selection.value = "initial";
    }
}

//Responsible for taking the calculated input and displaying it in a read friendly output
function PlanetOutput(value: string, ageInSeconds: number, ageInYears: number): void {

    var resultsHeader = document.getElementById("planet-result-header");
    var yearResults = document.getElementById("planet-result-years");
    var secondsResult = document.getElementById("planet-result-seconds");

    var ageSecondString: string = "";
    var outputSeconds: string = "";

    var outputArray = ageInSeconds.toFixed(0).toString().split("");
    var reverseArray = outputArray.reverse();
    outputSeconds = outputArray.join("").toString();

    console.log(outputSeconds);

    for(let i = outputSeconds.length - 1; i >= 0; i--){
        console.log("String: " + outputSeconds[i]);
        console.log("Mod: " + i % 3);
        ageSecondString += outputSeconds[i];
        if(i != 0 && i % 3 == 0){
            ageSecondString += ',';
        }
    }

    document.getElementById("planet-results").style.display = 'block';
    resultsHeader.innerHTML = "Your age, if you lived on " + value + ", would be:";
    yearResults.innerHTML = "<strong>" + ageInYears.toFixed(1) + "</strong> years old.";
    secondsResult.innerHTML = "<strong>" + ageSecondString + "</strong> seconds old."; 
}

// Adds a unique robot name to the assembly line with the first 2 digits A-Z and the last 3 0-9
//From https://exercism.org/tracks/typescript/exercises/robot-name
function RobotName(){
    const maxNum: number = 999
    const maxLetter: number = 25;
    const alphabet: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
                    'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
                    'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    
    let a = alphabet[Math.floor(Math.random() * maxLetter)];
    let b = alphabet[Math.floor(Math.random() * maxLetter)];
    let val = Math.floor(Math.random() * maxNum).toString();
    let namesArray: string[] = ["AK201"];

    if (parseInt(val) < 10){
        val = "00" + val;
    }
    else if (parseInt(val) < 100){
        val = "0" + val;
    }

    let name: string = a + b + val;

    if (namesArray.indexOf(name) == -1){
        namesArray.push(name);
        console.log(name + " was pushed to the line.");
    }
    else {
        alert(name + " already exists would you like to factory reset?");
    }
}

//Parse and evaluate simple math word problems returning the answer as an integer.
//From https://exercism.org/tracks/typescript/exercises/wordy
function Wordy(): void{
    let regEx = /[,.?!]/;

    //Change this to any simple math word problem
    let input: string = "How many times does 5 go into 13?";

    let filteredInput = input.replace(regEx, '');
    let inputArray = filteredInput.split(' ');
    let numericalValues: number[] = [];
    var operator: string = "";

    var calculation = {
        '+': function(x, y) {return x + y as number},
        '-': function(x, y) {return x - y},
        '*': function(x, y) {return x * y},
        '/': function(x, y) {return x / y},
        '^': function(x, y) {return Math.pow(x, y)},
        '': function(x) {return x ? 0 : x = null}
    }

    for (let i = 0; i < inputArray.length; i++){
        let operatorArray: string[] = ['plus', 'added', 'add', 'minus', 'times', 'multiplied', 'divided', 'power']

        if(parseInt(inputArray[i])){
            numericalValues.push(parseInt(inputArray[i]));
        }

        if(operatorArray.indexOf(inputArray[i]) != -1){
            switch(inputArray[i]){
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

function WordyTooltipOn(): void{
    document.getElementById('wordy-button-div').style.display = 'block';
}

function WordyTooltipOff(): void{
    document.getElementById('wordy-button-div').style.display = 'none';
}

// You and your fellow cohort of those in the "know" when it comes 
// to binary decide to come up with a secret "handshake".

// 1 = wink
// 10 = double blink
// 100 = close your eyes
// 1000 = jump
// 10000 = Reverse the order of the operations in the secret handshake.

// Given a decimal number, convert it to the appropriate sequence of events for a secret handshake.

// Here's a couple of examples:
// Given the input 3, the function would return the array ["wink", "double blink"] because 3 is 11 in binary.
// Given the input 19, the function would return the array ["double blink", "wink"] because 19 is 10011 in binary. 
// Notice that the addition of 16 (10000 in binary) has caused the array to be reversed.

//From https://exercism.org/tracks/typescript/exercises/secret-handshake
function SecretHandshake(input: number) {

    if(input == null){
        //TODO: output for null input
        throw new Error();
    }

    //Change decimal input to binary 
    let inputValue = dec2bin(input);

    let key = {
        1: 'Wink',
        10: 'Double blink',
        100: 'Close your eyes',
        1000: 'Jump'
    };

    let inputArray = inputValue.toString().split('');

    //Changes the input array into an array that represents a binary number
    for(let i = 0; i < 5 - inputArray.length; i++){
        inputArray.unshift('0');
    }

    var outputValuesArray: string [] = [];
    inputArray = inputArray.reverse();
    for(let i = 0; i < inputArray.length; i++){
        
        if(inputArray[i] == '1'){
            switch(i){
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

    var displayArray: string[] = [];
    for(let i = 0; i < outputValuesArray.length; i++){
        displayArray.push(key[outputValuesArray[i]]);
    }    

    document.getElementById("handshake-output").innerHTML = displayArray.join(', ');
}

//Returns binary value of decimal number
function dec2bin(dec: number): number {
    return parseInt((dec >>> 0).toString(2));
}
