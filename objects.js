// experience
// 1
const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng', 'ua'],
        programmingLangs: {
            js: '20%',
            php: '10%',
            'C++': '15%'
        },
        exp: '1 month'
    },
    showAgeAndLangs(plan) {
        let {age} = plan,
            {languages} = plan.skills;
        let lang = languages.join(' ').toUpperCase();
        let text = `Мне ${age} и я владею языками: ${lang}`;
        return text;
    }
};

function showExperience(plan) {
    let {exp} = plan.skills;
    return exp;
}

console.log(showExperience(personalPlanPeter));

function showProgrammingLangs(plan) {
    let {programmingLangs} = plan.skills;
    let langProgress = '';
    for (let key in programmingLangs) {
        langProgress += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
    }
    return langProgress;
}

console.log(showProgrammingLangs(personalPlanPeter));

console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));