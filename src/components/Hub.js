import { Link } from "react-router-dom";

const Hub = () => {
  return (
    <section>
      <h1>Main Hub</h1>
      <br />
      <p>Admins and Editors are authorized to access this page</p>
      <div className="flexGrow">
        <Link to="/">Home</Link>
      </div>
    </section>
  );
};

export default Hub;
