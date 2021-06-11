# Mixed-Messages

Codecademy project to create a mixed messages using three different quotes. 

# My sources:
1. Inspiration Quote: https://zenquotes.io/
2. Biblical Verse: sefaria.org
3. ASCII Representation: https://artii.herokuapp.com/

<p>The main script is script.js. Sefaria.js is a function to get a random Bible verse.</p>

getBibleVerse steps are as follows:
  1. Write down all 24 books of Tanach to prep for the Sefaria API.
  2. Return one book of the array randomly.
  3. Use that specific index (book), the Sefaria API will return the value of number of chapters in the book.
  4. Using the book value and the chapter value, have the API return data on that specific chapter.
  5. Return the value of number of verses in chapter based on length of text array.
  6. With book, chapter, and number of verses in a chapter, return final quote.
 
