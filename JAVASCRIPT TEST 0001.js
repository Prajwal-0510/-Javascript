let n = 5;
for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = i; j < n; j++) {
        row += " ";
    }
    for (let k = 1; k <= (2 * i - 1); k++) {
        if (k == 1 || k == (2 * i - 1)) {
            row += "*";
        } else {
            row += " ";
        }
    }
    console.log(row);
}
for (let i = n - 1; i >= 1; i--) {
    let row = "";
    for (let j = n; j > i; j--) {
        row += " ";
    }
    for (let k = 1; k <= (2 * i - 1); k++) {
        if (k == 1 || k == (2 * i - 1)) {
            row += "*";
        } else {
            row += " ";
        }
    }
    console.log(row);
}