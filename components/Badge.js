export default function Badge({ text, color = "#7c5cff" }) {
  return (
    <span
      className="badge"
      style={{
        borderColor: color,
        color: color,
      }}
    >
      {text}
    </span>
  );
}
