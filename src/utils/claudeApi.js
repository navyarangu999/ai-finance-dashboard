export async function analyzeStatement(statementText) {
  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": import.meta.env.VITE_CLAUDE_API_KEY,
      "anthropic-version": "2023-06-01",
      "anthropic-dangerous-direct-browser-access": "true"
    },
    body: JSON.stringify({
      model: "claude-sonnet-4-20250514",
      max_tokens: 1500,
      messages: [{
        role: "user",
        content: `Analyze this bank statement and return ONLY a JSON object with no extra text:
{
  "totalIncome": number,
  "totalExpenses": number,
  "savings": number,
  "categories": [{ "name": string, "amount": number }],
  "insights": ["tip1", "tip2", "tip3"],
  "flagged": ["suspicious transaction 1"]
}

Bank Statement:
${statementText}`
      }]
    })
  });

  const data = await response.json();
  const text = data.content[0].text;
  return JSON.parse(text.replace(/```json|```/g, "").trim());
}