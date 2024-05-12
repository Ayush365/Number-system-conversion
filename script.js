// Function to convert numbers and save input history
function convertNumber(type, value) {
    let decimal;
    // Parse the input value based on the number system type
    switch (type) {
        case 'decimal':
            decimal = parseInt(value, 10);
            break;
        case 'binary':
            decimal = parseInt(value, 2);
            break;
        case 'octal':
            decimal = parseInt(value, 8);
            break;
        case 'hexadecimal':
            decimal = parseInt(value, 16);
            break;
    }

    // If the input value is a valid number, perform the conversions
    if (!isNaN(decimal)) {
        document.getElementById('decimal-input').value = decimal.toString(10);
        document.getElementById('binary-input').value = decimal.toString(2);
        document.getElementById('octal-input').value = decimal.toString(8);
        document.getElementById('hexadecimal-input').value = decimal.toString(16);

        // Save input history in local storage
        saveToLocalStorage(decimal.toString(10), decimal.toString(2), decimal.toString(8), decimal.toString(16));
        
        // Update input history table
        updateInputHistoryTable();
    } else {
        // Clear the other fields if the input value is invalid
        document.getElementById('decimal-input').value = '';
        document.getElementById('binary-input').value = '';
        document.getElementById('octal-input').value = '';
        document.getElementById('hexadecimal-input').value = '';
    }
}

// Function to save input history in local storage
function saveToLocalStorage(decimal, binary, octal, hexadecimal) {
    let history = JSON.parse(localStorage.getItem('inputHistory')) || [];
    history.push({ decimal, binary, octal, hexadecimal });
    localStorage.setItem('inputHistory', JSON.stringify(history));
}

// Function to update input history table
function updateInputHistoryTable() {
    const historyBody = document.getElementById('history-body');
    const history = JSON.parse(localStorage.getItem('inputHistory')) || [];
    historyBody.innerHTML = ''; // Clear previous rows

    // Add rows to the table
    history.forEach(entry => {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${entry.decimal}</td>
            <td>${entry.binary}</td>
            <td>${entry.octal}</td>
            <td>${entry.hexadecimal}</td>
        `;
        historyBody.appendChild(newRow);
    });
}

// Load input history from local storage when the page loads
window.onload = function () {
    // Update input history table
    updateInputHistoryTable();
}
