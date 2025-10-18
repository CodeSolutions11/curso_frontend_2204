import Link from "next/link";

const Nav = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="flex gap-4">
        <Link href={"/"} className="hover:underline">
          Inicio
        </Link>
        <Link href={"/about"} className="hover:underline">
          About
        </Link>
        <Link href={"/productos"} className="hover:underline">
          Productos
        </Link>
        <Link href={"/contacto"} className="hover:underline">
          Contacto
        </Link>
      </div>
    </nav>
  );
};
export default Nav;
