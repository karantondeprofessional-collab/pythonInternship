const BASE_URL = "http://localhost:8080/api/groups";

export const getGroups = () =>
  fetch(BASE_URL).then(res => res.json());

export const addGroup = (groupName) =>
  fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ groupName })
  });
