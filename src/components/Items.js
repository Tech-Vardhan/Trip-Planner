
export default function Items({ item, onDeleteItems, onToggleItems }) {
  return (
    <li>
      <input
        onChange={() => onToggleItems(item.id)}
        type="checkbox"
        value={item.packed} />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItems(item.id)}>❌</button>
    </li>
  );
}
