import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ZonePage from "./pages/ZonePage";

export default function App() {
  return (
    <BrowserRouter>

      <nav className="navbar navbar-dark bg-dark px-3">
        <span className="navbar-brand">Zone Management System</span>

        <div>
          <Link to="/" className="btn btn-outline-light">
            Zones
          </Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<ZonePage />} />
      </Routes>

    </BrowserRouter>
  );
}
