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