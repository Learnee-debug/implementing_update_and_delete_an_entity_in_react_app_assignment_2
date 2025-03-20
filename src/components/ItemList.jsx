import Item from "./Item";
import PropTypes from 'prop-types';

const ItemList = ({ items, onDelete }) => {
  // Render the list of items
  return (
    <div>
      <h2>Door List</h2>
      {items.length === 0 ? (
        <p>No doors available</p>
      ) : (
        <div>
          {items.map((item) => (
            <Item key={item.id} item={item} onDelete={onDelete} />
          ))}
        </div>
      )}
    </div>
  );
};

ItemList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string,
      description: PropTypes.string,
      location: PropTypes.string,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ItemList;    