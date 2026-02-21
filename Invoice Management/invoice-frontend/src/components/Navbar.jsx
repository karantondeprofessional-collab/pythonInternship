import { Link } from "react-router-dom";

export default function Navbar(){
  return(
    <nav className="nav">
      <h2>Invoice System</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/create">Create</Link>
        <Link to="/invoices">Invoices</Link>
      </div>
    </nav>
  );
}
