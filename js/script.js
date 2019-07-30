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
    year: 1833,
    russian: "'Мой дядя самых честных правил'",
    used: "To characterize somebody who thinks of himself as a moral standard for everyone.",
    popular: "The first lines of <i>Eugene Onegin</i>, a novel in verse by Pushkin, have been uttered  by Russians since the 19th century: “My uncle, what a worthy man, // Falling ill like that, and dying; // It summons respect, one can // Admire it, as if he were trying.” Considered “the ultimate Russian novel,” <i>Eugene Onegin</i> is full of other quotes now used in Russian everyday speech."
  },
  {
    quote: "‘The Poet's soul did not bear // The shameful hurts of low breed,’",
    source: "Mikhail Lermontov (1814-1841)",
    citation: "Death Of the Poet",
    year: 1837,
    russian: "'Не вынесла душа поэта // Позора мелочных обид'",
    used: "When a Russian is just fed up and has had enough.",
    popular: "Lermontov’s poem <i>Death of The Poet</i>, written after Pushkin’s demise, condemned his critics and enviers, stating that the “shameful hurts” provoked the poet to fight against worldly nonsense, and as a result, he is killed. This poem had been part of the school curriculum since early Soviet times, so every Russian knows it."
  },
  {
    quote: "‘I do not want to study, I want to marry!’",
    source: "Denis Fonvizin (1744-1792)",
    citation: "The Minor",
    year: 1782,
    russian: "'Не хочу учиться, а хочу жениться!'",
    used: "To mock somebody who either makes plans too hastily or doesn’t pay enough attention to preparation.",
    popular: "Fonvizin’s <i>The Minor</i> is a classic Russian play taught in schools about education and growing up. This quote is widely used by teachers to reprimand their pupils for laziness, so it’s massively known."
  },
  {
    quote: "‘Manuscripts don’t burn!’",
    source: "Mikhail Bulgakov (1891-1940)",
    citation: "The Master and Margarita",
    year: 1967,
    russian: "'Рукописи не горят!'",
    used: "To express the conviction that art is prevalent over time and power, and sometimes, to express an opinion that the truth shall prevail no matter what.",
    popular: "In Bulgakov’s <i>The Master and Margarita</i>, these words are spoken by Woland, Satan in the disguise of a professor. Woland demands the Master’s novel, but the Master says he’s burnt it in a stove. “Manuscripts don’t burn,” Woland replies and finds a copy of the novel on the Master’s table. One of the most-read novels in Russia, <i>The Master and Margarita</i> made this quote proverbial."
  },
  {
    quote: "'Whether I am a trembling creature or whether I have the right?'",
    source: "Fyodor Dostoevsky (1821–1881)",
    citation: "Crime and Punishment",
    year: 1866,
    russian: "When a person finally dares to do something they were frightened of or reluctant of doing for a long time.",
    used: "When a person finally dares to do something they were frightened of or reluctant of doing for a long time.",
    popular: "In <i>Crime and Punishment</i>, Rodion Raskolnikov speaks these words in an attempt to justify his murder of the old pawnbroker woman, who, according to Raskolnikov, is “a louse, a useless, loathsome, harmful creature” sucking money and life from her debtors."
  },
  {
    quote: "‘There is yet powder in the powder-flasks!’",
    source: "Nikolay Gogol (1809-1852)",
    citation: "Taras Bulba",
    year: 1835,
    russian: "'Тварь я дрожащая или право имею?'",
    used: "When a person finally dares to do something they were frightened of or reluctant of doing for a long time.",
    popular: "One of the most uplifting quotes, this one is also perceived as a proverb. But initially, these are the words of Taras Bulba, the old Cossack who asks his fellows if they’re ready to fight, and they answer: “There is yet powder in the flasks, father; the Cossack force is not weakened yet: the Cossacks yield not!” After this, a fierce battle ensues… This quote sure carries a combatant mood many Russians love to entertain."
  },
  {
    quote: "'Time for business, an hour for fun'",
    source: "Tsar Alexis of Russia (1629—1676)",
    citation: "",
    year: "",
    russian: "'Делу – время, потехе – час'",
    used: "The meaning of one of the most famous Russian sayings is similar to that of “All work and no play makes Jack a dull boy”: there must be time for fun as well as time for work. But this saying is often misinterpreted even by Russians (see below).",
    popular: "This is a quote from a falcon hunting manual written in the 17th century by Tsar Alexis of Russia. In 17th century Russian, “hour” meant both “an hour” and “time” in general. So Tsar Alexis was saying that there must be time for work and fun in a man’s life (advocating his passionate love for falcon hunting, apparently). In contemporary Russian, it seems that this quote says that there must be time for business, but only an hour for fun – this is an incorrect interpretation. The quote has become so popular since the 17th century that even most Russians think it’s a proverb!"
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

function printQuote() {
  let quote = getRandomQuote();
  let htmlString = "";

  htmlString += "<p class='quote'>" + quote.quote + "</p><br>";
  htmlString += "<p class='source'>" + quote.source;

  if(quote.citation != "") {
    htmlString += "<span class='citation'>" + quote.citation + "</span>";
    if (quote.year != "") {
      htmlString += "<span class = 'year'>" + quote.year + "</span>";
      if (quote.russian != "") {
        htmlString += "<br><br><br><br><br><br>";
        htmlString += "<span class = 'russian'><b>In Russian: " + quote.russian + "</b></span>";
        if (quote.used != "") {
          htmlString += "<br><br>";
          htmlString += "<span class = 'used'><b>When it is used?:</b><br>" + quote.used + "</span>";
          if (quote.popular != "") {
            htmlString += "<br><br>";
            htmlString += "<span class = 'popular'><b>Why so popular?:</b><br>" + quote.popular + "</span>";
          }
        }
      }
    }
  } else if (quote.year != "") {

      htmlString += "<span class = 'year'>" + quote.year + "</span>";
      if (quote.russian != "") {
        htmlString += "<br><br><br><br><br><br>";
        htmlString += "<span class = 'russian'><b>In Russian: " + quote.russian + "</b></span>";
        if (quote.used != "") {
          htmlString += "<br><br>";
          htmlString += "<span class = 'used'><b>When it is used?:</b><br>" + quote.used + "</span>";
          if (quote.popular != "") {
            htmlString += "<br><br>";
            htmlString += "<span class = 'popular'><b>Why so popular?:</b><br>" + quote.popular + "</span>";
            }
          }
        }
      } else if (quote.russian != "") {
        htmlString += "<br><br><br><br><br><br>";
        htmlString += "<span class = 'russian'><b>In Russian: " + quote.russian + "</b></span>";
        if (quote.used != "") {
          htmlString += "<br><br>";
          htmlString += "<span class = 'used'><b>When it is used?:</b><br>" + quote.used + "</span>";
          if (quote.popular != "") {
            htmlString += "<br><br>";
            htmlString += "<span class = 'popular'><b>Why so popular?:</b><br>" + quote.popular + "</span>";
          }
        }
      }
    
    htmlString += "</p>";
    document.getElementById('quote-box').innerHTML = htmlString;
};
printQuote();


/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.