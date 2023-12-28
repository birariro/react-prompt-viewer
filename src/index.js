import React from "react";
import ReactDOM from "react-dom";
import Prompt from "./lib/Prompt";

const content = "hello world"

ReactDOM.render(<Prompt content={content} width="200px" />, document.getElementById("root"));
