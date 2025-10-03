import BalanceCards from "../components/dashboard/BalanceCards.jsx";
import { useState, useEffect } from "react";
import Button from "../components/ui/Button";
import useExpenseStore from "../stores/useExpenseStore";
import CategoryChart from "../components/dashboard/CategoryChart.jsx";

const Dashboard = () => {
  const addTransaction = useExpenseStore((state) => state.addTransaction);

  const addSampleData = () => {
    // Agregar datos de prueba
    addTransaction({
      type: "income",
      amount: 50000,
      description: "Salario de Octubre",
      category: "salary",
      date: "2025/10/01",
    });

    addTransaction({
      type: "expense",
      amount: 15000,
      description: "Supermacado",
      category: "food",
      date: "2025/10/02",
    });

    addTransaction({
      type: "expense",
      amount: 8000,
      description: "Combustible",
      category: "transport",
      date: "2025/10/03",
    });

    addTransaction({
      type: "expense",
      amount: 17000,
      description: "Ver una peli en el cine",
      category: "entertaiment",
      date: "2025/10/03",
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">
            💸 Finance Tracker
          </h1>
          <p className="text-slate-600">Resumen de tus finanzas</p>
        </div>

        {/* Botón para agregar datos */}
        <Button
          onClick={addSampleData}
          className="bg-blue-600 hover:bg-blue-700"
        >
          Agregar Datos de prueba
        </Button>

        {/* Tarjetas de balance */}
        <BalanceCards />

        {/*Grid con gráfico*/}
        <div className="grid grid-cols-2 gap-1">
          <CategoryChart />
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h3 className="text-xl font-semibold mb-4">
              Próximo: transacciones recientes
            </h3>
            <p className="text-slate-500">Aquí irá la lista de transacciones</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
