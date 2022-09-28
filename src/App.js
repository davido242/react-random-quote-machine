import React from "react";

const quoteData = [
  { text: "Hi Daveed, its been a while, you aiit?", author: "Joycee Rice" },
  { text: "Belief creates the actual fact.", author: "William James" },
  {
    text: "It is during our darkest moments that we must focus to see the light.",
    author: "Aristotle",
  },
  {
    text: "Not having the best situation, but seeing the best in your situation is the key to happiness.",
    author: "Marie Forleo",
  },
  {
    text: "I am experienced enough to do this. I am knowledgeable enough to do this. I am prepared enough to do this. I am mature enough to do this. I am brave enough to do this.",
    author: "Alexandria Ocasio-Cortez",
  },
];

const QuoteBox = ({ quote, handleNewQuote }) => (
  <div id="quote-box">
    <p id="text">{quote.text}</p>
    <h2 id="author">{"Aurthor: " + quote.author}</h2>
    <div className="actions">
      <button id="new-quote" className="button" onClick={handleNewQuote}>
        New Quote
      </button>
      <a
        href="https://twitter.com/intent/tweet"
        id="tweet-quote"
        target="_blank"
      >
        Tweet
      </a>
    </div>
  </div>
);


const Task = () => {
    const getRandomIndex = () =>
      Math.round(Math.random() * (quoteData.length - 1 - 0) + 0);
  const [quote, setQuote] = React.useState(quoteData[getRandomIndex()]);
  const handleNewQuote = () => {
    setQuote(quoteData[getRandomIndex()]);
  };
  return (
    <div className="main">
      <QuoteBox quote={quote} handleNewQuote={handleNewQuote} />
    </div>
  );
};
export default Task;