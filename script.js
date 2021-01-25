const quote = document.querySelector("#quote");
const author = document.querySelector("#author");
const url =
  "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";
const fetchQuotes = async () => {
  const data = fetch(url);
  const { quotes } = await (await data).json();
  //console.log(await quotes);
  return await quotes;
};

fetchQuotes().then((data) => {
  const randQuote = data[Math.floor(Math.random() * data.length)];
  quote.innerHTML = `<q>${randQuote.quote}</q>`;
  author.innerHTML = randQuote.author;
});
