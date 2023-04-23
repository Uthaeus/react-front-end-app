import { useState, useEffect } from "react";

function Quote() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((response) => response.json())
      .then((data) => {
        setQuotes(data);
        setQuote(data[0].text);
        setAuthor(data[0].author);
      })
      .catch((error) => {
        console.log("useEffect quote generator", error);
      });
  }, []);

    const getQuoteHandler = () => {
        const randomNum = Math.floor(Math.random() * quotes.length);
        setQuote(quotes[randomNum].text);
        setAuthor(quotes[randomNum].author);
    };

    const sendTweetHandler = () => {
        window.open(`https://twitter.com/intent/tweet?text=${quote} - ${author}`);
    };

  return (
    <div className="quote-container">
      <h1 className="w-50 text-left border-bottom">Quote Generator</h1>

      <div className="quote-box">
        <div className="w-100 row">
            <div className="quote-text col-sm-8">{quote}</div>
            <div className="quote-author col-sm-3">-{author}</div>
        </div>
      </div>

      <div className="quote-buttons">
        <button className="quote-button" onClick={getQuoteHandler}>New Quote</button>
        <button className="quote-button tweet" onClick={sendTweetHandler}><i className="bi bi-twitter"></i></button>
      </div>
    </div>
  );
}

export default Quote;
