import "./App.css";

import {
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import About from "./pages/About";

function App() {
  return (
    <div className="container">
      <h1>Task Manager App</h1>

      <nav>
        <Link to="/">Home</Link>
        {" | "}
        <Link to="/tasks">Tasks</Link>
        {" | "}
        <Link to="/about">About</Link>
      </nav>

      <hr />

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/tasks"
          element={<Tasks />}
        />

        <Route
          path="/about"
          element={<About />}
        />
      </Routes>
    </div>
  );
}

export default App;