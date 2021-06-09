const fetch = require('node-fetch');

const getData = async () => {
    //1. Have the list of Tanach books
    const tanach = ['Genesis', 'Exodus', 'Leviticus', 'Numbers', 'Deuteronomy', 'Joshua', 'Judges', ' I Samuel', 'II Samuel', 'I Kings', 'II Kings', 'Isaiah', 'Jeremiah', 'Ezekiel', 'Hosea', 'Joel', 'Amos', 'Obadiah', 'Jonah', 'Micah', 'Nahum', 'Habakkuk', 'Zephaniah', 'Haggai', 'Zechariah', 'Malachi', 'Psalms', 'Proverbs', 'Job', 'Song of Songs', 'Ruth', 'Lamentations', 'Ecclesiastes', 'Esther', 'Daniel', 'Ezra',  'Nehemiah', 'I Chronicles', 'II Chronicles'];
    //2. Get a book randomly
    const book = tanach[Math.floor(Math.random() * 25)];
    console.log(book);
    //3. From the book, get the number of chapters of the book
    const chapters = await fetch(`https://www.sefaria.org/api/texts/${book}`);
    const chaptersJson = await chapters.json();
    const chaptersLengths = chaptersJson.lengths[0];
    //4. Once number of chapters are found, get one randomly
    const randomChapter = Math.floor(Math.random() * chaptersLengths);
    //5. Once chapter is chosen, get number of verses for the chapter
    const verses = await fetch(`https://www.sefaria.org/api/texts/${book}.${randomChapter}`);
    console.log(verses);

    
}

getData();