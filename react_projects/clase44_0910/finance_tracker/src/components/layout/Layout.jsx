import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  HiHome,
  HiCreditCard,
  HiChartBar,
  HiCog,
  HiMenu,
  HiX,
} from "react-icons/hi";

const navigation = [
  { name: "Dashboard", href: "/", icon: HiHome },
  { name: "Transacciones", href: "/transactions", icon: HiCreditCard },
  { name: "Analytics", href: "/analytics", icon: HiChartBar },
  { name: "Configuracion", href: "/settings", icon: HiCog },
];

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Mobile sidebar */}
      <div
        className={`fixed inset-0 z-50 lg:hidden ${sidebarOpen ? "block" : "hidden"}`}
      >
        <div
          className="fixed inset-0 bg-slate-900/50"
          onClick={() => setSidebarOpen(false)}
        />
        <div className="fixed inset-y-0 left-0 flex w-64 flex-col bg-white shadow-2xl">
          <div className="flex h-16 items-center justify-between px-6 border-b">
            <h1 className="text-xl font-bold text-blue-600">Finance</h1>
            <button onClick={() => setSidebarOpen(false)}>
              <HiX className="h-6 w-6" />
            </button>
          </div>

          <nav className="flex-1 space-y-2 px-4 py-6">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={`group flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-all ${isActive ? "bg-blue-600 text-white shadow-lg" : "text-slate-700 hover:bg-slate-100"}`}
                >
                  <item.icon className="mr-3 h-5 w-5" />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg-flex lg:w-64 lg:flex-col">
        <div className="flex flex-col flex-grow bg-white border-r shadow-sm">
          <div className="flex h-16 items-center px-6 border-b">
            <h1 className="text-xl font-bold text-blue-600">
              💸 Finance Tracker
            </h1>
          </div>
          <nav className="flex-1 space-y-2 px-4 py-6">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={`group flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-all ${isActive ? "bg-blue-600 text-white shadow-lg" : "text-slate-700 hover:bg-slate-100"}`}
                >
                  <item.icon className="mr-3 h-5 w-5" />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Main content*/}
      <div className="lg:pl-64">
        {/* Mobile header */}
        <div>
          <button onClick={() => setSidebarOpen(true)}>
            <HiMenu className="h-6 w-6" />
          </button>
          <h1 className="text-lg font-semibold text-blue-600">💸 Finance</h1>
        </div>

        {/* Page content*/}
        <main className="py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
