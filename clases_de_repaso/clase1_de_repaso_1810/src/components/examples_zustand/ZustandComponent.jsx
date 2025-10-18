import { useCartStore } from "./cartStore";
import { useUserStore } from "./userStore";

const ZustandComponent = () => {
  const { user, isAuthenticated, logout, login } = useUserStore();
  const { items, total, addItem } = useCartStore();

  return (
    <header className="bg-black shadow-md p-4 text-white">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1>Mi tienda</h1>
        <div className="flex items-center space-x-4">
          {/* carrito */}
          <div className="relative">
            <button
              onClick={() => addItem({ id: 1, name: "Laptop", price: 30 })}
              className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              🛒 Carrito
              {items.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center ">
                  {items.length}
                </span>
              )}
            </button>
            <div className="text-md font-bold text-green-600 mt-1">
              Total: {total.toFixed(2)}$
            </div>
          </div>

          {/* Usuario*/}
          {isAuthenticated ? (
            <div className="flex items-center space-x-2">
              <span>Hola, {user?.name}</span>
              <button onClick={logout}>Salir</button>
            </div>
          ) : (
            <button onClick={() => login("jesus@gmail.com")}>
              Iniciar Sesión
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
export default ZustandComponent;
