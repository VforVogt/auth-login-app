import { Link } from "react-router-dom";

const Editor = () => {
  return (
    <section>
      <h1>Editor Page</h1>
      <br />
      <p>Editors are authorized to access this page</p>
      <div className="flexGrow">
        <Link to="/">Home</Link>
      </div>
    </section>
  );
};

export default Editor;
