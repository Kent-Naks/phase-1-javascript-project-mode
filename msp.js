// msp.js
let data = [
    {"name": "Wil'liam A'yim", "age": 1994, "gender": "male", "image": "https://media.licdn.com/dms/image/D4D03AQHVtcjdKhpQEQ/profile-displayphoto-shrink_200_200/0/1710531716079?e=2147483647&v=beta&t=_7xiOyawd8kBdhYosVRIq5Brp9d7xx05w6QPUIoyRiY", "finderName": "Bruce Wayne", "contact": "batman@gmail.com"},
    {"name": "Melchior Balthazar", "age": 1993, "gender": "male", "image": "images/melchior_balthazar.jpg", "finderName": "The Winchesters", "contact": "SamandDean@gmail.com"},
    {"name": "Peter Rono", "age": 1991, "gender": "male", "image": "https://media.licdn.com/dms/image/D4D35AQHxc3DIlcD23g/profile-framedphoto-shrink_400_400/0/1716002641937?e=1721934000&v=beta&t=QnHo8nsoflTn71bj_4GZrnj3Hhls0D6khPU3c5IVFRU", "finderName": "Charmed", "contact": "PiperPheobeandPrue@gmail.com"},
    {"name": "Quincy Mwa'ngi", "age": 1997, "gender": "male", "image": "images/quincy_mwangi.jpg", "finderName": "Will Smith", "contact": "IamLegend@gmail.com"},
    {"name": "Jon-athan Mu-tinda", "age": 1996, "gender": "male", "image": "images/jonathan_mutinda.jpg", "finderName": "Club Kiboko", "contact": "KTN@gmail.com"},
    {"name": "Kenedy Musyoki", "age": 1995, "gender": "male", "image": "https://media.licdn.com/dms/image/D4D35AQGARXwkXFPKWg/profile-framedphoto-shrink_400_400/0/1712640690484?e=1721934000&v=beta&t=v9H_SZDw5XjwiHupBQXJLwDPTEnpUNUagLzSgUhRINw", "finderName": "Black Atom", "contact": "DC@gmail.com"},
    {"name": "Rickfalton Odhiambo", "age": 1998, "gender": "male", "image": "images/rickfalton_odhiambo.jpg", "finderName": "Eve Gray", "contact": "eve.gray@gmail.com"},
    {"name": "Stephen Chiuri", "age": 1997, "gender": "female", "image": "images/stephen_chiuri.jpg", "finderName": "Frank Yellow", "contact": "frank.yellow@gmail.com"},
    {"name": "Ann-glorious (Mueni)", "age": 1999, "gender": "female", "image": "images/ann_glorious.jpg", "finderName": "Grace Orange", "contact": "grace.orange@gmail.com"},
    {"name": "Anthonia Akaro", "age": 1997, "gender": "female", "image": "https://www.instagram.com/antoniajacob1839/p/Cvm2phzIm1z/", "finderName": "Harry Purple", "contact": "harry.purple@gmail.com"},
    {"name": "BRENDAN G'wer", "age": 1996, "gender": "male", "image": "images/brendan_gwer.jpg", "finderName": "Mr. White", "contact": "Mr.White@gmail.com"},
    {"name": "Collins Isavwa", "age": 1997, "gender": "male", "image": "images/collins_isavwa.jpg", "finderName": "Dr. White", "contact": "Dr.White@gmail.com"},
    {"name": "Degrace Benga", "age": 2000, "gender": "female", "image": "images/degrace_benga.jpg", "finderName": "Thor", "contact": "Thor@gmail.com"},
    {"name": "Desmond Maina", "age": 1996, "gender": "male", "image": "images/desmond_maina.jpg", "finderName": "Mr. White", "contact": "Mr.White@gmail.com"},
    {"name": "Erick KATANA", "age": 1997, "gender": "male", "image": "images/erick_katana.jpg", "finderName": "Marvel", "contact": "Captain@gmail.com"},
    {"name": "Farida Mutai", "age": 1996, "gender": "female", "image": "images/farida_mutai.jpg", "finderName": "Dr. Strange", "contact": "Magic@gmail.com"},
    {"name": "George Otieno1", "age": 1995, "gender": "male", "image": "images/george_otieno1.jpg", "finderName": "Black Widow", "contact": "Finegirl@gmail.com"},
    {"name": "HESBON LIMO", "age": 1997, "gender": "male", "image": "images/hesbon_limo.jpg", "finderName": "Spain", "contact": "water@gmail.com"},
    {"name": "Ian Cheruiyot1", "age": 1996, "gender": "male", "image": "images/ian_cheruiyot1.jpg", "finderName": "Thanos", "contact": "TheSnapp@gmail.com"},
    {"name": "Kent Eugine", "age": 1993, "gender": "male", "image": "images/kent_eugine.jpg", "finderName": "Loki of Asgard", "contact": "JustThatGuy@gmail.com"},
    {"name": "John Snow", "age": 1111, "gender": "male", "image": "images/john_snow.jpg", "finderName": "Precious", "contact": "LordOfTheRings@gmail.com"}
];

const cleanedString = s => s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

const matchRecords = (name, yearOfBirth, gender) => {
    const resultsDiv = document.getElementById('results');
    let matches = '';

    for (let i = 0; i < data.length; i++) {
        if (cleanedString(data[i].name) === cleanedString(name) &&
            data[i].age === parseInt(yearOfBirth) &&
            data[i].gender === gender) {
            matches += `
                <div class="result-item">
                    <img src="${data[i].image}" alt="${data[i].name}" style="width:100px;height:100px;">
                    <p>Match found: ${data[i].name}, Year of Birth: ${data[i].age}, Gender: ${data[i].gender}</p>
                    <p>Finder Name: ${data[i].finderName}</p>
                    <p>Contact: ${data[i].contact}</p>
                </div>`;
        }
    }

    if (matches === '') {
        matches = '<p>No matches found.</p>';
    }

    resultsDiv.innerHTML = matches;
};

document.getElementById('searchButton').addEventListener('click', () => {
    const name = document.getElementById('searchName').value;
    const yearOfBirth = document.getElementById('searchYearOfBirth').value;
    const gender = document.getElementById('searchGender').value;

    matchRecords(name, yearOfBirth, gender);
});

document.getElementById('addPersonForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const yearOfBirth = document.getElementById('yearOfBirth').value;
    const gender = document.getElementById('gender').value;
    const finderName = document.getElementById('finderName').value;
    const contact = document.getElementById('contact').value;

    // Assume that the user will input the image URL here
    const image = prompt('Please enter the image URL for the new person:');

    // Validate image URL
    if (!image) {
        alert('Image URL is required.');
        return;
    }

    const newPerson = { name, age: parseInt(yearOfBirth), gender, finderName, contact, image };
    data.push(newPerson);

    alert('Person added successfully!');
    document.getElementById('addPersonForm').reset();
});
