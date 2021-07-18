//const fetch = require('node-fetch');
/*const {getBibleVerse} = require('./sefaria.js');*/
import {getBibleVerse} from './sefaria.js';
const getQuote = async () => {
    let inspiringQuote = "";
    let bibleQuote = "";
    let asciiArt = "";
    const response = await fetch('https://type.fit/api/quotes');
    if (response.ok) {
        const jsonResponse = await response.json();
        console.log(jsonResponse);
        const randomQuoteIndex = Math.floor(Math.random() * jsonResponse.length);
         inspiringQuote  = jsonResponse[randomQuoteIndex].text;
         console.log(inspiringQuote);
    }
    
    bibleQuote = await getBibleVerse();

    console.log('This is the bibleVerse' + " " + bibleQuote);

    const plusQuote = bibleQuote.split(" ").join(' ');
    console.log(plusQuote);
    const asciiResponse = await fetch('/asciiart', {method: 'POST', body: plusQuote, headers: {'Content-type': 'text/plain'} });
    if (asciiResponse.ok) {
        const jsonAscii = await asciiResponse.text();
        console.log(jsonAscii);
        asciiArt = jsonAscii;
    } else {
        asciiArt = 'Unavailable';
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
