//const fetch = require('node-fetch');

console.log('This is working.');

const getBibleVerse = async () => {
    let chaptersLengths = "";
    let finalVerseJson = "";
    
    //1. Have the list of Tanach books
    const tanach = ['Genesis', 'Exodus', 'Leviticus', 'Numbers', 'Deuteronomy', 'Joshua', 'Judges', ' I Samuel', 'II Samuel', 'I Kings', 'II Kings', 'Isaiah', 'Jeremiah', 'Ezekiel', 'Hosea', 'Joel', 'Amos', 'Obadiah', 'Jonah', 'Micah', 'Nahum', 'Habakkuk', 'Zephaniah', 'Haggai', 'Zechariah', 'Malachi', 'Psalms', 'Proverbs', 'Job', 'Song of Songs', 'Ruth', 'Lamentations', 'Ecclesiastes', 'Esther', 'Daniel', 'Ezra',  'Nehemiah', 'I Chronicles', 'II Chronicles'];
    //2. Get a book randomly
    const book = tanach[Math.floor(Math.random() * tanach.length)];
    
    //3. From the book, get the number of chapters of the book
    const chapters = await fetch(`https://www.sefaria.org/api/texts/${book}`);
    if (chapters.ok) {
        const chaptersJson = await chapters.json();
        //Get number of chapters of book
        chaptersLengths = chaptersJson.length;
    }

    //Get the random values of chapter
    const randomChapter = Math.floor(Math.random() * chaptersLengths) + 1;
    

    //Concatenate the result
    const finalVerseResponse = await fetch(`https://www.sefaria.org/api/texts/${book}.${randomChapter}`);
    if (finalVerseResponse.ok) {
        finalVerseJson = await finalVerseResponse.json();
        //Get number of verses from chapter using the length of the text array
        const versesLengths = finalVerseJson.text.length;
        const randomVerse = Math.floor(Math.random() * versesLengths);
        console.log(`Result:\nBook: ${book}, Chapter: ${randomChapter}, Verse: ${randomVerse}`);
        return finalVerseJson.text[randomVerse];

    }
    
    return false;
    
}
export {getBibleVerse};