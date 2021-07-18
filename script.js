//const fetch = require('node-fetch');
/*const {getBibleVerse} = require('./sefaria.js');*/
import {getBibleVerse} from './sefaria.js';
const getQuote = async () => {
    let inspiringQuote = "";
    let inspiringAuthor = "";
    let bibleQuote = "";
    let asciiArt = "";
    const response = await fetch('https://type.fit/api/quotes');
    if (response.ok) {
        const jsonResponse = await response.json();
        console.log(jsonResponse);
        const randomQuoteIndex = Math.floor(Math.random() * jsonResponse.length);
         inspiringQuote  = jsonResponse[randomQuoteIndex].text;
         inspiringAuthor = jsonResponse[randomQuoteIndex].author;
         console.log(inspiringAuthor);
    }
    
    bibleQuote = await getBibleVerse();

    console.log('This is the bibleVerse' + " " + bibleQuote[2]);

    const plusQuote = bibleQuote[2].split(" ").join(' ');
    console.log(plusQuote);
    
    const asciiResponse = await fetch('/asciiart', {method: 'POST', body: plusQuote, headers: {'Content-type': 'text/plain'} });
    if (asciiResponse.ok) {
        const jsonAscii = await asciiResponse.text();
        console.log(jsonAscii);
        asciiArt = jsonAscii;
    } else {
        asciiArt = 'Unavailable';
    }

    return [inspiringQuote, bibleQuote, asciiArt, inspiringAuthor];
}

const makeQuote = async () => {
    const messageDiv = document.getElementById('messageDiv');
    const p = document.createElement('p');
    p.setAttribute('id', 'maintext');
    const text = await getQuote();
    p.innerHTML = text[0] + " " + text[1][2];
    console.log(p.innerText);
    messageDiv.appendChild(p);
    const pre = document.createElement("pre");
    pre.setAttribute('id', 'ascii');
    const asciiArt = text[2];
    pre.innerHTML = asciiArt;
    messageDiv.appendChild(pre);


    //footer section
    const inspFooter = document.getElementById('inspirationsource');
    inspFooter.innerText = "Inspirational Author: " + text[3];
    const bibleFooter = document.getElementById('biblesource');
    bibleFooter.innerText = "Scripture Source: " + text[1][0] + " " + text[1][1]

}
makeQuote();
