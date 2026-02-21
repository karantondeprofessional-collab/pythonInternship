import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav className="navbar navbar-dark bg-dark px-3">
      <span className="navbar-brand">Estimate System</span>

      <div>
        <Link className="btn btn-outline-light m-1" to="/dashboard">Dashboard</Link>
        <Link className="btn btn-outline-light m-1" to="/customers">Customers</Link>
        <Link className="btn btn-outline-light m-1" to="/products">Products</Link>
        <Link className="btn btn-outline-light m-1" to="/create-estimate">Create</Link>
        <Link className="btn btn-outline-light m-1" to="/estimates">Estimates</Link>
        <button className="btn btn-danger m-1" onClick={logout}>Logout</button>
      </div>
    </nav>
  );
}
