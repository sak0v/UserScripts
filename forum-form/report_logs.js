// ==UserScript==
// @name         Forum -> Google Form
// @version      1.1
// @author       sak0v
// @match        https://forum.blackrussia.online/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    function getHighlightedText() {
        const selection = window.getSelection();
        return selection.toString().trim();
    }

    function getPreFilledFormURL(highlightedText) {
        const baseURL = "https://docs.google.com/forms/d/e/1FAIpQLSckgNAKFPojrBkQrf3yz-Z1UsLaS0F7yg25opovfvPFAUWs9g/viewform";
        const formParams = new URLSearchParams();

        formParams.append('entry.401558588', 'Vlados_Ravchenko'); //Ник
        formParams.append('entry.1139023912', 'На игрока'); // Тип жалобы
        formParams.append('entry.1996095730', highlightedText || '-'); // Ник игрока
        formParams.append('entry.831062961', window.location.href); // Ссылка на тему
        formParams.append('entry.671248141', 'forum.blackrussia.online'); //Доки
        formParams.append('entry.528424289', 'Нет'); // Работа???
        formParams.append('entry.1531614366', '-'); // Описание нарушения

        return `${baseURL}?${formParams.toString()}`;
    }
    const button = document.createElement('button');
    button.textContent = "Заполнить в форму";
    button.style.position = 'fixed';
    button.style.bottom = '20px';
    button.style.right = '20px';
    button.style.padding = '15px 30px';
    button.style.backgroundColor = '#4287f5';
    button.style.color = 'white';
    button.style.border = 'none';
    button.style.borderRadius = '8px';
    button.style.cursor = 'pointer';
    button.style.fontSize = '16px';
    button.style.fontWeight = 'bold';
    button.style.zIndex = '1000';

    document.body.appendChild(button);
    button.addEventListener('click', function() {
        const highlightedText = getHighlightedText();
        const preFilledURL = getPreFilledFormURL(highlightedText);
        window.open(preFilledURL, '_blank');
    });
})();
