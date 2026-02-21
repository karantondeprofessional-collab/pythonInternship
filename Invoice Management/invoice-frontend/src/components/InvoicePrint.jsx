export default function InvoicePrint({ invoice }) {

  if (!invoice) return null;

  return (
    <div id="print-area" style={{ padding: "40px", background: "white" }}>

      <h1 style={{ textAlign: "center" }}>INVOICE</h1>

      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
        <div>
          <h3>Customer Details</h3>
          <p><b>Name:</b> {invoice.customerName}</p>
          <p><b>Email:</b> {invoice.customerEmail}</p>
        </div>

        <div>
          <h3>Invoice Info</h3>
          <p><b>ID:</b> #{invoice.id}</p>
          <p><b>Date:</b> {invoice.invoiceDate}</p>
        </div>
      </div>

      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ background: "#eee" }}>
            <th style={cell}>Product</th>
            <th style={cell}>Qty</th>
            <th style={cell}>Price</th>
            <th style={cell}>Amount</th>
          </tr>
        </thead>

        <tbody>
          {invoice.items.map(item => (
            <tr key={item.id}>
              <td style={cell}>{item.productName}</td>
              <td style={cell}>{item.quantity}</td>
              <td style={cell}>₹{item.price}</td>
              <td style={cell}>₹{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ textAlign: "right", marginTop: "20px" }}>
        <h3>Subtotal: ₹{invoice.subTotal}</h3>
        <h3>Tax (18%): ₹{invoice.tax}</h3>
        <h2>Total: ₹{invoice.total}</h2>
      </div>

      <p style={{ marginTop: "40px", textAlign: "center" }}>
        Thank you for your business ❤️
      </p>
    </div>
  );
}

const cell = {
  border: "1px solid #ccc",
  padding: "10px",
  textAlign: "center"
};
