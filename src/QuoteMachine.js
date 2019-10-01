import React, { Component } from "react";
import Quote from "./Quote";
import axios from "axios";
import "./QuoteMachine.css";

export default class QuoteMachine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      quote: { quotetext: "", quoteAuthor: "" }
    };
    this.getNewQuote = this.getNewQuote.bind(this);
  }
  componentDidMount() {
    // Prevent empty quote from rendering
    this.setState({ loading: true });
    this.getQuote();
  }
  async getQuote() {
    try {
      let res = await axios.get(
        "https://programming-quotes-api.herokuapp.com/quotes/random"
      );
      let quoteText = res.data.en;
      let quoteAuthor = res.data.author;
      setTimeout(() => {
        this.setState({
          loading: false,
          quoteText,
          quoteAuthor
        });
      }, 700);
    } catch (e) {
      alert(e);
    }
  }
  getNewQuote() {
    this.setState({ loading: true }, this.getQuote);
  }
  render() {
    const { quoteText, quoteAuthor } = this.state;
    if (this.state.loading) {
      return (
        <div className="Loader">
          <h1>Loading....</h1>
        </div>
      );
    } else {
      return (
        <div className="QuoteMachine">
          <div className="Quote-tile" id="quote-box">
            <Quote quoteText={quoteText} quoteAuthor={quoteAuthor} />
            <div className="Quote-btns">
              <a
                href={`https://twitter.com/intent/tweet?hashtags=DevQuotes&related=freecodecamp&text=${encodeURIComponent(
                  `"${quoteText}"`
                )} - ${quoteAuthor}`}
                className="tweet-btn"
                id="tweet-quote"
              >
                Tweet Quote
              </a>
              <button
                className="new-btn"
                id="new-quote"
                onClick={this.getNewQuote}
              >
                New Quote
              </button>
            </div>
          </div>
        </div>
      );
    }
  }
}
