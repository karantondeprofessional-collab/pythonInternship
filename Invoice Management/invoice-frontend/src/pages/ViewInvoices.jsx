import { useEffect,useState } from "react";
import api from "../services/api";
import { Link } from "react-router-dom";

export default function ViewInvoices(){

  const [data,setData]=useState([]);

  useEffect(()=>{
    api.get("/invoices").then(res=>setData(res.data));
  },[]);

  const deleteInvoice=async(id)=>{
    await api.delete(`/invoices/${id}`);
    setData(data.filter(d=>d.id!==id));
  };

  return(
    <div className="container">
      <h2>All Invoices</h2>

      {data.map(inv=>(
        <div className="card" key={inv.id}>
          <h3>{inv.customerName}</h3>
          <p>Total: ₹{inv.total}</p>

          <Link to={`/invoice/${inv.id}`}>View</Link>
          <button onClick={()=>deleteInvoice(inv.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
