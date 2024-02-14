import { addId, addFirst, addLast, addHeight, addAge } from "./createelements.js";

let idTxt = document.getElementById('idTxt');
let firstNameTxt = document.getElementById('firstNameTxt');
let lastNameTxt = document.getElementById('lastNameTxt');
let heightTxt = document.getElementById('heightTxt');
let ageTxt = document.getElementById('ageTxt');

let idBtn = document.getElementById('idBtn');
let firstBtn = document.getElementById('firstBtn');
let lastBtn = document.getElementById('lastBtn');
let heightBtn = document.getElementById('heightBtn');
let ageBtn = document.getElementById('ageBtn');
let tenBtn = document.getElementById('tenBtn');
let twentyBtn = document.getElementById('twentyBtn');
let thirtyBtn = document.getElementById('thirtyBtn');
let fortyBtn = document.getElementById('fortyBtn');
let fiftyBtn = document.getElementById('fiftyBtn');
let pages = document.getElementById('pages');
let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let four = document.getElementById('four');
let five = document.getElementById('five');
let six = document.getElementById('six');
let seven = document.getElementById('seven');
let eight = document.getElementById('eight');
let nine = document.getElementById('nine');
let ten = document.getElementById('ten');
let pagination2 = document.getElementById('pagination2');
let two1 = document.getElementById('two1');
let two2 = document.getElementById('two2');
let two3 = document.getElementById('two3');
let two4 = document.getElementById('two4');
let two5 = document.getElementById('two5');
let pagination3 = document.getElementById('pagination3');
let three1 = document.getElementById('three1');
let three2 = document.getElementById('three2');
let three3 = document.getElementById('three3');
let three4 = document.getElementById('three4');


let pageItems = 100;
let pageNumber = 1;
let currentPagePeople = [];


const getData = async () => {
    const promise = await fetch('../data/data.json');
    const data = await promise.json();
    return data.People;
}


// on load, it is sorted by Id
const onLoad = async () => {
    const people = await getData();

    const sortedPeople = people.sort((a, b) => a.id - b.id);
    // console.log(sortedPeople);

    currentPagePeople = sortedPeople;

    currentPagePeople.map(person => {
        addId(person);
        addFirst(person);
        addLast(person);
        addHeight(person);
        addAge(person);
    });
}

onLoad();

const clearTxt = () => {
    idTxt.textContent = '';
    firstNameTxt.textContent = '';
    lastNameTxt.textContent = '';
    heightTxt.textContent = '';
    ageTxt.textContent = '';
}

idBtn.addEventListener('click', async () => {
    const people = await getData();

    clearTxt();

    const idSorted = people.sort((a, b) => a.id - b.id);
    currentPagePeople = idSorted
    pageLists();

});

firstBtn.addEventListener('click', async () => {
    const people = await getData();

    clearTxt();

    const firstSorted = people.sort((a, b) => {
        const firstPerson = a.FirstName.toUpperCase();
        const secondPerson = b.FirstName.toUpperCase();
        // compares the string names of two people:
        if (firstPerson < secondPerson) {
            return -1;
        } else if (firstPerson > secondPerson) {
            return 1;
        } else {
            return 0; // Names are equal
        }
    });

    currentPagePeople = firstSorted

    // console.log(firstSorted);
    pageLists();
});


lastBtn.addEventListener('click', async () => {
    const people = await getData();

    clearTxt();

    const lastSorted = people.sort((a, b) => {
        const firstPerson = a.LastName.toUpperCase();
        const secondPerson = b.LastName.toUpperCase();
        // compares the string names of two people:
        if (firstPerson < secondPerson) {
            return -1;
        } else if (firstPerson > secondPerson) {
            return 1;
        } else {
            return 0; // Names are equal
        }
    });

    currentPagePeople = lastSorted;

    pageLists();
});

ageBtn.addEventListener('click', async () => {
    const people = await getData();
    clearTxt();

    const ageSorted = people.sort((a, b) => a.Age - b.Age);
    currentPagePeople = ageSorted;
    pageLists();
});

