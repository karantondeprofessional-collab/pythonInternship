import { useState, useEffect } from "react";

const ChainForm = ({ onSubmit, selectedChain }) => {
  const [companyName, setCompanyName] = useState("");
  const [gstnNo, setGstnNo] = useState("");

  useEffect(() => {
    if (selectedChain) {
      setCompanyName(selectedChain.companyName);
      setGstnNo(selectedChain.gstnNo);
    }
  }, [selectedChain]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!companyName || !gstnNo) {
      alert("All fields are required");
      return;
    }

    onSubmit({ companyName, gstnNo });

    setCompanyName("");
    setGstnNo("");
  };

  return (
    <form onSubmit={handleSubmit} className="card">
      <h3>{selectedChain ? "Update Chain" : "Add Chain"}</h3>

      <input
        type="text"
        placeholder="Company Name"
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
      />

      <input
        type="text"
        placeholder="GSTN Number"
        value={gstnNo}
        maxLength={15}
        onChange={(e) => setGstnNo(e.target.value)}
      />

      <button type="submit">
        {selectedChain ? "Update" : "Add"}
      </button>
    </form>
  );
};

export default ChainForm;
