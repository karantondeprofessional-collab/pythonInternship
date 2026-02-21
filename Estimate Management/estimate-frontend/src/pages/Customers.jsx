import { useEffect, useState } from "react";
import API from "../api/api";
import Navbar from "../components/Navbar";

export default function Customers(){

  const [name,setName]=useState("");
  const [phone,setPhone]=useState("");
  const [list,setList]=useState([]);

  const load=async()=>{
    const res=await API.get("/customers");
    setList(res.data);
  }

  const save=async()=>{
    await API.post("/customers",{name,phone});
    setName(""); setPhone("");
    load();
  }

  const remove=async(id)=>{
    await API.delete("/customers/"+id);
    load();
  }

  useEffect(()=>{load()},[]);

  return(
    <>
    <Navbar/>
    <div className="container mt-4">
      <h2>Customers</h2>

      <div className="card p-3 mb-3">
        <input className="form-control mb-2" placeholder="Name"
          value={name} onChange={e=>setName(e.target.value)}/>
        <input className="form-control mb-2" placeholder="Phone"
          value={phone} onChange={e=>setPhone(e.target.value)}/>
        <button className="btn btn-success" onClick={save}>Add Customer</button>
      </div>

      <table className="table table-bordered">
        <thead>
          <tr><th>Name</th><th>Phone</th><th>Action</th></tr>
        </thead>
        <tbody>
          {list.map(c=>(
            <tr key={c.id}>
              <td>{c.name}</td>
              <td>{c.phone}</td>
              <td>
                <button className="btn btn-danger btn-sm"
                  onClick={()=>remove(c.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  )
}
