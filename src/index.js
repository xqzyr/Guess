import React from "react";
import ReactDOM from "react-dom";
import './index.css'
import Top from "./components/Top";
import Middle from "./components/Middle";
import Bottom from "./components/Bottom";

var number = Math.floor(Math.random() * 10);
console.log(number);

ReactDOM.render(
  <>
    <Top />
    <Middle number={number}/>
    <Bottom />
  </>,
  document.getElementById('root')
);
