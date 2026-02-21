import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Customers from "./pages/Customers";
import Products from "./pages/Products";
import CreateEstimate from "./pages/CreateEstimate";
import EstimateList from "./pages/EstimateList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/products" element={<Products />} />
        <Route path="/create-estimate" element={<CreateEstimate />} />
        <Route path="/estimates" element={<EstimateList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
