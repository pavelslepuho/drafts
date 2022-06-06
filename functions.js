// Прогрессия
function getMathResult(base, degree) {
    let sum = 0;
    let res = '';
    if (degree > 0 && typeof (degree) === 'number') {
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

// Площадь и объем куба
function calculateVolumeAndArea(a) {
    if (typeof (a) === 'number' && a > 0 && Number.isInteger(a)) {
        let log = `Объем куба: ${a ** 3}, площадь всей поверхности: ${a * a * 6}`;
        return log;
    } else {
        return `При вычислении произошла ошибка`;
    }
}

console.log(calculateVolumeAndArea(2.2));

// Вагоны
function getCoupeNumber(a) {
    if (Number.isNaN(a) || a < 0 || !Number.isInteger(a)) {
        return 'Ошибка. Проверьте правильность введенного номера места';
    } else if (a > 36 || a === 0) {
        return 'Таких мест в вагоне не существует';
    } else {
        return Math.ceil(a / 4);
    }
}
console.log(getCoupeNumber(0));

// Расчет времени
function getTimeFromMinutes(m) {
    let hours = Math.floor(m / 60);
    let minutes = m % 60;
    let hoursString;

    if (!Number.isInteger(m) || m < 0) {
        return 'Ошибка, проверьте данные';
    }

    switch (hours) {
        case 1: hoursString = 'час';
            break;
        case 2:
        case 3:
        case 4:
            hoursString = 'часа';
            break;
        default: hoursString = 'часов';
            break;
    }

    return `Это ${hours} ${hoursString} и ${minutes} минут`;
}

console.log(getTimeFromMinutes(-1));

// Самое большое число
function findMaxNumber(a, b, c, d) {
    let arr = [a, b, c, d];
    arr.forEach((item) => {
        if (typeof(item) !== 'number' || item === '' || arr.length !== 4) {
            arr = [0];
        }
    });
    function myFunction(array) {
        array.sort(function(a, b) {
            return a - b;
        });
    }
    myFunction(arr);
    return arr[arr.length - 1];
}

console.log(findMaxNumber(20000, 325, 4356));

// Фибоначчи

// 1
function fib(num) {
    if (num <= 0 || typeof(num) !== 'number' || !Number.isInteger(num)) {
        return '';
    } else if (num > 1) {
        let a = [0, 1];
        let d = '';
        for (let i = 2; i < num; i++) {
            a[i] = a[i - 1] + a[i - 2];
        }
    
        a.forEach((item) => {
            d += `${item} `;
        });
        return d.slice(0, -1);
    } else {
        return '0';
    }
}

console.log(fib(1));

// 2
function fib(num) {
    if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
        return "";
    }

    let result = '';
    let first = 0;
    let second = 1;

    for (let i = 0; i < num; i++) {
        if (i + 1 === num) {
            result += `${first}`;
        } else {
            result += `${first} `;
        }

        let third = first + second;
        first = second;
        second = third;
    }

    return result;
}

console.log(fib(1));