import ItemList from "./components/ItemList";
import { useState, useEffect } from "react";

// use the following link to get the data
// `/doors` will give you all the doors.
const API_URI = `https://${import.meta.env.VITE_API_URI}/doors`;

function App() {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get the existing items from the server
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await fetch(API_URI);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setItems(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${API_URI}/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Update the items state by filtering out the deleted item
      setItems(items.filter(item => item.id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="app-container">
      <h1>Doors Management</h1>
      {error && <p className="error">Error: {error}</p>}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ItemList items={items} onDelete={handleDelete} />
      )}
    </div>
  );
}

export default App;