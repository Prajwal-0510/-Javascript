let n = 5;

for (let i = 0; i < n; i++) {
    let row = "";

    for (let s = 0; s < i; s++) {
        row += " ";
    }

    row += "1";

    let mid = n - i - 1;

    for (let j = mid; j >= 2; j--) {
        row += " " + j;
    }

    for (let j = 2; j <= mid; j++) {
        row += " " + j;
    }

    if (mid >= 1) {
        row += " 1";
    }

    console.log(row);
}