const rotateSign = ['|', '/', '-', '\\'];
let delay = 100;
for (let sign of rotateSign) {
    setTimeout(() => {
    process.stdout.write(`\r${sign}   `);
    }, delay += 200);
}

