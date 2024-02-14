const addId = (person) => {
    let p = document.createElement('p');
    p.className = 'font-quick-med text-3xl my-3 mx-3';
    p.textContent = person.Id;
    idTxt.append(p);
}

const addFirst = (person) => {
    let p = document.createElement('p');
    p.className = 'font-quick-med text-3xl my-3 mx-3';
    p.textContent = person.FirstName;
    firstNameTxt.append(p);
}

const addLast = (person) => {
    let p = document.createElement('p');
    p.className = 'font-quick-med text-3xl my-3 mx-3';
    p.textContent = person.LastName;
    lastNameTxt.append(p);
}

const addHeight = (person) => {
    let p = document.createElement('p');
    p.className = 'font-quick-med text-3xl my-3 mx-3';
    p.textContent = person.Height;
    heightTxt.append(p);
}

const addAge = (person) => {
    let p = document.createElement('p');
    p.className = 'font-quick-med text-3xl my-3 mx-3';
    p.textContent = person.Age;
    ageTxt.append(p);
}

export {addId, addFirst, addLast, addHeight, addAge}