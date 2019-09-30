import React, { Component } from "react";
import Quote from "./Quote";
import "./QuoteMachine.css";

export default class QuoteMachine extends Component {
  render() {
    return (
      <div className="QuoteMachine">
        <div className="Quote-tile">
          <Quote />
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
