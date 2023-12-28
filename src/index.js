import React from "react";
import ReactDOM from "react-dom";
import Prompt from "./lib/Prompt";

const short_content = "hello world"
const long_content = "hello world 'react-prompt-viewer'"
const multi_line_content = "hello world \nmulti line\nsample content"

ReactDOM.render(
    <div>
        <Prompt content={short_content} title={"prompt"} width="200px" />
        <Prompt content={long_content} width="200px" animation='right-show' />
        <Prompt content={multi_line_content} width="200px" animation='right-show' speed={15}/>
        <Prompt content={multi_line_content} width="200px" title={"prompt"} theme={"white"} align={"center"} animation='right-show' speed={15}/>
    </div>,
    document.getElementById("root"));
