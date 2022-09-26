import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthProvider";

const Home = () => {
  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const logout = async () => {
    setAuth({});
    navigate("/linkpage");
  };

  return (
    <section>
      <h1>Welcome!</h1>
      <p>You are logged in!</p>
      <br />
      <Link to="/editor">Editor Page</Link>
      <br />
      <Link to="/admin">Admin Page</Link>
      <br />
      <Link to="/hub">Main Hub</Link>
      <br />
      <Link to="/linkpage">Link Page</Link>
      <div className="flexGrow">
        <button onClick={logout}>Sign Out</button>
      </div>
    </section>
  );
};

export default Home;
