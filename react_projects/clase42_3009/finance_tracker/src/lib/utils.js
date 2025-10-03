export function cn(...inputs) {
  return inputs.filter(Boolean).join(" ");
}

export const formatCurrency = (amount) => {
  return new Intl.NumberFormat("es-VE", {
    style: "currency",
    currency: "VES",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(amount);
};

export const formatDate = (date) => {
  return new Intl.DateTimeFormat("es-VE", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(date));
};

export const exportToCSV = (transactions) => {
  const headers = ["Fecha", "Tipo", "Descripción", "Categoría", "Monto"];
  const csvContent = [
    headers.join(","),
    ...transactions.map((t) =>
      [
        t.date,
        t.type === "income" ? "Ingreso" : "Gasto",
        `"${t.description}"`,
        t.category,
        t.amount,
      ].join(",")
    ),
  ].join("\n");

  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `gastos-${new Date().toISOString().split("T")[0]}.csv`;
  link.click();
};
