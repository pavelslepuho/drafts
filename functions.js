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

