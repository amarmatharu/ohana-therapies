export function Badge({ children, variant = "default" }) {
  const baseStyles = "inline-flex items-center px-2 py-1 rounded-full text-sm font-semibold";
  const variants = {
    default: "bg-gray-200 text-gray-800",
    success: "bg-green-500 text-white",
    destructive: "bg-red-500 text-white",
  };

  return <span className={`${baseStyles} ${variants[variant]}`}>{children}</span>;
}
