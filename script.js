/*const fetch = require('node-fetch');*/
/*const {getBibleVerse} = require('./sefaria.js');*/
import {getBibleVerse} from './sefaria.js';
const getQuote = async () => {
    let inspiringQuote = "";
    let bibleQuote = "";
    let asciiArt = "";
    const response = await fetch("/quote");
    if (response.ok) {
        const jsonResponse = await response.json();
         inspiringQuote  = jsonResponse[0].q;
    }
    
    bibleQuote = await getBibleVerse();

    const plusQuote = bibleQuote.split(" ").join("+");
    
    const asciiResponse = await fetch('/ascii', {method: "POST", headers: {'Content-Type': 'application/json'}, body: JSON.stringify({text: plusQuote})});
    if (asciiResponse.ok) {
        const jsonAscii = await asciiResponse.text();
        asciiArt = jsonAscii;
    }

    return [`${inspiringQuote} ${bibleQuote}`, asciiArt];
}

const makeQuote = async () => {
    const messageDiv = document.getElementById('messageDiv');
    const p = document.createElement('p');
    p.setAttribute('id', 'maintext');
    const text = await getQuote();
    p.innerHTML = text[0];
    messageDiv.appendChild(p);
    const pre = document.createElement("pre");
    pre.setAttribute('id', 'ascii');
    const asciiArt = text[1];
    pre.innerHTML = asciiArt;
    messageDiv.appendChild(pre);
}
makeQuote();