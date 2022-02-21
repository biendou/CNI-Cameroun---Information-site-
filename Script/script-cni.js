
// INSERT THIS TO IMPORT FUNCTION
// const simulateCallToserver = require('./script-cni.js')


// Standard response with 
// Fields: FOUND, NOM, PRENOM, POSTEIDENTIFICATION


let responses = [{
    found: true,
    nom: "YANG MBARGA",
    prenom: "CISSE FONGANG",
    posteIdentification: "CE-Yaounde Centre Ville"
},
{
    found: true,
    nom: "YEPDIEU Epouse TCHAGOUA",
    prenom: "JEANNE",
    posteIdentification: "CE-Yaounde Mendong"
},
{
    found: false,
    nom: "",
    prenom: "",
    posteIdentification: ""
},]

function removeElementsByClass(className) {
    const elements = document.getElementsByClassName(className);
    while (elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
    }
}

function myLoader() {
    var x = document.getElementById("loader");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
async function simulateCallToServer(ms) {
    const randPos = Math.floor(Math.random() * 3);
    await new Promise(resolve => setTimeout(resolve, ms));; // Wait X milliseconds before providing the response
    return responses[randPos];
}

// Call to the fake response with delay
const form = document.getElementById('formulaire');

const resp = document.getElementById('response');

myLoader();

form.addEventListener('submit', (event) => {
    // handle the form data
    removeElementsByClass("reponse");
    myLoader();
    simulateCallToServer(5000).then(e => {

        let x = Object.values(e);
        const div = document.createElement("div");
        for (let i = 0; i < 4; i++) {

            const p = document.createElement("p");
            const textp = document.createTextNode(x[i]);
            p.appendChild(textp);
            div.append(p);

        }
        div.className = "reponse";
        resp.append(div);
        myLoader();
    });

});
simulateCallToServer(5000).then(e => console.log(e));

//module.exports = simulateCallToServer;