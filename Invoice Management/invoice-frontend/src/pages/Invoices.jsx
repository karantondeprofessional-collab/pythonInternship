import { useEffect,useState } from "react";
import api from "../services/api";

export default function Invoices(){

  const [data,setData]=useState([]);

  useEffect(()=>{
    api.get("/invoices").then(res=>setData(res.data));
  },[]);

  return(
    <div>
      <h2>All Invoices</h2>
      {data.map(inv=>(
        <div key={inv.id}>
          <h3>{inv.customerName}</h3>
          <p>Total: ₹{inv.total}</p>
        </div>
      ))}
    </div>
  );
}
