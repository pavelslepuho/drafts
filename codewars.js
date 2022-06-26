function narcissistic(value) {
    value = '' + value;
    let a = value.split('');
    let result = 0;
    a.forEach(item => {
        item = +item;
        result = result + item ** value.length;
    });
    if (result === +value) {
        return true;
    } else {
        return false;
    }
}

console.log(narcissistic(153));


// Конец строки
function solution(str, ending) {
    return str.substr(-ending.length) == ending;
}

console.log(solution('qweerty', 'rty'));

// панграмма


function isPangram(string) {

    let arrEn = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let arr = string.toLowerCase().split('');
    for (let letter of arrEn) {
        if (!arr.includes(letter)) {
            return false;
        } else {
            return true;
        }
    }
}

console.log(isPangram('abcdefghijklmnopqrstuvwxyz'));