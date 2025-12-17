import "./Navbar.css";
export default function Navbar({dark,setDark}){   // ← confirm this exists
  return (
    <nav className="nav">
      <h2 className="logo">INDI-METRICS</h2>

      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/dashboard">Dashboard</a></li>
        <li><a href="/schemes">Schemes</a></li>
        <li><a href="/chatbot">Chatbot</a></li>
        <li><a href="/datasources">Data Sources</a></li>
      </ul>

      {/* ⚡ Dark Mode Toggle Button */}
      <button className="themeSwitch" onClick={()=>setDark(prev=>!prev)}>
  {dark ? "🌙 Dark" : "☀ Light"}
</button>

    </nav>
  )
}
