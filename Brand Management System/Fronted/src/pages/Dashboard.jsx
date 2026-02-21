import { useEffect, useState } from "react";
import api from "../api/api";
import BrandForm from "../components/BrandForm";
import BrandList from "../components/BrandList";

function Dashboard() {
  const [brands, setBrands] = useState([]);

  const fetchBrands = async () => {
    const res = await api.get("/brands");
    setBrands(res.data);
  };

  useEffect(() => {
    fetchBrands();
  }, []);

  return (
    <div className="container">
      <BrandForm refresh={fetchBrands} />
      <BrandList brands={brands} refresh={fetchBrands} />
    </div>
  );
}

export default Dashboard;