import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Signup from "./Signup";
import Login from "./Login";
import CardList from "./CardList";
import Header from "./Header";
import UserDetails from "./UserDetails";
import IdContext from "../contexts/IdContext";

function App() {
  const id = useState("");

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-50">
      <IdContext.Provider value={id}>
        <Header />
        <Switch>
          <ProtectedRoute path="/user/:id">
            <UserDetails />
          </ProtectedRoute>
          <Route path="/settings">
            <div>Settings</div>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
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
