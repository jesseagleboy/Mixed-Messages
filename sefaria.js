const fetch = require('node-fetch');

const getData = async () => {
    //1. Have the list of Tanach books
    const tanach = ['Genesis', 'Exodus', 'Leviticus', 'Numbers', 'Deuteronomy', 'Joshua', 'Judges', ' I Samuel', 'II Samuel', 'I Kings', 'II Kings', 'Isaiah', 'Jeremiah', 'Ezekiel', 'Hosea', 'Joel', 'Amos', 'Obadiah', 'Jonah', 'Micah', 'Nahum', 'Habakkuk', 'Zephaniah', 'Haggai', 'Zechariah', 'Malachi', 'Psalms', 'Proverbs', 'Job', 'Song of Songs', 'Ruth', 'Lamentations', 'Ecclesiastes', 'Esther', 'Daniel', 'Ezra',  'Nehemiah', 'I Chronicles', 'II Chronicles'];
    //2. Get a book randomly
    const book = tanach[Math.floor(Math.random() * tanach.length)];
    console.log(book);
    
    //3. From the book, get the number of chapters of the book
    const chapters = await fetch(`https://www.sefaria.org/api/texts/${book}`);
    const chaptersJson = await chapters.json();
    //Get number of chapters of book
    const chaptersLengths = chaptersJson.length;
    //Get number of verses from chapter using the length of the text array
    const versesLengths = chaptersJson.text.length;

    //Get the random values of chapter and verse
    const randomChapter = Math.floor(Math.random() * chaptersLengths);
    const randomVerse = Math.floor(Math.random() * versesLengths);

    //Concatenate the result
    const finalVerseResponse = await fetch(`https://www.sefaria.org/api/texts/${book}.${randomChapter}`);
    const finalVerseJson = await finalVerseResponse.json();
    console.log(finalVerseJson.text[randomVerse]);

    
}

getData();