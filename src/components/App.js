import { useState } from "react";
import { Link, Switch, Route } from "react-router-dom";
import Signup from "./Signup";
import CardList from "./CardList";
import IdContext from "../contexts/IdContext";

function App() {
  const id = useState("");

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-50">
      <header className="absolute left-0 top-0 w-full flex justify-between items-center bg-purple-600 text-white py-3 px-6 shadow-md">
        <Link className="text-2xl hover:opacity-50" to="/">
          <h1>Notes for Friends</h1>
        </Link>
        <nav className="w-1/6 flex justify-between">
          <Link className="hover:opacity-50" to="/login">
            Login
          </Link>
          <Link className="hover:opacity-50" to="/signup">
            Sign up
          </Link>
          <Link className="hover:opacity-50" to="/settings">
            Settings
          </Link>
        </nav>
      </header>
      <IdContext.Provider value={id}>
        <Switch>
          <Route path="/user/:id">user</Route>
          <Route path="/settings">
            <div>Settings</div>
          </Route>
          <Route path="/login">Login</Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/">
            <CardList />
          </Route>
        </Switch>
      </IdContext.Provider>
    </div>
  );
}

export default App;
