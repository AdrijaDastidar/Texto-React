import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter text");

  const handle_change = (event) => {
    setText(event.target.value);
  };

  const handle_u_click = () => {
    setText(text.toUpperCase());
  };

  const handle_l_click = () => {
    setText(text.toLowerCase());
  };

  const handle_c_click = () => {
    setText("");
  };

  const handle_it_click = () => {
    setText(text.split("").reverse().join(""));
  };

  const handle_ic_click = () => {
    const invertCase = (str) => {
      return str
        .split("")
        .map((char) =>
          char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
        )
        .join("");
    };
    setText(invertCase(text));
  };

  const handle_cp_click = () => {
    const textBox = document.getElementById("textBox");
    if (textBox) {
      textBox.select();
      navigator.clipboard.writeText(textBox.value).then(
        () => {
          alert("Text copied to clipboard");
        },
        (err) => {
          alert("Failed to copy text");
        }
      );
    }
  };

  return (
    <>
      <div>
        <h1>{props.heading}</h1>
        <div className="mb-4">
          <label htmlFor="textBox" className="form-label">
            Enter your text below
          </label>
          <textarea
            className="form-control"
            id="textBox"
            value={text}
            onChange={handle_change}
            rows="3"
          ></textarea>
        </div>
        <button
          className="btn btn-primary mx-2"
          onClick={handle_u_click}
          type="button"
        >
          Convert to Upper Case
        </button>
        <button
          className="btn btn-primary mx-2"
          onClick={handle_l_click}
          type="button"
        >
          Convert to Lower Case
        </button>
        <button
          className="btn btn-primary mx-2"
          onClick={handle_it_click}
          type="button"
          style={{ marginTop: "10px" }}
        >
          Inverse Text
        </button>
        <button
          className="btn btn-primary mx-2"
          onClick={handle_ic_click}
          style={{ marginTop: "10px" }}
          type="button"
        >
          Inverse Case
        </button>
        <button
          className="btn btn-primary mx-2"
          onClick={handle_c_click}
          type="button"
          style={{ marginTop: "10px" }}
        >
          Clear Text
        </button>
        <button
          className="btn btn-primary mx-2"
          onClick={handle_cp_click}
          type="button"
          style={{ marginTop: "10px" }}
        >
          Copy Text
        </button>
      </div>
      <div className="mb-5"></div>
      <h2>Summary</h2>
      <li>No of Characters - {text.length}</li>
      <li>
        No of words -{" "}
        {text.split(/\s+/).filter((word) => word.length > 0).length}
      </li>
      <li>
        No of sentences -{" "}
        {
          text.split(/[.!?]/).filter((sentence) => sentence.trim().length > 0)
            .length
        }
      </li>
      <li>Time to read the paragraph - {text.length * 0.008} mins</li>
    </>
  );
}
