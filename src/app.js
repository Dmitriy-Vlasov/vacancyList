'use strict'

import './reset.css';
import './style.css';

const vacancyTemplate = document.querySelector('#vacancy_item_template').innerHTML;
const vacanciesList = document.querySelector('.vacancies_list');
const tagsField = document.querySelector('.tags_field');

tagsField.addEventListener('click', onTagsFieldClick, false)

let vacanciesData = [];
let filterLanguageTags = '';
let filterAreaTags = '';


init();

function init() {
    fetch('https://api.hh.ru/vacancies?text=developer&area=5&per_page=50')
    .then(resp => resp.json())
    .then(createVacanciesList)

    function createVacanciesList(data) {
        vacanciesData = data;
        console.log(vacanciesData)

        renderVacanciesList(vacanciesData['items'])
    }
}

function onTagsFieldClick(e) {
    if(e.target.classList.contains('tag')) {
        onTagClick(e);
    }
}

function onTagClick(e) {
    if (e.target.classList.contains('dev_tag')) {
        filterLanguageTags = e.target.innerHTML;
    }else if (e.target.classList.contains('city_tag')) {
        filterAreaTags = e.target.innerHTML;
    }

    filterVacancies();
}

function filterVacancies() {
    let filteredVacancies;

    if (filterLanguageTags === '') {
        filteredVacancies = vacanciesData['items']
            .filter(el => el['tagsArea'] === filterAreaTags);
    } else if (filterAreaTags === '') {
        filteredVacancies = vacanciesData['items']
        .filter(el => el['tagsLanguage'] === filterLanguageTags);
    } else {
        filteredVacancies = vacanciesData['items']
        .filter(el => el['tagsLanguage'] === filterLanguageTags && el['tagsArea'] === filterAreaTags);
    }

    renderVacanciesList(filteredVacancies);
}

function renderVacanciesList(data) {
    const vacancyHTML = data.map(createVacancyHTML).join('\n');
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
            .replace('{{tag_area}}', determineTagArea(el, ))
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
            'JavaScript', 'PHP', 
            'Unity', 'Swift', 'React',
            'VueJS', 'Angular', 'Full-Stack',
        ];
    
    const languageItem = language.find(elem => el['name'].includes(elem)) || 'Другие специальности';
    el['tagsLanguage'] = languageItem;
    return languageItem;
}

function determineTagArea(el) {
    const area = 
        [
            'Киев', 'Харьков',
            'Днепр', 'Винница', 'Львов', 
            'Запорожье', 'Ивано-Франковск', 'Одесса', 
            'Донецк', 'Черкассы', 'Сумы',
            'Полтава', 'Николаев',
        ];

    const areaItem = area.find(elem => el.area['name'].includes(elem)) || 'Другие города';
    el['tagsArea'] = areaItem;
    return areaItem;
}

