import { Link } from "react-router-dom";
import useExpenseStore from "../../stores/useExpenseStore.js";
import { formatCurrency, formatDate } from "../../lib/utils.js";
import { CATEGORIES } from "../../lib/catagories.js";
import Card from "../ui/Card.jsx";
import { HiArrowRight } from "react-icons/hi";

const RecentTransactions = () => {
  const transactions = useExpenseStore((state) => state.transactions);
  const recentTransactions = transactions.slice(0, 5);

  const getCategoryInfo = (type, categoryID) => {
    return (
      CATEGORIES[type]?.find((cat) => cat.id === categoryID) || {
        name: categoryID,
        icon: "💰",
      }
    );
  };

  return (
    <Card>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Transacciones Recientes
        </h3>
        <Link
          to="/transactions"
          className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center gap-1"
        >
          Ver todas <HiArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="space-y-3">
        {recentTransactions.length === 0 ? (
          <p className="text-slate-500 dark:text-slate-400 text-center py-8">
            No hay transacciones aún
          </p>
        ) : (
          recentTransactions.map((transaction) => {
            const category = getCategoryInfo(
              transaction.type,
              transaction.category,
            );
            return (
              <div
                key={transaction.id}
                className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-700 rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{category.icon}</span>
                  <div>
                    <p className="font-medium text-slate-900 dark:text-white">
                      {transaction.description}
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {category.name} • {formatDate(transaction.date)}
                    </p>
                  </div>
                </div>
                <span
                  className={`font-semibold ${
                    transaction.type === "income"
                      ? "text-emerald-600 dark:text-emerald-400"
                      : "text-rose-600 dark:text-rose-400"
                  }`}
                >
                  {transaction.type === "income" ? "+" : "-"}
                  {formatCurrency(transaction.amount)}
                </span>
              </div>
            );
          })
        )}
      </div>
    </Card>
  );
};
export default RecentTransactions;
