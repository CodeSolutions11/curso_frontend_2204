const Card = ({ children, className = "" }) => {
  return (
    <div className={`rounded-lg shadow-md border p-6 ${className}`}>
      {children}
    </div>
  );
};
export default Card;
