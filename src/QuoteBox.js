import React, { Component } from "react";
import "./QuoteBox.css";

export default class QuoteBox extends Component {
  render() {
    return (
      <div className="QuoteBox" id="quote-box">
        <blockquote className="QuoteBox__text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas cum
          debitis voluptatum voluptates accusantium quaerat iusto recusandae ea
          ducimus eligendi error, modi earum quia suscipit rem aspernatur. Unde,
          totam dolorem!
        </blockquote>
        <div className="QuoteBox__author" id="author">
          - Anonymous
        </div>
        <div className="QuoteBox__btns">
          <button className="QuoteBox__tweet-btn" id="tweet-quote">
            Tweet Quote
          </button>
          <button className="QuoteBox__new-btn" id="new-quote">
            New Quote
          </button>
        </div>
      </div>
    );
  }
}
