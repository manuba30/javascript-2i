function appendNumber(number) {
    document.getElementById("display").value += number;
}

function appendOperator(operator) {
    document.getElementById("display").value += operator;
}

function calculateResult() {
    const expression = document.getElementById("display").value;
    try {
        const result = eval(expression); 
        document.getElementById("display").value = result;
    } catch {
        document.getElementById("display").value = "Erreur";
    }
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function deleteLast() {
    const currentValue = document.getElementById("display").value;
    document.getElementById("display").value = currentValue.slice(0, -1);
}
