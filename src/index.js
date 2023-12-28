import React from "react";
import ReactDOM from "react-dom";
import Prompt from "./lib/Prompt";

const content = "hello world 'react-prompt-viewer'"

ReactDOM.render(<Prompt content={content} width="200px" animation='right-show' />, document.getElementById("root"));
