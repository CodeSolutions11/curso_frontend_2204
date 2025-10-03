import { Link } from "react-router-dom";
import useExpenseStore from "../../stores/useExpenseStore";
import { formatCurrency, formatDate } from "../../lib/utils";
import { CATEGORIES } from "../../lib/categories";
import Card from "../ui/Card";
import { HiArrowRight } from "react-icons/hi";

export default function RecentTransactions() {
  const { transactions } = useExpenseStore();
  const recentTransactions = transactions.slice(0, 5);

  const getCategoryInfo = (type, categoryId) => {
    return (
      CATEGORIES[type]?.find((cat) => cat.id === categoryId) || {
        name: categoryId,
        icon: "💰",
      }
    );
  };

  return (
    <Card>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
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
          <p className="text-gray-500 dark:text-gray-400 text-center py-8">
            No hay transacciones aún
          </p>
        ) : (
          recentTransactions.map((transaction) => {
            const category = getCategoryInfo(
              transaction.type,
              transaction.category
            );
            return (
              <div
                key={transaction.id}
                className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{category.icon}</span>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      {transaction.description}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {category.name} • {formatDate(transaction.date)}
                    </p>
                  </div>
                </div>
                <span
                  className={`font-semibold ${
                    transaction.type === "income"
                      ? "text-green-600 dark:text-green-400"
                      : "text-red-600 dark:text-red-400"
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
}
