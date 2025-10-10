import { useState } from "react";
import BalanceCards from "../components/dashboard/BalanceCards.jsx";
import Button from "../components/ui/Button";
import useExpenseStore from "../stores/useExpenseStore";
import CategoryChart from "../components/dashboard/CategoryChart.jsx";
import RecentTransactions from "../components/dashboard/RecentTransactions.jsx";
import TransactionForm from "../components/forms/TransactionForm";

const Dashboard = () => {
  const [showForm, setShowForm] = useState(false);

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
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>
          <p className="text-slate-600">Resumen de tus finanzas</p>
        </div>

        <div className="flex gap-3">
          {/* Botón para agregar datos */}
          <Button
            onClick={addSampleData}
            className="bg-blue-600 hover:bg-blue-700"
          >
            Agregar Datos de prueba
          </Button>

          {/* Botón para mostrar formulario */}
          <Button
            onClick={() => setShowForm(!showForm)}
            className="bg-blue-600 hover:bg-blue-700"
          >
            {showForm ? "x Cancelar" : "+ Nueva Transaccion"}
          </Button>
        </div>
      </div>

      {/* formulario condicional */}
      {showForm && (
        <div className="mb-8">
          <TransactionForm onClose={() => setShowForm(false)} />
        </div>
      )}

      {/* Tarjetas de balance */}
      <BalanceCards />

      {/*Grid con gráfico*/}
      <div className="grid grid-cols-2 gap-1">
        <CategoryChart />
        <RecentTransactions />
      </div>
    </div>
  );
};

export default Dashboard;
