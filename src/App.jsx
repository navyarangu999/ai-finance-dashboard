import { useState } from "react";
import UploadSection from "./components/UploadSection";
import SummaryCards from "./components/SummaryCards";
import SpendingChart from "./components/SpendingChart";
import InsightCards from "./components/InsightCards";
import { analyzeStatement } from "./utils/claudeApi";

export default function App() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleAnalyze = async (text) => {
    if (!text.trim()) return;
    setLoading(true);
    setError(null);
    try {
      const data = await analyzeStatement(text);
      setResult(data);
    } catch (e) {
      setError("Analysis failed. Check your API key or try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800">💰 AI Finance Dashboard</h1>
          <p className="text-gray-400 mt-1">Powered by Claude AI</p>
        </div>
        <UploadSection onAnalyze={handleAnalyze} loading={loading} />
        {error && <p className="text-red-500 text-center">{error}</p>}
        {result && (
          <>
            <SummaryCards data={result} />
            <div className="grid grid-cols-2 gap-4">
              <SpendingChart categories={result.categories} />
              <InsightCards insights={result.insights} flagged={result.flagged} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}