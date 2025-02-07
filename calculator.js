const display = document.getElementById('display');

function addSymbol(input) {
    if (display.value === "Error!") {
        display.value = "";
    }
    display.value += input;
}

function calculate() {
    try {
        let result = eval(display.value);
        if (isNaN(result) || !isFinite(result)) {
            throw new Error("Invalid operation");
        }
        display.value = result;
    } catch (error) {
        display.value = "Error!";
    }
}

function clearDisplay() {
    display.value = "";
}

function clearCharacter() {
    display.value = display.value.slice(0, -1);
}