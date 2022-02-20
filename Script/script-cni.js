
// INSERT THIS TO IMPORT FUNCTION
// const simulateCallToserver = require('./script-cni.js')


// Standard response with 
// Fields: FOUND, NOM, PRENOM, POSTEIDENTIFICATION
let responses =  [{
    found: true,
    nom: "YANG MBARGA",
    prenom:"CISSE FONGANG",
    posteIdentification:"CE-Yaounde Centre Ville"
},
{
    found: true,
    nom: "YEPDIEU Epouse TCHAGOUA",
    prenom:"JEANNE",
    posteIdentification:"CE-Yaounde Mendong"
},
{
    found: false,
    nom: "",
    prenom:"",
    posteIdentification:""
},]

async function simulateCallToServer(ms) {
    const randPos = Math.floor(Math.random() * 3);
    await new Promise(resolve => setTimeout(resolve, ms));; // Wait X milliseconds before providing the response
    return responses[randPos];
}

// Call to the fake response with delay
simulateCallToServer(5000).then(e => console.log(e));

module.exports = simulateCallToServer;