export default function Badge({ text, color = "#7c5cff" }) {
  return (
    <span
      className="badge"
      style={{
        backgroundColor: color,
        color: "#fff",
      }}
    >
      {text}
    </span>
  );
}
