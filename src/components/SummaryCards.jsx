export default function SummaryCards({ data }) {
  const cards = [
    { label: "Total Income", value: `$${data.totalIncome}`, color: "text-green-600" },
    { label: "Total Expenses", value: `$${data.totalExpenses}`, color: "text-red-500" },
    { label: "Savings", value: `$${data.savings}`, color: "text-blue-600" },
  ];
  return (
    <div className="grid grid-cols-3 gap-4">
      {cards.map((c) => (
        <div key={c.label} className="bg-white rounded-2xl p-6 shadow text-center">
          <p className="text-gray-400 text-sm">{c.label}</p>
          <p className={`text-2xl font-bold mt-1 ${c.color}`}>{c.value}</p>
        </div>
      ))}
    </div>
  );
}