import { useState } from "react";
import api from "../api/api";

function BrandForm({ refresh }) {
  const [brandName, setBrandName] = useState("");
  const [chainId, setChainId] = useState("");

  const submitBrand = async (e) => {
    e.preventDefault();

    await api.post("/brands", {
      brandName,
      chain: { chainId }
    });

    setBrandName("");
    setChainId("");
    refresh();
  };

  return (
    <form onSubmit={submitBrand} className="card">
      <h3>Add Brand</h3>
      <input placeholder="Brand Name" value={brandName}
        onChange={(e) => setBrandName(e.target.value)} required />
      <input placeholder="Company (Chain ID)" value={chainId}
        onChange={(e) => setChainId(e.target.value)} required />
      <button>Add Brand</button>
    </form>
  );
}

export default BrandForm;