heightBtn.addEventListener('click', async () => {
    const people = await getData();
    clearTxt();

    const heightSorted = people.sort((a, b) => parseInt(a.Height) - parseInt(b.Height));
    // console.log(heightSorted);
    currentPagePeople = heightSorted

    pageLists();
});

const pageLists = async () => {
    const starting = (pageNumber - 1) * pageItems;
    const ending = starting + pageItems;
    // ie: page 2 : 1 * 10;
    // ends at : 10 + 10 = 20 items shown 

    clearTxt();

    const currentPage = currentPagePeople.slice(starting, ending);
    // console.log(currentPagePeople)
    currentPage.map(person => {
        addId(person);
        addFirst(person);
        addLast(person);
        addHeight(person);
        addAge(person);
    });
}

tenBtn.addEventListener('click', () => {
    pageNumber = 1;
    pageItems = 10;
    pageLists();

    pages.classList.remove('hidden');
    one.classList.remove('hidden');
    two.classList.remove('hidden');
    three.classList.remove('hidden');
    four.classList.remove('hidden');
    five.classList.remove('hidden');
    six.classList.remove('hidden');
    seven.classList.remove('hidden');
    eight.classList.remove('hidden');
    nine.classList.remove('hidden');
    ten.classList.remove('hidden');
    pagination2.classList.add('hidden');
    pagination3.classList.add('hidden');

    one.addEventListener('click', ()=> {
        pageNumber = 1;
        pageLists();
    });

    two.addEventListener('click', ()=>{
        pageNumber = 2;
        pageLists();
    });

    three.addEventListener('click', ()=>{
        pageNumber = 3;
        pageLists();
    });

    four.addEventListener('click', ()=>{
        pageNumber = 4;
        pageLists();
    });

    five.addEventListener('click', ()=>{
        pageNumber = 5;
        pageLists();
    });

    six.addEventListener('click', ()=>{
        pageNumber = 6;
        pageLists();
    });

    seven.addEventListener('click', ()=>{
        pageNumber = 7;
        pageLists();
    });

    eight.addEventListener('click', ()=>{
        pageNumber = 8;
        pageLists();
    });

    nine.addEventListener('click', ()=>{
        pageNumber = 9;
        pageLists();
    });

    ten.addEventListener('click', ()=>{
        pageNumber = 10;
        pageLists();
    });

});

twentyBtn.addEventListener('click', () => {
    pageNumber = 1;
    pageItems = 20;
    pageLists();

    pagination2.classList.remove('hidden');
    two1.classList.remove('hidden');
    two2.classList.remove('hidden');
    two3.classList.remove('hidden');
    two4.classList.remove('hidden');
    two5.classList.remove('hidden');
    
    pages.classList.add('hidden');
    pagination3.classList.add('hidden');

    two1.addEventListener('click', ()=> {
        pageNumber = 1;
        pageLists();
    });

    two2.addEventListener('click', ()=>{
        pageNumber = 2;
        pageLists();
    });

    two3.addEventListener('click', ()=>{
        pageNumber = 3;
        pageLists();
    });

    two4.addEventListener('click', ()=>{
        pageNumber = 4;
        pageLists();
    });

    two5.addEventListener('click', ()=>{
        pageNumber = 5;
        pageLists();
    });
});

thirtyBtn.addEventListener('click', () => {
    pageNumber = 1;
    pageItems = 30;
    pageLists();

    pages.classList.add('hidden');
    pagination2.classList.add('hidden');
    pagination3.classList.remove('hidden');
    three1.classList.remove('hidden');
    three2.classList.remove('hidden');
    three3.classList.remove('hidden');
    three4.classList.remove('hidden');

    three1.addEventListener('click', ()=> {
        pageNumber = 1;
        pageLists();
    });

    three2.addEventListener('click', ()=>{
        pageNumber = 2;
        pageLists();
    });

    three3.addEventListener('click', ()=>{
        pageNumber = 3;
        pageLists();
    });

    three4.addEventListener('click', ()=>{
        pageNumber = 4;
        pageLists();
    });
});