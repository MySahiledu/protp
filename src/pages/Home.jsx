import "./home.css";
import { Link } from "react-router-dom";

export default function Home(){
  return(
    <div className="hero">
      <h1>Unified Data Platform for India</h1>
      <p>Live Indicators • Schemes • Insights • Research</p>

      <div className="btn_wrap">
        <Link to="/dashboard" className="btn primary">Explore Dashboard</Link>
        <Link to="/schemes" className="btn outline">Find Schemes</Link>
      </div>
            <div className="features">
        <div className="fcard">📊 Live Data Dashboard</div>
        <div className="fcard">🎯 Smart Scheme Matcher</div>
        <div className="fcard">🤖 AI Insights Chatbot</div>
      </div>

    </div>
  )
}
