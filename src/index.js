import React, { Component } from "react";
import ReactDOM from "react-dom";
import calculate from "./logic/calcuator";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

class Rectangle1x1 extends Component {
  constructor(props) {
    super(props);

    this.clicked = this.clicked.bind(this);
  }

  clicked() {
    this.props.onKeyboradClicked(this.props.keyboradSymbol);
  }

  render() {
    return (
      <div
        className={
          "Rectangle1x1 background-" +
          this.props.backgroundColor +
          " font-" +
          this.props.fontColor
        }
        onClick={this.clicked}
      >
        <p> {this.props.keyboradSymbol} </p>
      </div>
    );
  }
}
class Display extends Component {
  render() {
    return (
      <div className="background-black font-white display">
        <p> {this.props.value} </p>
      </div>
    );
  }
}

class Keyboard extends Component {
  constructor(props) {
    super(props);

    this.handleKeyboradClicked = this.handleKeyboradClicked.bind(this);
  }

  handleKeyboradClicked(event) {
    this.props.onKeyboradClicked(event);
  }

  render() {
    return (
      <tbody>
        <tr>
          <td>
            <Rectangle1x1
              backgroundColor="peru"
              fontColor="white"
              keyboradSymbol="C"
              onKeyboradClicked={this.handleKeyboradClicked}
            />
          </td>
          <td>
            <Rectangle1x1
              backgroundColor="white"
              fontColor="black"
              keyboradSymbol="0"
              onKeyboradClicked={this.handleKeyboradClicked}
            />
          </td>
          <td>
            <Rectangle1x1
              backgroundColor="peru"
              fontColor="white"
              keyboradSymbol="*"
              onKeyboradClicked={this.handleKeyboradClicked}
            />
          </td>
          <td>
            <Rectangle1x1
              backgroundColor="peru"
              fontColor="white"
              keyboradSymbol="/"
              onKeyboradClicked={this.handleKeyboradClicked}
            />
          </td>
        </tr>
        <tr>
          <td>
            <Rectangle1x1
              backgroundColor="white"
              fontColor="black"
              keyboradSymbol="7"
              onKeyboradClicked={this.handleKeyboradClicked}
            />
          </td>
          <td>
            <Rectangle1x1
              backgroundColor="white"
              fontColor="black"
              keyboradSymbol="8"
              onKeyboradClicked={this.handleKeyboradClicked}
            />
          </td>
          <td>
            <Rectangle1x1
              backgroundColor="white"
              fontColor="black"
              keyboradSymbol="9"
              onKeyboradClicked={this.handleKeyboradClicked}
            />
          </td>
          <td>
            <Rectangle1x1
              backgroundColor="peru"
              fontColor="white"
              keyboradSymbol="-"
              onKeyboradClicked={this.handleKeyboradClicked}
            />
          </td>
        </tr>
        <tr>
          <td>
            <Rectangle1x1
              backgroundColor="white"
              fontColor="black"
              keyboradSymbol="4"
              onKeyboradClicked={this.handleKeyboradClicked}
            />
          </td>
          <td>
            <Rectangle1x1
              backgroundColor="white"
              fontColor="black"
              keyboradSymbol="5"
              onKeyboradClicked={this.handleKeyboradClicked}
            />
          </td>
          <td>
            <Rectangle1x1
              backgroundColor="white"
              fontColor="black"
              keyboradSymbol="6"
              onKeyboradClicked={this.handleKeyboradClicked}
            />
          </td>
          <td>
            <Rectangle1x1
              backgroundColor="peru"
              fontColor="white"
              keyboradSymbol="+"
              onKeyboradClicked={this.handleKeyboradClicked}
            />
          </td>
        </tr>
        <tr>
          <td>
            <Rectangle1x1
              backgroundColor="white"
              fontColor="black"
              keyboradSymbol="1"
              onKeyboradClicked={this.handleKeyboradClicked}
            />
          </td>
          <td>
            <Rectangle1x1
              backgroundColor="white"
              fontColor="black"
              keyboradSymbol="2"
              onKeyboradClicked={this.handleKeyboradClicked}
            />
          </td>
          <td>
            <Rectangle1x1
              backgroundColor="white"
              fontColor="black"
              keyboradSymbol="3"
              onKeyboradClicked={this.handleKeyboradClicked}
            />
          </td>
          <td>
            <Rectangle1x1
              backgroundColor="peru"
              fontColor="white"
              keyboradSymbol="="
              onKeyboradClicked={this.handleKeyboradClicked}
            />
          </td>
        </tr>
      </tbody>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null
    };
    this.handleKeyboradClicked = this.handleKeyboradClicked.bind(this);
  }

  handleKeyboradClicked(value) {
    this.setState(calculate(this.state, value));
    console.log(value);
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <td colSpan="4">
              <Display value={this.state.next || this.state.total || "0"} />
            </td>
          </tr>
        </thead>
        <Keyboard onKeyboradClicked={this.handleKeyboradClicked} />
      </table>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
