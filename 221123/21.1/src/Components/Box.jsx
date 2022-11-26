import "./Box.css";
import React, { Component } from "react";

export default class Box extends Component {
  constructor(props) {
    super(props);
    console.log("inside constructor");
    this.state = {
      time: true,
      class: "box",
    };
  }

  hide() {
    setTimeout(() => {
      this.setState(
        (prev) => ({ ...prev, time: false, class: "" }),
        () => {
          console.log(this.state);
        }
      );
    }, 4000);
  }

  componentDidMount() {
    console.log("inside mount");
    this.hide();
  }

  // componentDidUpdate(prevProp, prevState) {
  //   console.log("inside update");
  //   if (this.state.time !== false) {
  //     this.hide();
  //   }
  // }

  render() {
    console.log("inside render");
    return (
      <div>{this.state.time && <div className={this.state.class}></div>}</div>
    );
  }
}
