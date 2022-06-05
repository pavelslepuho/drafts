function getMathResult(base, degree) {
    let sum = 0;
    let res = '';
    if (degree > 0 && typeof(degree) === 'number') {
        for (let i = 1; i <= degree; i++) {
            sum += base;
            if (i != degree) {
                res = String(res) + String(sum) + '---';
            } else {
                res = String(res) + String(sum);
            }
        }
        return res;
    } else {
        return base;
    }
}

console.log(getMathResult(4, 33));