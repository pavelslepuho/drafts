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

console.log(result[0]/result[1]);

// Факториал

function factorialLoop(num) {
    if (typeof(num) === 'number' && Number.isInteger(num) && num >= 0) {
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

    if (typeof(num) !== 'number' || !Number.isInteger(num) || num < 0) {
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

