import { useContext } from "react";
import { Link } from "react-router-dom";
import IdContext from "../contexts/IdContext";

const Header = () => {
  const [id, setId] = useContext(IdContext);
  return (
    <header className="absolute left-0 top-0 w-full flex justify-between items-center bg-purple-600 text-white py-3 px-6 shadow-md">
      <Link className="text-2xl hover:opacity-50" to="/">
        <h1>Notes for Friends</h1>
      </Link>
      <nav className="w-1/3 text-xl md:text-lg md:w-36 flex justify-between">
        {!id ? (
          <>
            <Link className="hover:opacity-50" to="/login">
              Login
            </Link>
            <Link className="hover:opacity-50" to="/signup">
              Sign up
            </Link>
          </>
        ) : (
          <>
            <Link onClick={() => setId("")} className="hover:opacity-50" to="/">
              Logout
            </Link>
            <Link className="hover:opacity-50" to="/settings">
              Settings
            </Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
