import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
const COLORS = ["#6366f1","#f59e0b","#10b981","#ef4444","#3b82f6","#8b5cf6"];

export default function SpendingChart({ categories }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow">
      <h3 className="font-bold text-gray-700 mb-4">Spending by Category</h3>
      <PieChart width={380} height={280}>
        <Pie data={categories} dataKey="amount" nameKey="name" cx="50%" cy="50%" outerRadius={100}>
          {categories.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
        </Pie>
        <Tooltip formatter={(v) => `$${v}`} />
        <Legend />
      </PieChart>
    </div>
  );
}