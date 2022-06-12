// family
const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    let familyMembers = '';
    if (arr.length !== 0) {
        arr.forEach((item) => {
            familyMembers = familyMembers + item + ' ';
        });
        return `Семья состоит из: ${familyMembers}`;
    } else {
        return `Семья пуста`;
    }
}
console.log(showFamily(family));

// lowercase
const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    arr.forEach((item) => {
        console.log(item.toLowerCase());
    });
}
standardizeStrings(favoriteCities);

// reverse
const someString = 'This is some strange string';

function reverse(str) {
    if (typeof (str) === 'string') {
        let arr = str.split('');
        arr.reverse();
        let string = arr.join('');
        return string;
    } else {
        return `Ошибка!`;
    }
}

console.log(reverse(someString));

// Банкомат
const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    let availableCurr = '';
    let output = `Доступные валюты:`;
    if (arr.length > 0) {
        let index = arr.findIndex(function a(i) {
            return i === missingCurr;
        });
        if (index !== -1) {
            arr.splice(index, 1);
        }
        arr.forEach((item) => {
            availableCurr += `${item}\n`;
        });
        output += `\n${availableCurr}`;
        return output;
    } else {
        return `Нет доступных валют`;
    }
}

console.log(availableCurr(additionalCurrencies));

// shops
const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
};

function isBudgetEnough(data) {
    let {shops: shopsOptions} = data;
    let volume = 0;
    shopsOptions.forEach((item) => {
        let shopVolume = item.width*item.length*data.height;
        volume += shopVolume;
    });
    let cost = volume * data.moneyPer1m3;
    console.log(cost);
    if (cost <= shoppingMallData.budget) {
        return `Бюджета достаточно`;
    } else {
        return `Бюджета недостаточно`;
    }
}

console.log(isBudgetEnough(shoppingMallData));

// students

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam', 'dtjtj'];

function sortStudentsByGroups(arr) {
    let newStudents = arr.slice().sort();
    let arrOne  = [],
    arrTwo = [],
    arrThree = [],
    finalArray = [];
    let text = 'Оставшиеся студенты:';
    newStudents.forEach((item, i) => {
        if (i < 3) {
            arrOne.push(item);
        } else if (i < 6) {
            arrTwo.push(item);
        } else if (i < 9) {
            arrThree.push(item);
        } else {
            text += ` ${item},`;
        }
    });
    if (text === 'Оставшиеся студенты:') {
        text = 'Оставшиеся студенты: -';
    } else {
        text = text.slice(0, - 1);
    }
    console.log(text);
    finalArray.push(arrOne, arrTwo, arrThree, text);
    return finalArray;
}

console.log(sortStudentsByGroups(students));