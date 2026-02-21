import { useEffect, useState } from "react";
import {
  getChains,
  addChain,
  updateChain,
  deleteChain,
} from "../api/chainApi";

import ChainForm from "../components/ChainForm";
import ChainList from "../components/ChainList";

const Dashboard = () => {
  const [chains, setChains] = useState([]);
  const [selectedChain, setSelectedChain] = useState(null);

  const loadChains = async () => {
    const response = await getChains();
    setChains(response.data);
  };

  useEffect(() => {
    loadChains();
  }, []);

  const handleAddOrUpdate = async (data) => {
    if (selectedChain) {
      await updateChain(selectedChain.chainId, data);
      setSelectedChain(null);
    } else {
      await addChain(data);
    }
    loadChains();
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure?")) {
      await deleteChain(id);
      loadChains();
    }
  };

  return (
    <div className="container">
      <h1>Chain Management Dashboard</h1>

      <ChainForm
        onSubmit={handleAddOrUpdate}
        selectedChain={selectedChain}
      />

      <ChainList
        chains={chains}
        onEdit={setSelectedChain}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default Dashboard;
