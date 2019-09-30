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
  }
  componentDidMount() {
    this.getQuote();
  }
  async getQuote() {
    try {
      let res = await axios.get(
        "https://programming-quotes-api.herokuapp.com/quotes/random"
      );
      console.log(res.data);
      let quoteText = res.data.en;
      let quoteAuthor = res.data.author;
      this.setState({
        quoteText,
        quoteAuthor
      });
    } catch (e) {
      alert(e);
    }
  }
  render() {
    const { quoteText, quoteAuthor } = this.state;
    return (
      <div className="QuoteMachine">
        <div className="Quote-tile">
          <Quote quoteText={quoteText} quoteAuthor={quoteAuthor} />
          <div className="Quote-btns">
            <button className="tweet-btn" id="tweet-quote">
              Tweet Quote
            </button>
            <button className="new-btn" id="new-quote">
              New Quote
            </button>
          </div>
        </div>
      </div>
    );
  }
}
