import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href={"/"} className="text-xl font-semibold text-gray-900">
            Task Manager
          </Link>
          <div className="flex space-x-4">
            <Link
              href={"/"}
              className="text-blue-600 font-semibold hover:text-blue-700"
            >
              Dashboard
            </Link>
            <Link
              href={"/task"}
              className="text-gray-600 font-semibold hover:text-gray-700"
            >
              Tareas
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
