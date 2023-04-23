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

  return (
    <div className="quote-container">
      <h1>Quote Generator</h1>

      <div className="quote-box">
        <div className="quote-text"></div>
        <div className="quote-author"></div>
      </div>

      <div className="quote-buttons">
        <button className="quote-button">New Quote</button>
        <button className="quote-button">Tweet Quote</button>
      </div>
    </div>
  );
}

export default Quote;
