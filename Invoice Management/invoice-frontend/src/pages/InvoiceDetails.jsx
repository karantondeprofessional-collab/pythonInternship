import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";

export default function InvoiceDetails(){

  const {id}=useParams();
  const [invoice,setInvoice]=useState(null);

  useEffect(()=>{
    api.get(`/invoices/${id}`).then(res=>setInvoice(res.data));
  },[]);

  if(!invoice) return <h3>Loading...</h3>;

  return(
    <div className="container">
      <h2>Invoice #{invoice.id}</h2>
      <h3>{invoice.customerName}</h3>

      <table className="table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Amount</th>
          </tr>
        </thead>

        <tbody>
          {invoice.items.map(i=>(
            <tr key={i.id}>
              <td>{i.productName}</td>
              <td>{i.quantity}</td>
              <td>{i.price}</td>
              <td>{i.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Total: ₹{invoice.total}</h3>

      <button onClick={()=>window.print()}>Print Invoice</button>
    </div>
  );
}
