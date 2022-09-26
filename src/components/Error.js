import { Link } from "react-router-dom";

const Error = () => {
  return (
    <article style={{ padding: "100px" }}>
      <h1>Oopsy!</h1>
      <p>Page Not Found</p>
      <div className="flexGrow">
        <Link to="/">Home</Link>
      </div>
    </article>
  );
};

export default Error;
