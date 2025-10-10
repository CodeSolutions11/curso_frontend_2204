import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import useExpenseStore from "../../stores/useExpenseStore";
import { CATEGORIES } from "../../lib/catagories.js";
import Card from "../ui/Card.jsx";

ChartJS.register(ArcElement, Tooltip, Legend);

const CategoryChart = () => {
  const transactions = useExpenseStore((state) => state.transactions);
  const expenseTransactions = transactions.filter((t) => t.type === "expense");

  const categoryTotals = expenseTransactions.reduce((acc, transaction) => {
    acc[transaction.category] =
      (acc[transaction.category] || 0) + transaction.amount;
    return acc;
  }, {});

  const data = {
    labels: Object.keys(categoryTotals).map((categoryID) => {
      const category = CATEGORIES.expense.find((cat) => cat.id === categoryID);
      return category ? `${category.icon} ${category.name}` : categoryID;
    }),
    datasets: [
      {
        data: Object.values(categoryTotals),
        backgroundColor: [
          "#ef4444",
          "#f97316",
          "#eab308",
          "#22c55e",
          "#06b6d4",
          "#3b82f6",
          "#8b5cf6",
          "#ec4899",
        ],
        borderWidth: 0,
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          padding: 20,
          usePointStyle: true,
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            const value = new Intl.NumberFormat("es-VE", {
              style: "currency",
              currency: "VES",
            }).format(context.parsed);
            return `${context.label}: ${value}`;
          },
        },
      },
      maintainAspectRatio: false,
    },
  };

  return (
    <Card className="flex flex-col items-center justify-center">
      <h3 className="text-lg font-semibold text-slate-900 mb-6">
        Gastos por Categoría
      </h3>
      {expenseTransactions.length === 0 ? (
        <div className="flex items-center justify-center h-64 text-slate-500 dark:text-slate-400">
          <div className="text-center">
            <span className="text-4xl mb-2 block">📊</span>
            <p>No hay gastos para mostrar</p>
          </div>
        </div>
      ) : (
        <div className="h-64">
          <Doughnut data={data} options={options} />
        </div>
      )}
    </Card>
  );
};

export default CategoryChart;
