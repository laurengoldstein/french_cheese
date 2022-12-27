import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
// import logo from "./logo.svg";
import "./App.css";
import HomeView from "./views/Home.js";
import NavBar from "./components/NavBar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    fetch("http://localhost:5000/testAPI")
      .then((res) => res.text())
      .then((res) => this.setState({ apiResponse: res }))
      .catch((err) => err);
  }

  componentWillMount() {
    this.callAPI();
  }
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="container">
          <Routes>
            <Route path="/" element={<HomeView />} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
