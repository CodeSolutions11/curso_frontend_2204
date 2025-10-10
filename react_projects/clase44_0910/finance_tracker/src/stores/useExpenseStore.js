import { create } from "zustand";
import { persist } from "zustand/middleware";

const useExpenseStore = create(
  persist(
    (set) => ({
      transactions: [],
      filters: {
        category: "all",
        type: "all",
        dateRange: "all",
      },

      // Actions
      addTransaction: (transaction) =>
        set((state) => ({
          transactions: [
            {
              ...transaction,
              id: crypto.randomUUID(),
              createdAt: new Date().toISOString(),
            },
            ...state.transactions,
          ],
        })),

      deleteTransaction: (id) =>
        set((state) => ({
          transactions: state.transactions.filter((t) => t.id !== id),
        })),

      updateFilters: (newFilters) =>
        set((state) => ({
          filters: { ...state.filters, ...newFilters },
        })),
    }),
    {
      name: "expense-tracker-storage",
      version: 2,
    },
  ),
);

// Selectors
/*  ❌Errores - Error Critico
 * Problema principal: Los selectores crean nuevas funciones en cada render
 * Causa del Bucle: zustand detecta constantes en las referencia de funcion
 * Error lógico: acc[t.type] += t.amount falla cuando acc[t.type] es undefined
 */
/* Solucion
 * Eliminar o comentar los selectores
 * Los cálculos se harán directamente en los componentes
 */
/*
export const useBalance = () =>
  useExpenseStore((state) => {
    const totals = state.transactions.reduce(
      (acc, t) => {
        acc[t.type] += t.amount; // Error: acc[t.type] puede ser undefined
        return acc;
      },
      { income: 0, expense: 0 },
    );
    return totals.income - totals.expense;
  });

export const useTotals = () =>
  useExpenseStore((state) =>
    state.transactions.reduce(
      (acc, t) => {
        acc[t.type] += t.amount; // Error: mismo error que en useBalance
        return acc;
      },
      { income: 0, expense: 0 },
    ),
  );


export const useFilteredTransactions = () =>
  useExpenseStore((state) =>
    state.transactions.filter((t) => {
      if (state.filters.type !== "all" && t.type !== state.filters.type)
        return false;
      if (
        state.filters.category !== "all" &&
        t.category !== state.filters.category
      )
        return false;
      return true;
    }),
  );
*/
export default useExpenseStore;
