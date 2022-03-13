window.onload = function() {

    if(document.readyState == "complete"){
        console.log("Ready");
        var executeButton = document.getElementById("execute-button");
        var wordyTooltip = document.getElementById('wordy-button-div')

        executeButton.onclick =  function() {
            Pangram("Two driven jocks help fax my big quiz.");
        }

        
    }
    else{
        console.log("Not Ready Yet");
    }
}

function Pangram(name: string): void {
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
                    'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
                    's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    name = name.toLowerCase();
    const regEx = /[,.]/g;
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

    if (JSON.stringify(pickedList) == JSON.stringify(alphabet)){
        console.log("Success");
    }
    else{
        console.log("Failure");
    }
    console.log("PickList: " + JSON.stringify(pickedList));
    console.log("Alphabet: " + JSON.stringify(alphabet));
}

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
        console.log("Please enter your age to continue.")
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

function PlanetOutput(value: string, ageInSeconds: number, ageInYears: number): void {

    console.log("Your age, if you were to live on " + value + " would be: " + ageInYears.toFixed(1) + " years old. In seconds that would be: " + ageInSeconds.toFixed(0) + " seconds!");
}

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

function Wordy(): void{

    let regEx = /[,.?!]/;
    let input: string = "What is 5 plus 13?";
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
        '': function() {return "No Operator Provided"}
    }

    for (let i = 0; i < inputArray.length; i++){
        let operatorArray: string[] = ['plus', 'minus', 'times', 'multiplied', 'divided', 'power']

        if(parseInt(inputArray[i])){
            numericalValues.push(parseInt(inputArray[i]));
        }

        if(operatorArray.indexOf(inputArray[i]) != -1){
            switch(inputArray[i]){
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

function WordyTooltipOn(){
    document.getElementById('wordy-button-div').style.display = 'block';
}

function WordyTooltipOff(){
    document.getElementById('wordy-button-div').style.display = 'none';
}