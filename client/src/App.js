import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.scss";
import HomeView from "./views/Home.js";
import LoginRegisterView from "./views/LoginRegister.js";
import CheeseSearchView from "./views/CheeseSearch.js";
import CheeseDetailsView from "./views/CheeseDetails.js";
import UserProfileView from "./views/UserProfile.js";

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
        <div className="container-fluid">
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/login" element={<LoginRegisterView />} />
            <Route path="/cheeses" element={<CheeseSearchView />} />
            <Route path="/profile/:id" element={<UserProfileView />} />
            <Route path="/cheeses/:id" element={<CheeseDetailsView />} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
