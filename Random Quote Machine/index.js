const quotes = [
    {
      quote:"The world is a book and those who do not travel read only one page.",
      author:"Saint Augustine"
    },
    {
      quote:"Take only memories, leave only footprints.",
      author:"Chief Seattle"
    },
    {
      quote:"The real voyage of discovery consists not in seeking new landscapes, but in having new eyes.",
      author:"Marcel Proust"
    },
    {
      quote:"Twenty years from now you will be more disappointed by the things you didn’t do than by the ones you did do",
      author:"Jackson Brown Jr."
    },
    {
      quote:"Never go on trips with anyone you do not love.",
      author:"Hemmingway"
    },
    {
      quote:"Like all great travellers, I have seen more than I remember and remember more than I have seen.",
      author:"Benjamin Disraeli"
    },
    {
      quote:"If you think adventure is dangerous, try routine, it’s lethal",
      author:"Paulo Coelho"
    },
    {
      quote:"Live with no excuses and travel with no regrets.",
      author:"Oscar Wilde"
    },
  ];
  
  const twitterButton = document.querySelector('#tweet-quote');
  const newQuoteButton = document.querySelector('#new-quote');
  newQuoteButton.addEventListener('click', getQuote);
  let quote = "";
  let author = "";
  
  function getQuote() {
    const index = Math.floor(Math.random() * (quotes.length))
    quote = '"'+quotes[index].quote+'"'
    author = "- "+quotes[index].author
    const quoteText = document.querySelector('#text');
    quoteText.textContent = quote;
    const quoteAuthor = document.querySelector('#author');
    quoteAuthor.textContent = author;
  }

  getQuote();
  
  $('#tweet-quote').attr(
    'href',
    'https://twitter.com/intent/tweet?hashtags=travelquotes&text=' +
      encodeURIComponent(quote + ' ' + author)
  );

  
  