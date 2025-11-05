import clsx from "clsx";

const variants = {
  pending: "bg-yellow-100 text-yellow-800",
  in_progress: "bg-blue-100 text-blue-800",
  completed: "bg-green-100 text-green-800",
  low: "bg-gray-100 text-gray-800",
  medium: "bg-orange-100 text-orange-800",
  high: "bg-red-100 text-red-800",
};

const Badge = ({ variant, children }) => {
  return (
    <span
      className={clsx(
        "px-2 py-1 text-xs font-medium rounded-full",
        variants[variant],
      )}
    >
      {children}
    </span>
  );
};

export default Badge;
