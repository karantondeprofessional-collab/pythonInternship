import api from "../api/api";

function BrandList({ brands, refresh }) {
  const deleteBrand = async (id) => {
    await api.delete(`/brands/${id}`);
    refresh();
  };

  return (
    <div className="card">
      <h3>Brand Dashboard</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Brand</th>
            <th>Company</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {brands.map((b) => (
            <tr key={b.brandId}>
              <td>{b.brandId}</td>
              <td>{b.brandName}</td>
              <td>{b.chain?.chainId}</td>
              <td>
                <button onClick={() => deleteBrand(b.brandId)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BrandList;