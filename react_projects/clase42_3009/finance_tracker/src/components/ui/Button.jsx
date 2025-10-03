import { forwardRef } from "react";
import { cn } from "../../lib/utils";

const Button = forwardRef(
  (
    { className, variant = "primary", size = "md", disabled = false, ...props },
    ref
  ) => {
    const variants = {
      primary:
        "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 border-0",
      secondary:
        "bg-slate-100 hover:bg-slate-200 text-slate-900 dark:bg-slate-700 dark:hover:bg-slate-600 dark:text-white border border-slate-200 dark:border-slate-600",
      success:
        "bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 border-0",
      danger:
        "bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white shadow-lg shadow-rose-500/25 hover:shadow-rose-500/40 border-0",
      ghost:
        "hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border-0",
    };
    const sizes = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-4 py-2.5",
      lg: "px-6 py-3 text-lg",
    };

    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500/50 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none",
          variants[variant],
          sizes[size],
          className
        )}
        disabled={disabled}
        ref={ref}
        {...props}
      />
      
    );
  }
);

Button.displayName = "Button";
export default Button;
