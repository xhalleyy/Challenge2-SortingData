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

    sortedPeople.map(person => {
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

idBtn.addEventListener('click', async ()=> {
    const people = await getData();

    clearTxt();

    const idSorted = people.sort((a, b) => a.id - b.id);
    idSorted.map(person => {
        addId(person);
        addFirst(person);
        addLast(person);
        addHeight(person);
        addAge(person);
    });
});

firstBtn.addEventListener('click', async() => {
    const people = await getData();

    clearTxt();

    const firstSorted = people.sort((a, b) => {
        const firstPerson = a.FirstName.toUpperCase(); 
        const secondPerson = b.FirstName.toUpperCase();
        // compares the string names of two people:
        if (firstPerson < secondPerson) {
            return -1;
        }else if (firstPerson > secondPerson) {
            return 1;
        }else {
            return 0; // Names are equal
        }
    });

    // console.log(firstSorted);
    firstSorted.map(person => {
        addId(person);
        addFirst(person);
        addLast(person);
        addHeight(person);
        addAge(person);
    });
});


lastBtn.addEventListener('click', async() => {
    const people = await getData();

    clearTxt();

    const lastSorted = people.sort((a,b)=> {
        const firstPerson = a.LastName.toUpperCase(); 
        const secondPerson = b.LastName.toUpperCase();
        // compares the string names of two people:
        if (firstPerson < secondPerson) {
            return -1;
        }else if (firstPerson > secondPerson) {
            return 1;
        }else {
            return 0; // Names are equal
        }
    });

    lastSorted.map(person => {
        addId(person);
        addFirst(person);
        addLast(person);
        addHeight(person);
        addAge(person);
    });
});

ageBtn.addEventListener('click', async() => {
    const people =await getData();
    clearTxt();

    const ageSorted = people.sort((a,b) => a.Age - b.Age);
    ageSorted.map(person => {
        addId(person);
        addFirst(person);
        addLast(person);
        addHeight(person);
        addAge(person);
    });
});

heightBtn.addEventListener('click', async() => {
    const people = await getData();
    clearTxt();

    const heightSorted = people.sort((a,b) => parseInt(a.Height) - parseInt(b.Height));
    // console.log(heightSorted);

    heightSorted.map(person => {
        addId(person);
        addFirst(person);
        addLast(person);
        addHeight(person);
        addAge(person);
    })
});