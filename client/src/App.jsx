import { BrowserRouter, Routes, Route } from "react-router-dom";
import Axios from "axios";

import SearchList from "./components/SearchList";
import Layout from "./components/Layout";
import Purchase from "./components/Purchase";
import Register from "./components/Register";

import games from "./static/games";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const History = () => {
  return <h1>History Page Baby!</h1>;
};

const App = () => {
  function isLoggedIn() {
    let loggedIn;
    Axios.get("http://localhost:3001").then((res) => {
      console.log("Logged in:", res.data);
      loggedIn = res.data;
    });
    return loggedIn;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<SearchList games={games} />} />
          <Route
            path="login"
            element={<Register isLoggedIn={isLoggedIn()} />}
          />

          <Route path="history" element={<History />} />
          <Route path="buy/:game" element={<Purchase />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
