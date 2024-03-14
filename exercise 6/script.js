

//const listItem = document.createElement('li')
//listItem.textContent = 'A list item'
//list.style.cssText = 'color: red'

//list.appendChild(listItem)
const wizzards = [];

const harry = {
    name: 'Harry Potter',
    hair: 'black',
};
const hermoine = {
    name: 'Hermoine Granger',
    hair: 'brown',
};
const ron = {
    name: 'Ron Weasley',
    hair: 'red',
};

wizzards.push(harry, ron, hermoine);

const wizzardsList = document.getElementById('listi');

wizzards.forEach((wizard) => {
    const listItem = document.createElement('li');
    listItem.textContent = wizard.name;

    if (wizard.hair === 'black') {
        listItem.style.color = 'black';
    } else if (wizard.hair === 'brown') {
        listItem.style.color = 'brown';
    } else if (wizard.hair === 'red') {
        listItem.style.color = 'red';
    }


    wizzardsList.appendChild(listItem);
});





