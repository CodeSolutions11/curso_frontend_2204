export const sampleTransactions = [
  {
    id: "test-1",
    type: "income",
    amount: 50000,
    description: "Salario Septiembre",
    category: "salary",
    date: "2025-09-01",
    createdAt: new Date().toISOString(),
  },
  {
    id: "test-2",
    type: "expense",
    amount: 15000,
    description: "Supermecado",
    category: "food",
    date: "2025-09-12",
    createdAt: new Date().toISOString(),
  },
  {
    id: "test-3",
    type: "expense",
    amount: 8000,
    description: "Combustible",
    category: "transport",
    date: "2025-01-17",
    createdAt: new Date().toISOString(),
  },
];

export const loadTestData = (addTransaction) => {
  sampleTransactions.forEach((t) => {
    addTransaction(t);
  });
};

