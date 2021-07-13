//const fetch = require('node-fetch');
/*const {getBibleVerse} = require('./sefaria.js');*/
import {getBibleVerse} from './sefaria.js';
const getQuote = async () => {
    let inspiringQuote = "";
    let bibleQuote = "";
    let asciiArt = "";
    const response = await fetch('https://www.zenquotes.io/api/quotes');
    console.log(`This is the response: ${response}`);
    if (response.ok) {
        console.log(response);
        const jsonResponse = await response.json();
        console.log(jsonResponse);
         inspiringQuote  = jsonResponse[0].q;
    }
    
    bibleQuote = await getBibleVerse();

    const plusQuote = bibleQuote.split(" ").join("+");
    const test = 'Hello, World!';
    
    const asciiResponse = await fetch(`https://www.artii.herokuapp.com/make?text=${test}`);
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
