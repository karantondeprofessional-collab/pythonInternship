const ChainList = ({ chains, onEdit, onDelete }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Company Name</th>
          <th>GSTN</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {chains.map((chain) => (
          <tr key={chain.chainId}>
            <td>{chain.chainId}</td>
            <td>{chain.companyName}</td>
            <td>{chain.gstnNo}</td>
            <td>
              <button onClick={() => onEdit(chain)}>Edit</button>
              <button onClick={() => onDelete(chain.chainId)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ChainList;
