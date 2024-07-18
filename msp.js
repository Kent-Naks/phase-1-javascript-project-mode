// msp.js
fetch ('msp.json')
const data = [
    {"name": "Wil'liam A'yim", "age": 30, "gender": "male"}, //Palindrom feature used here.
    {"name": "Melchior Balthazar", "age": 25, "gender": "male"},
    {"name": "Peter Rono", "age": 35, "gender": "male"},
    {"name": "Quincy Mwa'ngi", "age": 40, "gender": "male"},
    {"name": "Jon-athan Mu-tinda", "age": 35, "gender": "male"},
    {"name": "Kenedy Musyoki", "age": 25, "gender": "male"},
    {"name": "Rickfalton Odhiambo", "age": 30, "gender": "male"},
    {"name": "Stephen Chiuri", "age": 25, "gender": "female"},
    {"name": "Ann-glorious (Mueni)", "age": 35, "gender": "female"},
    {"name": "Anthonia Akaro", "age": 40, "gender": "female"},
    {"name": "BRENDAN G'wer", "age": 35, "gender": "male"},
    {"name": "Collins Isavwa", "age": 30, "gender": "male"},
    {"name": "Degrace Benga", "age": 16, "gender": "female"},
    {"name": "Desmond Maina", "age": 24, "gender": "male"},
    {"name": "Erick KATANA", "age": 27, "gender": "male"},
    {"name": "Farida Mutai", "age": 20, "gender": "female"},
    {"name": "George Otieno1", "age": 31, "gender": "male"},
    {"name": "HESBON LIMO", "age": 37, "gender": "male"},
    {"name": "Ian Cheruiyot1", "age": 19, "gender": "male"},
    {"name": "Kent Eugine", "age": 35, "gender": "male"},
    {"name": "John Smith", "age": 24, "gender": "male"}
];

//I've used aspects of polindrum to first recognise all non alphanumeric character then turn the letters into lower case.
const cleanedString = s => s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

const matchRecords = (newName, newAge, newGender) => {
    const resultsDiv = document.getElementById('results');
    let matches = '';

    for (let i = 0; i < data.length; i++) {
        if (cleanedString(data[i].name) === cleanedString(newName) &&
            data[i].age === parseInt(newAge) &&
            data[i].gender === newGender) {
            matches += `<p>Match found: ${data[i].name}, Age: ${data[i].age}, Gender: ${data[i].gender}</p>`;
        }
    }

    if (matches === '') {
        matches = '<p>No matches found.</p>';''
    }

    resultsDiv.innerHTML = matches;
};

document.getElementById('searchButton').addEventListener('click', () => {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;

    matchRecords(name, age, gender);
});


