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
    } else {
        // Clear the other fields if the input value is invalid
        document.getElementById('decimal-input').value = '';
        document.getElementById('binary-input').value = '';
        document.getElementById('octal-input').value = '';
        document.getElementById('hexadecimal-input').value = '';
    }
}