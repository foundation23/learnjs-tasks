function pow(x, n) {
    let result = x;

    for (let i = 1; i < n; i++) {
        result *= x;
    }

    return result;
}

let x = prompt("Введите x", '');
let n = prompt("Введите n", '');

if (n < 1) {
    alert('не натуральное число n');
} else {
    alert( pow(x, n) );
}