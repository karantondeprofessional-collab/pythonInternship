import { Link } from "react-router-dom";

export default function InvoiceTable({ invoices, onDelete }) {

  if (!invoices || invoices.length === 0)
    return <h3>No invoices found</h3>;

  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Customer</th>
          <th>Subtotal</th>
          <th>Tax</th>
          <th>Total</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {invoices.map(inv => (
          <tr key={inv.id}>
            <td>#{inv.id}</td>
            <td>{inv.customerName}</td>
            <td>₹{inv.subTotal}</td>
            <td>₹{inv.tax}</td>
            <td><b>₹{inv.total}</b></td>

            <td>
              <Link to={`/invoice/${inv.id}`}>
                <button className="btn">View</button>
              </Link>

              <button
                style={{ background: "#e74c3c", marginLeft: "10px" }}
                className="btn"
                onClick={() => onDelete(inv.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
