import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
/* import About from "about/about";
import Home from "home/home"; */

const About = React.lazy(() => import("about/about"));
const Home = React.lazy(() => import("home/home"));

export default function App() {
  return (
    <div>
      <h1>This is container</h1>
      <Router>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <hr></hr>
        <Switch>
          <Route path="/about">
            <Suspense fallback={"loading"}>
              <About />
            </Suspense>
          </Route>
          <Route path="/home">
            <Suspense fallback={"loading"}>
              <Home />
            </Suspense>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
