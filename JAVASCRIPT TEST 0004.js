let n = 4;
let size = 2 * n - 1;

for (let i = 0; i < size; i++) {
    let row = "";
    
    for (let j = 0; j < size; j++) {
        let value = n - Math.min(Math.min(i, j), Math.min(size - 1 - i, size - 1 - j));
        row += value + " ";
    }

    console.log(row);
}