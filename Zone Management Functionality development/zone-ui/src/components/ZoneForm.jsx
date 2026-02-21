import { useState } from "react";
import { createZone } from "../api/zoneApi";

export default function ZoneForm({ reload }) {

  const [zoneName, setZoneName] = useState("");
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const zone = {
      zoneName,
      city,
      status: true
    };

    createZone(zone)
      .then(() => {
        alert("Zone Added Successfully");
        setZoneName("");
        setCity("");
        reload(); // refresh table
      })
      .catch(() => alert("Error adding zone"));
  };

  return (
    <div className="card p-3 mb-4 shadow">
      <h4>Add Zone</h4>

      <form onSubmit={handleSubmit}>

        <div className="mb-3">
          <label className="form-label">Zone Name</label>
          <input
            type="text"
            className="form-control"
            value={zoneName}
            onChange={(e) => setZoneName(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">City</label>
          <input
            type="text"
            className="form-control"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </div>

        <button className="btn btn-primary">Create Zone</button>

      </form>
    </div>
  );
}
