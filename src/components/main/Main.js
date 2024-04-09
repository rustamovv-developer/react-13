import React, { Component } from "react";
import Start from "../start/Start";
import Pc from "../pc/Pc";
import Work from "../work/Work";
import Brends from "../brends/Brends";
import Program from "../program/Program";

export default class Main extends Component {
  render() {
    return (
      <main className="main">
        <Start />
        <Pc />
        <Work />
        <Brends />
        <Program />
      </main>
    );
  }
}
