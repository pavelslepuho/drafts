let students = {
    js: [{
        name: 'John',
        progress: 100
    }, {
        name: 'Ivan',
        progress: 60
    }],

    html: {
        basic: [{
            name: 'Peter',
            progress: 20
        }, {
            name: 'Ann',
            progress: 18
        }],
        pro: [{
            name: 'Sam',
            progress: 10
        }],
        semi: {
            students: [{
                name: 'Test',
                progress: 1000
            }]
        }
    }
};

// Loop
// function averageProgressByLoop(data) {
//     let students = 0,
//         totalProgress = 0;

//     for (let course in data) {
//         if (Array.isArray(data[course])) {
//             students += data[course].length;
//             data[course].forEach(item => {
//                 totalProgress += item.progress;
//             });
//         } else {
//             for (let subCourse in data[course]) {
//                 if (Array.isArray(data[course][subCourse])) {
//                     students += data[course][subCourse].length;
//                     data[course][subCourse].forEach(item => {
//                         totalProgress += item.progress;
//                     });
//                 }
//             }
//         }
//     }
//     return totalProgress / students;
// }

// console.log(averageProgressByLoop(students));

// recursion
function averageProgressByRecursion(data) {

    if (Array.isArray(data)) {
        let total = 0;

        for (let i = 0; i < data.length; i++) {
            total += data[i].progress;
        }

        return [total, data.length];

    } else {

        let total = [0, 0];

        for (let subData of Object.values(data)) {
            let subDataArr = averageProgressByRecursion(subData);
            total[0] += subDataArr[0];
            total[1] += subDataArr[1];
        }

        return total;
    }
}

let result = averageProgressByRecursion(students);

console.log(result[0] / result[1]);

// Факториал

function factorialLoop(num) {
    if (typeof (num) === 'number' && Number.isInteger(num) && num >= 0) {
        let i = 1;
        for (num; num > 0; num--) {
            i = i * num;
        }
        return i;
    } else {
        return 'error!!!';
    }
}
console.log(factorialLoop(6));

function factorialRecursion(num) {

    if (num === 0 || num < 0) {
        return 1;
    }

    if (typeof (num) !== 'number' || !Number.isInteger(num) || num < 0) {
        return 'Ошибка!';
    } else if (num === 1) {
        return num;
    } else {
        return num * factorialRecursion(num - 1);
    }
}

console.log(factorialRecursion('hth'));

// степень

function pow(x, n) {
    if (n === 1) {
        return x;
    } else {
        return x * pow(x, n - 1);
    }
}

console.log(pow(2, 4));

// делитель
function dividerLoop(a, b) {
    for (let i = a; i > 0; i--) {
        if (a % i === 0 && b % i === 0) {
            return i;
        }
    }
}
console.log(dividerLoop(43, 66));

function dividerRecursion(a, b) {
    if (b === 0) {
        return a;
    }

    return dividerRecursion(b, a % b);
}

console.log(dividerRecursion(44, 66));

// integer
let arr = [];
function integer(a, b) {

    if (Math.ceil(a) === Math.floor(b)) {
        arr.push(Math.ceil(a));
        return arr;
    } else {
        arr.push(Math.ceil(a));
        return integer(a + 1, b);
    }

}

console.log(integer(1.2, 28.9));

// sum of numbers
function sumOfNumbers(array) {

    if (array.length === 1) {
        return array[0];
    } else {
        array[array.length - 2] = array[array.length - 2] + array[array.length - 1];
        array.pop();
        return sumOfNumbers(array);
    }
}

console.log(sumOfNumbers([2, 4, 6, 1]));

// exponent
function exp(a, b) {
    if (b === 1) {
        return a;
    } else {
        return a * exp(a, b - 1);
    }
}

console.log(exp(2, 4));

// fibonacci
let arrFib = [0, 1];

function fib(n) {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        arrFib.pop();
        return arrFib;
    } else {
        arrFib.push(0);
        arrFib[arrFib.length - 1] = arrFib[arrFib.length - 2] + arrFib[arrFib.length - 3];
        return fib(n - 1);
    }
}

function fi(n) {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        arrFib[arrFib.length - 1] = arrFib[arrFib.length - 2] + arrFib[arrFib.length - 3];
        return fi(n - 1);
    }
}

console.log(fi(6));

function fir(n) {
    if (n <= 1) {
        return n;
    } else {
        return fir(n - 1) + fir(n - 2);
    }
}

console.log(fir(6));

function fib2(n) {
    if (n === 0) {
        return [0, 1];
    } else {
        const [prev, next] = fib2(n - 1);
        return [next, prev + next];
    }
}

console.log(fib2(6)[0]);

// количество массивов
function deepCount(a) {
    let count = a.length;
    for (let i = 0; i < count; i++) {
        if (Array.isArray(a[i])) {
            return count += deepCount(a[i]);
        }
    }
    return count;
}

console.log(deepCount([1, 4, 5, 1, 6, ['dfg', 'rejtryj', 354, []]]));
