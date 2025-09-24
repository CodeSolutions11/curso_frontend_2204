export const sampleTransacions = [
    {
        id: "test-1",
        type: "income",
        amount: 50000,
        description: "Salario Septiembre",
        catetegory: "salary",
        date: "2025-09-01",
        createdAt: new Date().toISOString()
    },
    {
        id: "test-2",
        type: "expense",
        amount: 15000,
        description: "Supermecado",
        catetegory: "food",
        date: "2025-09-12",
        createdAt: new Date().toISOString()
    },
    {
        id: "test-3",
        type: "expense",
        amount: 8000,
        description: "Combustible",
        catetegory: "transport",
        date: "2025-01-17",
        createdAt: new Date().toISOString()
    },
]

export const loadTestData = addTransation => {
    sampleTransacions.forEach(t => {
        addTransation(transaction)
    })
}