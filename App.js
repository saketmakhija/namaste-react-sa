import React from "react"
import ReactDOM from "react-dom/client"

const heading = React.createElement("div",
{id: "parent"},
React.createElement("div",
{id: "child"},
React.createElement("h1",{},"Hello world from saket")));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);