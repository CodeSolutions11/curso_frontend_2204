import { forwardRef } from "react";
import { cn } from "../../lib/utils";

const Button = forwardRef(
  (
    { className, variant = "primary", size = "md", disabled = false, ...props },
    ref
  ) => {
    const variants = {
      primary: "bg-gradient-to-r from-blue-500 hover:from-blue",
    };
    const sizes = {
        md: "px-4 py-2.5"
    }

    return (
        <button 
            className={cn(
                "flex ",
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
