import { useEffect, useState } from "react";
import API from "../api/api";
import Navbar from "../components/Navbar";

export default function Products(){

  const [name,setName]=useState("");
  const [price,setPrice]=useState("");
  const [gst,setGst]=useState("");
  const [list,setList]=useState([]);

  const load=async()=>{
    const res=await API.get("/products");
    setList(res.data);
  }

  const save=async()=>{
    await API.post("/products",{name,price,gst});
    setName(""); setPrice(""); setGst("");
    load();
  }

  const remove=async(id)=>{
    await API.delete("/products/"+id);
    load();
  }

  useEffect(()=>{load()},[]);

  return(
    <>
    <Navbar/>
    <div className="container mt-4">
      <h2>Products</h2>

      <div className="card p-3 mb-3">
        <input className="form-control mb-2" placeholder="Name"
          value={name} onChange={e=>setName(e.target.value)}/>
        <input className="form-control mb-2" placeholder="Price"
          value={price} onChange={e=>setPrice(e.target.value)}/>
        <input className="form-control mb-2" placeholder="GST %"
          value={gst} onChange={e=>setGst(e.target.value)}/>
        <button className="btn btn-success" onClick={save}>Add Product</button>
      </div>

      <table className="table table-bordered">
        <thead>
          <tr><th>Name</th><th>Price</th><th>GST</th><th>Action</th></tr>
        </thead>
        <tbody>
          {list.map(p=>(
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>₹{p.price}</td>
              <td>{p.gst}%</td>
              <td>
                <button className="btn btn-danger btn-sm"
                  onClick={()=>remove(p.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  )
}
