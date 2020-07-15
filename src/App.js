import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { BoardPage } from "./pages/BoardPage";
import { TodoPage } from "./pages/TodoPage";
import { MainPage } from "./pages/MainPage";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Main</Link>
            </li>
            <li>
              <Link to="/board">Board</Link>
            </li>
            <li>
              <Link to="/todo">Todo</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/board">
            <BoardPage></BoardPage>
          </Route>
          <Route path="/todo">
            <TodoPage></TodoPage>
          </Route>
          <Route path="/">
            <MainPage></MainPage>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}