import { useEffect, useState } from "react";
import api from "../services/api";
import { Link } from "react-router-dom";

export default function Dashboard() {

  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    api.get("/invoices").then(res => setInvoices(res.data));
  }, []);

  const totalRevenue = invoices.reduce((sum, i) => sum + (i.total || 0), 0);
  const totalInvoices = invoices.length;
  const avgInvoice = totalInvoices ? (totalRevenue / totalInvoices).toFixed(2) : 0;

  return (
    <div className="container">

      <h1>Dashboard</h1>

      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>

        <div className="card">
          <h3>Total Invoices</h3>
          <h2>{totalInvoices}</h2>
        </div>

        <div className="card">
          <h3>Total Revenue</h3>
          <h2>₹{totalRevenue}</h2>
        </div>

        <div className="card">
          <h3>Average Invoice</h3>
          <h2>₹{avgInvoice}</h2>
        </div>

      </div>

      <div style={{ marginTop: "30px" }}>
        <Link to="/create">
          <button className="btn">Create New Invoice</button>
        </Link>
      </div>

    </div>
  );
}
