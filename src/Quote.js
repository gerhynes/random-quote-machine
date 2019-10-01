import React from "react";
import "./Quote.css";

export default function Quote(props) {
  return (
    <div className="Quote">
      <div className="Quote__text" id="text">
        {props.quoteText}
      </div>
      <div className="Quote__author" id="author">
        <span>- {props.quoteAuthor}</span>
      </div>
    </div>
  );
}
