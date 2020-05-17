'use strict'

import './reset.css';
import './style.css';
import './mainloader.css';
import './dark.css';

const vacancyTemplate = document.querySelector('#vacancy_item_template').innerHTML;
const vacanciesList = document.querySelector('.vacancies_list');
const tagsField = document.querySelector('.tags_field');
const tagsArea = document.querySelectorAll('.city_tag');
const tagsLanguage = document.querySelectorAll('.dev_tag');
const clearButton = document.querySelector('.clear_filters_button');
const tag = document.querySelectorAll('.tag');
const mainPreloader = document.querySelector('.main_preloader');
const themesSwitcher = document.querySelector('.themes_switcher');
const body = document.querySelector('body');

tagsField.addEventListener('click', onTagsFieldClick);
clearButton.addEventListener('click', onClearButtonClick);
themesSwitcher.addEventListener('click', onToggleThemesClick);

let vacanciesData = [];
let filterLanguageTags;
let filterAreaTags;


init();

function init() {
    fetch('https://api.hh.ru/vacancies?text=developer&area=5&per_page=100')
    .then(resp => resp.json())
    .then(createVacanciesList)

    function createVacanciesList(data) {
        vacanciesData = data;
        console.log(vacanciesData)

        renderVacanciesList(vacanciesData['items']);
        mainPreloader.remove();
    }
}

function onToggleThemesClick() {
    themesSwitcher.classList.toggle('themesSwitcherDark');
    body.classList.toggle('darkTheme');
}

function onClearButtonClick() {
    filterLanguageTags = '';
    filterAreaTags = '';
    [...tag].forEach(el => el.classList.remove('active'))
    renderVacanciesList(vacanciesData['items']);
}

function onTagsFieldClick(e) {
    if(e.target.classList.contains('tag')) {
        onTagClick(e);
    }
}

function onTagClick(e) {
    if (e.target.classList.contains('dev_tag')) {
        filterLanguageTags = e.target.innerHTML;
        clearTag(tagsLanguage);
        tagToActive(e);
    }else if (e.target.classList.contains('city_tag')) {
        filterAreaTags = e.target.innerHTML;
        clearTag(tagsArea);
        tagToActive(e);
    }

    filterVacancies();
}

function tagToActive(e) {
    e.target.classList.toggle('active');
}

function clearTag(tagGroup) {
    [...tagGroup].forEach(el => {
    if(el.classList.contains('active')) {
        el.classList.remove('active');
    }
})
}

function filterVacancies() {
    let filteredVacancies;

    if (!filterLanguageTags) {
        filteredVacancies = vacanciesData['items']
            .filter(el => el['tagsArea'] === filterAreaTags);
    } else if (!filterAreaTags) {
        filteredVacancies = vacanciesData['items']
        .filter(el => el['tagsLanguage'] === filterLanguageTags);
    } else {
        filteredVacancies = vacanciesData['items']
        .filter(el => el['tagsLanguage'] === filterLanguageTags && el['tagsArea'] === filterAreaTags);
    }

    if(filteredVacancies == '') {
        vacanciesList.innerHTML = '<h2 class="no_result">К сожалению, результатов нет :(</h2>';
    } else {  
        renderVacanciesList(filteredVacancies);
    }
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
            'C++', 'C#', 
            '.NET', 'JavaScript',
            'Unity', 'React',
            'Vue', 'Full-Stack',
            'PHP', 'Web'
        ];
    
    const languageItem = language.find(elem => el['name'].includes(elem)) || 'Другие специальности';
    el['tagsLanguage'] = languageItem;
    return languageItem;
}

function determineTagArea(el) {
    const area = 
        [
            'Киев', 'Харьков',
            'Днепр', 'Винница', 
            'Львов', 'Запорожье',
            'Одесса', 'Донецк'
        ];

    const areaItem = area.find(elem => el.area['name'].includes(elem)) || 'Другие города';
    el['tagsArea'] = areaItem;
    return areaItem;
}

