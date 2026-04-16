export default function UploadSection({ onAnalyze, loading }) {
  const handleFile = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (ev) => onAnalyze(ev.target.result);
    reader.readAsText(file);
  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow text-center">
      <h2 className="text-xl font-bold mb-2 text-gray-700">Upload Bank Statement</h2>
      <p className="text-gray-400 text-sm mb-6">Paste text or upload a .txt / .csv file</p>
      <input type="file" accept=".txt,.csv" onChange={handleFile}
        className="block mx-auto mb-4 text-sm text-gray-500" />
      <p className="text-gray-400 text-xs">or</p>
      <textarea
        placeholder="Paste your bank statement here..."
        className="w-full mt-4 p-3 border rounded-xl text-sm h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
        id="pasteArea"
      />
      <button
        onClick={() => onAnalyze(document.getElementById('pasteArea').value)}
        disabled={loading}
        className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 disabled:opacity-50 transition"
      >
        {loading ? "Analyzing..." : "Analyze with AI ✨"}
      </button>
    </div>
  );
}