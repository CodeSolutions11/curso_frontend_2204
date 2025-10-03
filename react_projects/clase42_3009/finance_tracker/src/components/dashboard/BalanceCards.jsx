import { Suspense } from "react";
import { useBalance, useTotals } from "../../stores/useExpenseStore";
import { formatCurrency } from "../../lib/utils";
import Card from "../ui/Card";

function BalanceContent() {
  const balance = useBalance();
  /*  const totals = {
    income: 80,
    expense: 100,
  };*/
  const totals = useTotals();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <Card className="text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20"></div>
        <div className="relative">
          <div className="flex items-center justify-center mb-4">
            <div className="p-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg shadow-blue-500/25">
              <span className="text-3xl">💰</span>
            </div>
          </div>
          <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-2">
            Balance Total
          </h3>
          <p
            className={`text-4xl font-bold ${
              balance >= 0
                ? "text-emerald-600 dark:text-emerald-400"
                : "text-rose-600 dark:text-rose-400"
            }`}
          >
            {formatCurrency(balance)}
          </p>
        </div>
      </Card>

      <Card className="text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-green-500/10 dark:from-emerald-500/20 dark:to-green-500/20"></div>
        <div className="relative">
          <div className="flex items-center justify-center mb-4">
            <div className="p-4 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl shadow-lg shadow-emerald-500/25">
              <span className="text-3xl">📈</span>
            </div>
          </div>
          <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-2">
            Ingresos
          </h3>
          <p className="text-4xl font-bold text-emerald-600 dark:text-emerald-400">
            {formatCurrency(totals.income)}
          </p>
        </div>
      </Card>

      <Card className="text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-500/10 to-red-500/10 dark:from-rose-500/20 dark:to-red-500/20"></div>
        <div className="relative">
          <div className="flex items-center justify-center mb-4">
            <div className="p-4 bg-gradient-to-br from-rose-500 to-rose-600 rounded-2xl shadow-lg shadow-rose-500/25">
              <span className="text-3xl">📉</span>
            </div>
          </div>
          <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-2">
            Gastos
          </h3>
          <p className="text-4xl font-bold text-rose-600 dark:text-rose-400">
            {formatCurrency(totals.expense)}
          </p>
        </div>
      </Card>
    </div>
  );
}

export default function BalanceCards() {
  return (
    <Suspense
      fallback={
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="animate-pulse h-40 bg-slate-200 dark:bg-slate-700 rounded-xl"
            />
          ))}
        </div>
      }
    >
      <BalanceContent />
    </Suspense>
  );
}

/*
import { Suspense } from "react";
import { useBalance, useTotals } from "../../stores/useExpenseStore";
import { formatCurrency } from "../../lib/utils";
import Card from "../ui/Card";

const BalanceContent = () => {
  const balance = useBalance();
  const totals = useTotals();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <Card className="text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20"></div>
        <div className="relative">
          <div className="flex items-center justify-center mb-4">
            <div className="p-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg shadow-blue-500/25">
              <span className="text-3xl">💰</span>
            </div>
          </div>
          <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-2">
            Balance Total
          </h3>
          <p
            className={`text-4xl font-bold ${
              balance >= 0
                ? "text-emerald-600 dark:text-emerald-400"
                : "text-rose-600 dark:text-rose-400"
            }`}
          >
            {formatCurrency(balance)}
          </p>
        </div>
      </Card>

      <Card className="text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-green-500/10 dark:from-emerald-500/20 dark:to-green-500/20"></div>
        <div className="relative">
          <div className="flex items-center justify-center mb-4">
            <div className="p-4 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl shadow-lg shadow-emerald-500/25">
              <span className="text-3xl">📈</span>
            </div>
          </div>
          <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-2">
            Ingresos
          </h3>
          <p className="text-4xl font-bold text-emerald-600 dark:text-emerald-400">
            {formatCurrency(totals.income)}
          </p>
        </div>
      </Card>

      <Card className="text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-500/10 to-red-500/10 dark:from-rose-500/20 dark:to-red-500/20"></div>
        <div className="relative">
          <div className="flex items-center justify-center mb-4">
            <div className="p-4 bg-gradient-to-br from-rose-500 to-rose-600 rounded-2xl shadow-lg shadow-rose-500/25">
              <span className="text-3xl">📉</span>
            </div>
          </div>
          <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-2">
            Gastos
          </h3>
          <p className="text-4xl font-bold text-rose-600 dark:text-rose-400">
            {formatCurrency(totals.expense)}
          </p>
        </div>
      </Card>
    </div>
  );
};

const BalanceCard = () => {
  return (
    <Suspense
      fallback={
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="animate-pulse h-40 bg-slate-200 dark:bg-slate-700 rounded-xl"
            />
          ))}
        </div>
      }
    >
      <BalanceContent />
    </Suspense>
  );
};

export default BalanceCard;
*/
