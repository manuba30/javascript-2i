let currentColumn = 1;
let currentRow = 1;

function moveLeft() {
    if (currentColumn > 1) {
        if (!isPark(currentColumn - 1, currentRow)) {
            currentColumn--;
            updatePosition();
        } else {
            showError();
        }
    }
}

function moveRight() {
    if (currentColumn < 9) {
        if (!isPark(currentColumn + 1, currentRow)) {
            currentColumn++;
            updatePosition();
        } else {
            showError();
        }
    }
}

function moveTop() {
    if (currentRow > 1) {
        if (!isPark(currentColumn, currentRow - 1)) {
            currentRow--;
            updatePosition();
        } else {
            showError();
        }
    }
}

function moveBottom() {
    if (currentRow < 10) {
        if (!isPark(currentColumn, currentRow + 1)) {
            currentRow++;
            updatePosition();
        } else {
            showError();
        }
    }
}

function updatePosition() {
    const voiture = document.getElementById("voiture");
    voiture.style.gridColumnStart = currentColumn;
    voiture.style.gridColumnEnd = currentColumn + 1; 
    voiture.style.gridRowStart = currentRow;
    voiture.style.gridRowEnd = currentRow + 1; 
}

function isPark(column, row) {
    const isInPark1 = (column >= 2 && column <= 4) && (row >= 2 && row <= 4);
    const isInPark2 = (column >= 6 && column <= 8) && (row >= 2 && row <= 4);
    const isInPark3 = (column >= 2 && column <= 4) && (row >= 6 && row <= 8);
    const isInPark4 = (column >= 6 && column <= 8) && (row >= 6 && row <= 8);

    return isInPark1 || isInPark2 || isInPark3 || isInPark4;
}

function showError() {
    alert("vous ne devrez pas entrer dans les parks !");
}
