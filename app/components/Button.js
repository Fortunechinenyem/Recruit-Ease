export default function Button({
  children,
  onClick,
  type = "button",
  className = "",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 ${className}`}
    >
      {children}
    </button>
  );
}
