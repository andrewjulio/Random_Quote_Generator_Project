/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/
const quotes = [
  {
    quote: "‘My uncle, what a worthy man…’",
    source: "Alexander Pushkin (1799-1837)",
    citation: "Eugene Onegin",
    year: 1833
  },
  {
    quote: "‘The Poet's soul did not bear // The shameful hurts of low breed,’",
    source: "Mikhail Lermontov (1814-1841)",
    citation: "Death Of the Poet",
    year: 1837
  },
  {
    quote: "‘I do not want to study, I want to marry!’",
    source: "Denis Fonvizin (1744-1792)",
    citation: "The Minor",
    year: 1782
  },
  {
    quote: "‘Manuscripts don’t burn!’",
    source: "Mikhail Bulgakov (1891-1940)",
    citation: "The Master and Margarita",
    year: 1967
  },
  {
    quote: "'Whether I am a trembling creature or whether I have the right?'",
    source: "Fyodor Dostoevsky (1821–1881)",
    citation: "Crime and Punishment",
    year: 1866
  },
  {
    quote: "‘There is yet powder in the powder-flasks!’",
    source: "Nikolay Gogol (1809-1852)",
    citation: "Taras Bulba",
    year: 1835
  },
  {
    quote: "'Time for business, an hour for fun'",
    source: "Tsar Alexis of Russia (1629—1676)",
    citation: "",
    year: ""
  }
];


/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/
function getRandomQuote() {
    let randomNumber = Math.floor(Math.random() * quotes.length);
    return(quotes[randomNumber]);
};


/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote variable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/
const quote = getRandomQuote();
console.log(quote.citation);

function printQuote(quote) {
    let htmlString = "";
    htmlString += "<p class='quote'>" + quote.quote + "</p><br>";
    htmlString += "<p class='source'>" + quote.source;

    if(quote.citation != "") {
      htmlString += "<span class='citation'>" + quote.citation;
      if (quote.year != "") {
        htmlString += "</span><span class = 'year'>" + quote.year + "</span>";
      };
    };
    htmlString += "</p>";
    return htmlString;
};
console.log(printQuote(quote));


/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.