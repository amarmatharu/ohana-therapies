export function Button({ children, variant = "default", size = "md", ...props }) {
    const baseStyles =
      "rounded-lg font-semibold transition duration-200 focus:ring-4 focus:ring-offset-2 shadow-lg";
  
    const variants = {
      default: "bg-blue-600 text-white hover:bg-blue-800 focus:ring-blue-400",
      outline:
        "border-2 border-blue-600 text-blue-600 bg-white hover:bg-blue-600 hover:text-white focus:ring-blue-400",
      destructive: "bg-red-600 text-white hover:bg-red-800 focus:ring-red-400",
    };
  
    const sizes = {
      md: "px-6 py-3 text-lg", // Large text buttons
      icon: "p-4 bg-gray-200 hover:bg-gray-400", // Regular icon button
      largeIcon: "p-6 rounded-full bg-green-500 hover:bg-green-700 text-white", // Large circular button
    };
  
    return (
      <button className={`${baseStyles} ${variants[variant]} ${sizes[size]}`} {...props}>
        {children}
      </button>
    );
  }
  