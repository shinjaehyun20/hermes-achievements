fetch("data/snapshot.json")
  .then((response) => {
    if (!response.ok) throw new Error(`Snapshot request failed: ${response.status}`);
    return response.json();
  })
  .then((snapshot) => {
    const date = document.querySelector("#snapshot-date");
    if (date) date.textContent = snapshot.captured_at;
  })
  .catch((error) => console.warn("Static snapshot metadata unavailable.", error));
