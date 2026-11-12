import React, { useState } from "react";

export default function App() {
  const [inApp, setInApp] = useState(false);
  const [tasks, setTasks] = useState(["Configurer KANQKA", "Tester le dashboard"]);
  const [txt, setTxt] = useState("");

  if (inApp) {
    return (
      <div style={{ minHeight: "100vh", background: "#070b14", color: "#fff", padding: 32, fontFamily: "sans-serif" }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 24 }}>
          <h1>Tableau de bord KANQKA</h1>
          <button onClick={() => setInApp(false)} style={{ padding: "8px 16px", background: "#ef4444", color: "#fff", border: "none", borderRadius: 8, cursor: "pointer" }}>
            Quitter
          </button>
        </div>
        <div style={{ background: "#0f172a", padding: 20, borderRadius: 12 }}>
          <h3>Mes Tâches ({tasks.length})</h3>
          <input value={txt} onChange={(e) => setTxt(e.target.value)} placeholder="Nouvelle tâche..." style={{ padding: 8, marginRight: 8, borderRadius: 6 }} />
          <button onClick={() => { if (txt) { setTasks([...tasks, txt]); setTxt(""); } }} style={{ padding: "8px 16px", background: "#818cf8", border: "none", borderRadius: 6, fontWeight: "bold", cursor: "pointer" }}>
            Ajouter
          </button>
          <ul style={{ marginTop: 16 }}>
            {tasks.map((t, i) => <li key={i} style={{ padding: "6px 0" }}>{t}</li>)}
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", background: "#070b14", color: "#fff", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", fontFamily: "sans-serif", textAlign: "center", padding: 20 }}>
      <h1 style={{ fontSize: 42 }}>KANQKA</h1>
      <p style={{ color: "#94a3b8", marginBottom: 24 }}>AI-Powered Operating System</p>
      <button onClick={() => setInApp(true)} style={{ padding: "14px 28px", fontSize: 16, fontWeight: "bold", background: "#818cf8", color: "#090d16", border: "none", borderRadius: 10, cursor: "pointer" }}>
        Entrer dans l&apos;application
      </button>
    </div>
  );
}
