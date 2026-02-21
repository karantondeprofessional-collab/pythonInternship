import { useEffect, useState } from "react";
import API from "../api/api";
import Navbar from "../components/Navbar";

export default function EstimateList(){

  const [list,setList]=useState([]);

  const load=async()=>{
    const res=await API.get("/estimates");
    setList(res.data);
  }

  useEffect(()=>{load()},[]);

  return(
    <>
    <Navbar/>
    <div className="container mt-4">
      <h2>All Estimates</h2>

      {list.map(e=>(
        <div key={e.id} className="card p-3 mb-4">

          <h5>Estimate #: {e.estimateNumber}</h5>
          <p><b>Customer:</b> {e.customer?.name}</p>
          <p><b>Date:</b> {e.date}</p>

          <table className="table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Tax</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {e.items?.map((i,idx)=>(
                <tr key={idx}>
                  <td>{i.product?.name}</td>
                  <td>{i.quantity}</td>
                  <td>{i.price}</td>
                  <td>{i.tax}</td>
                  <td>{i.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h5 className="text-end">Grand Total: ₹ {e.grandTotal}</h5>

        </div>
      ))}
    </div>
    </>
  )
}
