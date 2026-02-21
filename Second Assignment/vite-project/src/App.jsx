import React, { useEffect, useState } from "react";
import { getGroups, addGroup } from "./api";

function App() {
  const [groups, setGroups] = useState([]);
  const [name, setName] = useState("");

  const loadGroups = () => {
    getGroups().then(setGroups);
  };

  useEffect(() => {
    loadGroups();
  }, []);

  const handleAdd = () => {
    if (!name.trim()) {
      alert("Group name is required");
      return;
    }

    addGroup(name).then(() => {
      setName("");
      loadGroups();
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Group Management Dashboard</h2>

      <input
        type="text"
        placeholder="Enter group name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleAdd}>Add Group</button>

      <ul>
        {groups.map((g) => (
          <li key={g.groupId}>
            {g.groupName} - {g.isActive ? "Active" : "Inactive"}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
