import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <section>
      <h1>Admin Page</h1>
      <br />
      <p>Admins are authorized to access this page</p>
      <div className="flexGrow">
        <Link to="/">Home</Link>
      </div>
    </section>
  );
};

export default Admin;
