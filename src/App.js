import { Link, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <header className="w-full flex justify-between items-center bg-purple-600 text-white py-3 px-6 shadow-md">
        <Link className="text-2xl hover:opacity-50" to="/">
          <h1>Notes for Friends</h1>
        </Link>
        <nav className="w-1/6 flex justify-between">
          <Link className="hover:opacity-50" to="/login">
            Login
          </Link>
          <Link className="hover:opacity-50" to="/signup">
            Sign Up
          </Link>
          <Link className="hover:opacity-50" to="/settings">
            Settings
          </Link>
        </nav>
      </header>
      <Switch>
        <Route path="/user/:id">user</Route>
        <Route path="/settings">Settings</Route>
        <Route path="/login">Login</Route>
        <Route path="/signup">Sign Up</Route>
        <Route path="/">Home</Route>
      </Switch>
    </div>
  );
}

export default App;
