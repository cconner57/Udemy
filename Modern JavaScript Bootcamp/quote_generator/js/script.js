// Random Quote Generator
const quotes = [
  { quote: 'Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.',
    author: "Patrick McKenzie",
    citation: "Twitter",
    year: "2016"
  },
  { quote: "I have always believed that each man makes his own happiness and is responsible for his own problems. It is a simple philosophy.",
    author: "Ray Kroc"
  },
  { quote: "When we have respect for ourselves and others, we gravitate towards connections that encourage that.",
    author: "Simeon Lindstrom"
  },
  { quote: "Anger is the ultimate destroyer of your own peace of mind.",
    author: "Dalai Lama"
  },
  { quote: "Don't be afraid. Be focused. Be determined. Be hopeful. Be empowered.",
    author: "Michelle Obama"
  }
]

const backgroundColor = [
  "#10f2eb",
  "#b6c917",
  "#94C5E8",
  "#FF3DA4",
  "#72C9A9",
  "#F25D30",
  "#48eb34",
  "#FF0C10",
  "#514fbd",
  "#59D689"
]

const getRandomQuote = () => {
const randomNumber = Math.floor(Math.random() * quotes.length);
document.body.style.backgroundColor = backgroundColor[Math.floor(Math.random()*backgroundColor.length)];
return quotes[randomNumber];
}

const printQuote = () => {
const randomQuote = getRandomQuote();

let message = `
                <p class="quote"> ${randomQuote.quote} </p>
                <p class="source"> ${randomQuote.author}`;
randomQuote.citation ? message += `<span class="citation"> ${randomQuote.citation}</span>` : message += '';
randomQuote.year ? message += `<span class="year"> ${randomQuote.year}</span>` : message += '';
message += `</p>`

document.querySelector('#quote-box').innerHTML = message;
}

document.querySelector('#load-quote').addEventListener("click", printQuote);
printQuote();
setInterval(printQuote, 20000);