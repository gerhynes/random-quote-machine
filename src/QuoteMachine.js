import React, { Component } from "react";
import Quote from "./Quote";
import axios from "axios";
import "./QuoteMachine.css";

export default class QuoteMachine extends Component {
  static defaultProps = {
    baseURL: "https://twitter.com/intent/tweet?hashtags=DevQuotes&text="
  };
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      quote: { quotetext: "", quoteAuthor: "" }
    };
    this.getNewQuote = this.getNewQuote.bind(this);
    this.tweetQuote = this.tweetQuote.bind(this);
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
      this.setState({
        loading: false,
        quoteText,
        quoteAuthor
      });
    } catch (e) {
      alert(e);
    }
  }
  getNewQuote() {
    this.setState({ loading: true }, this.getQuote);
  }
  tweetQuote() {
    const { quoteText, quoteAuthor } = this.state;
    const tweetURL = `${this.props.baseURL}${encodeURIComponent(
      `"${quoteText}"`
    )} - ${quoteAuthor}`;
    window.open(tweetURL);
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
          <div className="Quote-tile">
            <Quote quoteText={quoteText} quoteAuthor={quoteAuthor} />
            <div className="Quote-btns">
              <button
                className="tweet-btn"
                id="tweet-quote"
                onClick={this.tweetQuote}
              >
                Tweet Quote
              </button>
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
