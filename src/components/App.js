import React from "react";
import { Route, Link } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";

function App() {
  return (
    <div>
      <NavBar />
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/actors">Actors</Link>
          </li>
          <li>
            <Link to="/directors">Directors</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
        </ul>
      </nav>
      <Route path="/" exact component={Home} />
      <Route path="/actors" component={Actors} />
      <Route path="/directors" component={Directors} />
      <Route path="/movies" component={Movies} />
    </div>
  );
}

export default App;

