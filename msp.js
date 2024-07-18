// msp.js
fetch ('msp.json')
const data = [
    {"name": "Wil'liam A'yim", "age": 1994, "gender": "male"}, //Palindrom feature used here.
    {"name": "Melchior Balthazar", "age": 1993, "gender": "male"},
    {"name": "Peter Rono", "age": 1997, "gender": "male"},
    {"name": "Quincy Mwa'ngi", "age": 1997, "gender": "male"},
    {"name": "Jon-athan Mu-tinda", "age": 1996, "gender": "male"},
    {"name": "Kenedy Musyoki", "age": 1995, "gender": "male"},
    {"name": "Rickfalton Odhiambo", "age": 1998, "gender": "male"},
    {"name": "Stephen Chiuri", "age": 1997, "gender": "female"},
    {"name": "Ann-glorious (Mueni)", "age": 1999, "gender": "female"},
    {"name": "Anthonia Akaro", "age": 1998, "gender": "female"},
    {"name": "BRENDAN G'wer", "age": 1996, "gender": "male"},
    {"name": "Collins Isavwa", "age": 1997, "gender": "male"},
    {"name": "Degrace Benga", "age": 2000, "gender": "female"},
    {"name": "Desmond Maina", "age": 1996, "gender": "male"},
    {"name": "Erick KATANA", "age": 1997, "gender": "male"},
    {"name": "Farida Mutai", "age": 1996, "gender": "female"},
    {"name": "George Otieno1", "age": 1995, "gender": "male"},
    {"name": "HESBON LIMO", "age": 1997, "gender": "male"},
    {"name": "Ian Cheruiyot1", "age": 1996, "gender": "male"},
    {"name": "Kent Eugine", "age": 1993, "gender": "male"},
    {"name": "John Snow", "age": 1111, "gender": "male"}
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
            matches += `<p>Match found: ${data[i].name}, year of birth: ${data[i].yearOfbirth}, Gender: ${data[i].gender}</p>`;
        }
    }

    if (matches === '') {
        matches = '<p>No matches found.</p>';''
    }

    resultsDiv.innerHTML = matches;
};

document.getElementById('searchButton').addEventListener('click', () => {
    const name = document.getElementById('name').value;
    const age = document.getElementById('year of birth').value;
    const gender = document.getElementById('gender').value;

    matchRecords(name, age, gender);
});



document.getElementById('finderForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const yearOfBirth = document.getElementById('yearOfBirth').value;
    const gender = document.getElementById('gender').value;
    const finderName = document.getElementById('finderName').value;
    const contact = document.getElementById('contact').value;

    // Here you can handle the submitted data, e.g., send it to a server, log it, etc.
    console.log({
        name,
        yearOfBirth,
        gender,
        finderName,
        contact
    });

    // Reset the form
    document.getElementById('finderForm').reset();
});

