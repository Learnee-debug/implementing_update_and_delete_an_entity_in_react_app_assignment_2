import PropTypes from 'prop-types';

const Item = ({ item, onDelete }) => {
  // Render a single item
  // Add a Delete and Edit button
  return (
    <div className="item-container">
      <div className="item-info">
        <h3>{item.name || "Unknown Door"}</h3>
        <p>ID: {item.id}</p>
        {item.description && <p>Description: {item.description}</p>}
        {item.location && <p>Location: {item.location}</p>}
      </div>
      <div className="item-actions">
        <button 
          className="delete-btn" 
          onClick={() => onDelete(item.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

Item.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string,
    description: PropTypes.string,
    location: PropTypes.string,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Item;