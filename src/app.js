'use strict'

import './reset.css';
import './style.css';

const vacancyTemplate = document.querySelector('#vacancy_item_template').innerHTML;
const vacanciesList = document.querySelector('.vacancies_list');

let vacancies_list = [];

init();

function init() {
    fetch('https://api.hh.ru/vacancies?text=developer&area=5')
    .then(resp => resp.json())
    .then(createVacanciesList)

    function createVacanciesList(data) {
        vacancies_list = data;
        console.log(vacancies_list)

        renderVacanciesList(vacancies_list)
    }
}

function renderVacanciesList(data) {
    console.log(data['items'])
    const vacancyHTML = data['items'].map(createVacancyHTML).join('\n');
    vacanciesList.innerHTML = vacancyHTML;
}

function createVacancyHTML(el) {
    
    return (vacancyTemplate
            .replace('{{logo}}', validLogo(el))
            .replace('{{data-id}}', el.id)
            .replace('{{company_name}}', el.employer.name)
            .replace('{{vacancy_title}}', el.name)
            .replace('{{vacancy_date}}', validDate(el))
            .replace('{{vacancy_salary}}', validSalary(el))
            .replace('{{vacancy_area}}', el.area['name'])
            .replace('{{tag_language}}', determineTagLanguage(el))
            )
}

function validSalary(el) {
    if (el.salary !== null) {
        return 'от ' + el.salary['from'] + ' ' + el.salary['currency']
    } else return 'Not specified'
}

function validDate(el) {
    const date = new Date(el.created_at);
    const day = date.getDate();
    const month = String(date.getMonth()).length == 1 ? '0' + date.getMonth() : date.getMonth();
    return day + '.' + month;
}

function validLogo(el) {
    if (el['employer']['logo_urls'] !== null) {
        return el['employer']['logo_urls']['original']
    } else return 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1200px-No_image_available.svg.png'
}

function determineTagLanguage(el) {
    const language = 
        [
            'Python', 'Java ',
            'C++', 'C#', '.NET', 
            'JavaScript', 'PHP', 'SQL', 
            'Unity', 'Swift', 'React',
            'VueJS', 'Angular', 'Full-Stack',
        ];
    
    const languageItem = language.find(elem => el['name'].includes(elem)) || 'Other';
    el['language'] = languageItem;
    return languageItem;
}

