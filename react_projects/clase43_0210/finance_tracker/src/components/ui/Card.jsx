import { cn } from "../../lib/utils";

/*
 * Errores:
 * La clase CSS "card" no existe
 */
const Card = ({ children, className = "", ...props }) => {
  return (
    <div
      //className={cn("card", className)} // card no está definida
      className={cn(
        "rounded-xl p-6 shadow-sm border border-slate-200",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
