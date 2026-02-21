import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import CreateInvoice from "./pages/CreateInvoice";
import ViewInvoices from "./pages/ViewInvoices";
import InvoiceDetails from "./pages/InvoiceDetails";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/create" element={<CreateInvoice />} />
        <Route path="/invoices" element={<ViewInvoices />} />
        <Route path="/invoice/:id" element={<InvoiceDetails />} />
      </Routes>
    </>
  );
}
