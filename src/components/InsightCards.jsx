export default function InsightCards({ insights, flagged }) {
  return (
    <div className="space-y-3">
      <div className="bg-white rounded-2xl p-6 shadow">
        <h3 className="font-bold text-gray-700 mb-3">💡 AI Insights</h3>
        {insights.map((tip, i) => (
          <p key={i} className="text-sm text-gray-600 mb-2">• {tip}</p>
        ))}
      </div>
      {flagged?.length > 0 && (
        <div className="bg-red-50 rounded-2xl p-6 shadow">
          <h3 className="font-bold text-red-500 mb-3">⚠️ Flagged Transactions</h3>
          {flagged.map((f, i) => (
            <p key={i} className="text-sm text-red-400 mb-2">• {f}</p>
          ))}
        </div>
      )}
    </div>
  );
}