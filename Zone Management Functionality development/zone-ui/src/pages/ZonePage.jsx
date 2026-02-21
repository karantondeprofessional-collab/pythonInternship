import { useEffect, useState } from "react";
import { getZones, deleteZone } from "../api/zoneApi";
import ZoneForm from "../components/ZoneForm";


export default function ZonePage() {

  const [zones,setZones]=useState([]);

  const loadZones=()=>{
    getZones().then(res=>setZones(res.data));
  }

  useEffect(()=>{loadZones()},[]);

  return (
    
    <div className="container mt-4">
      <h2>Zone Management</h2>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>City</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {zones.map(z=>(
            <tr key={z.id}>
              <td>{z.id}</td>
              <td>{z.zoneName}</td>
              <td>{z.city}</td>
              <td>{z.status?"Active":"Inactive"}</td>
              <td>
                <button className="btn btn-danger"
                  onClick={()=>{deleteZone(z.id).then(loadZones)}}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>

      </table>
      <ZoneForm reload={loadZones} />

    </div>
  );
}
