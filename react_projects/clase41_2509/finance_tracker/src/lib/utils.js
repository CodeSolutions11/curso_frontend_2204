export const cn = (...inputs) => inputs.filter(Boolean).join(" ");

export const formatCurrency = (amount) => {
  return new Intl.NumberFormat("es-VE", {
    style: "currency",
    currency: "VES",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(amount);
};

export const formatDate = date => {
    return new Intl.DateTimeFormat("es-VE", {
        day: "2-digit",
        month: "short",
        year: "numeric"
    }).format(new Date(date))
}

export const exportCSV = transactions =>{
    const headers = ['Fecha', 'Tipo', 'Description', 'Categoria', 'Monto']
    const csvContent = [
        headers.join(","),
        ...transactions.map(t => [
            t.date,
            t.type === "income" ? "Ingreso" : "Gasto",
            `"${t.description}"`,
            t.category,
            t.amount
        ].join(','))
    ].join('\n')
    
    const blob = new Blob([csvContent], {type: "text/csv;charset=utf-8;"})
    const link = document.createElement("a")
    link.href = URL.createObjectURL(blob)
    link.download = `transacciones-${new Date().toISOString().split("T")[0]}.csv`
    link.click()
}

