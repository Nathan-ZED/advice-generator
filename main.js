const text = document.querySelector('.card p');
const id = document.querySelector('.card span:first-child');
const cardButton = document.querySelector('.card button');

let data = [];

const replaceTexts = (el, el2, id, text) => {
    el.textContent = `Advice #${id}`;
    el2.textContent = `"${text}"`;
}

const fetchNewAdvice = async () => {
    let result;
    await fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then(res => result = res);

    return result;
}

const getAndReplaceAdvice = () => {
    fetchNewAdvice().then(res => data = res).then(res => replaceTexts(id, text, res.slip.id, res.slip.advice));
}

window.addEventListener('DOMContentLoaded', () => getAndReplaceAdvice())
cardButton.addEventListener('click', () => getAndReplaceAdvice())


