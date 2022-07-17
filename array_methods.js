// let  arr = [2, 5, 2, 7, 7, 22, 88];

// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
// }

// arr.forEach(item => {
//     sum = +item;
// });

// let newArr = arr.map(item => {
//     return item + 20;
// });

// console.log(newArr);

const films = [
    {
        name: 'Titanic',
        rating: 9
    },
    {
        name: 'Die hard 5',
        rating: 5
    },
    {
        name: 'Matrix',
        rating: 8
    },
    {
        name: 'Some bad film',
        rating: 4
    }
];

function showGoodFilms(arr) {
    let goodFilm = arr.filter(item => {
        return item.rating >= 8;
    });
    return goodFilm;
}

console.log(showGoodFilms(films));

function showListOfFilms(arr) {
    let filmsStr = arr.reduce((total, current) => {
        if (typeof(total) === 'object') {
            total = current.name;
        } else {
            total = `${total}, ${current.name}`;
        }
        return total;
    }, arr[0]);
    return filmsStr;
}

console.log(showListOfFilms(films));

function setFilmsIds(arr) {
    arr.map((item, index) => {
        item.id = index;
    });

    return arr;
}

console.log(setFilmsIds(films));

const tranformedArray = setFilmsIds(films);

function checkFilms(arr) {
    let bull = arr.every(item => {
        if (item.id === 0) {
            return 1;
        } else {
            console.log(item.id);
            return item.id;
        }
    });
    return bull;
}

console.log(checkFilms(tranformedArray));

const funds = [
    {amount: -1400},
    {amount: 2400},
    {amount: -1000},
    {amount: 500},
    {amount: 10400},
    {amount: -11400}
];

const getPositiveIncomeAmount = (data) => {
    let positiveCosts = data.filter(value => value.amount > 0);
    let total = positiveCosts.reduce((sum, current) => {
        sum = sum + current.amount;
        return sum;
    }, 0);
    return total;
};

console.log(getPositiveIncomeAmount(funds));

const getTotalIncomeAmount = (data) => {
    let a = data.some(item => item.amount < 0);
    if (a == true) {
        let b = data.reduce((sum, current) => {
            return sum + current.amount;
        }, 0);
        return b;
    } else {
        return getPositiveIncomeAmount(funds);
    }
};

console.log(getTotalIncomeAmount(funds));