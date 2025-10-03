import { useState } from "react";
import BalanceCards from "../components/dashboard/BalanceCards.jsx";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">
            💸 Finance Tracker
          </h1>
          <p className="text-slate-600">Resumen de tus finanzas</p>
        </div>

        {/* Tarjetas de balance */}
        <BalanceCards />

        <div className="bg-white rounded-xl p-8 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">
            Dashboard en construcción...
          </h2>
          <p className="text-slate-500">Aquí irán los componentes</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
