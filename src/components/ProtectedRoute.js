import { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import IdContext from "../contexts/IdContext";

const ProtectedRoute = ({ path, children }) => {
  const [id] = useContext(IdContext);

  return <Route path={path}>{id ? children : <Redirect to="/login" />}</Route>;
};

export default ProtectedRoute;
