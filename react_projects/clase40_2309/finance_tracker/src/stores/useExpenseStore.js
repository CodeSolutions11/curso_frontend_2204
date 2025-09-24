import { create } from "zustand";
import { persist } from "zustand/middleware";

const useExpenseStore = create(
  persist((set, get) => ({
    transactions: [],
    filters: {
      category: "all",
      type: "all",
      dateRange: "all",
    },
    //Actions
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
    deleteTransaction: id => 
        set(state => ({
            transactions: state.transactions.filters(t => t.id !== id)
        })),
    updateFilters: newFilters => 
        set(state => ({
            filters: { ...state.filters,  ...newFilters}
        }))
  })),
  {
    name: "expense_tracker_storage",
    version: 1
  }

);

export default useExpenseStore


// Selectors
export const useBalance = () => useExpenseStore(state => {
  const totals = state.transactions.reduce(
    (acc, t)=>{
      acc[t.type] += t.amount
      return acc
    }, { income: 0, expense: 0})
    return totals.income - totals.expense
})

export const useTotals = ()=> useExpenseStore(state => 
  state.transactions.reduce(
    (acc, t) => {
      acc[t.type]  += t.amount
      return acc
    },{ income: 0, expense: 0}
  )
)

export const useFilteredTransactions = () => useExpenseStore(state => 
  state.transactions.filter(t => {
    if (state.filters.type !== "all" && t.type !== state.filters.type) return false
    if (state.filters.category !== "all" && t.category !== state.filters.category) return false
    return true
  })
)