import { useState } from "react";
import IndicatorCard from "../ui/IndicatorCard";
import "./DashboardUI.css";   // this must match file name

export default function Dashboard(){

  const sectors = ["All","Economy","Education","Health","Jobs","Agriculture"];
  const [active,setActive] = useState("All");

  const indicators = [
    { name:"GDP Growth", value:6.8, unit:"%", sector:"Economy", updated:"2024" },
    { name:"Literacy Rate", value:77.7, unit:"%", sector:"Education", updated:"2023" },
    { name:"Life Expectancy", value:70.1, unit:"yrs", sector:"Health", updated:"2022" },
    { name:"Unemployment", value:5.4, unit:"%", sector:"Jobs", updated:"2024" },
    { name:"Agriculture Share", value:18.3, unit:"%", sector:"Agriculture", updated:"2023" }
  ];

  const filtered = active==="All" ? indicators : indicators.filter(i=>i.sector===active);

  return (
    <div className="dash_container">

      <h1 className="dash_title">India Live Dashboard</h1>
      <p className="dash_sub">National Indicators — Visual, Simple & Updated</p>

      {/* FILTER BUTTONS */}
      <div className="filter_tabs">
        {sectors.map(s=>(
          <button key={s}
            className={active===s?"tab active":"tab"}
            onClick={()=>setActive(s)}
          >{s}</button>
        ))}
      </div>

      {/* CARD SECTION */}
      <div className="card_grid">
        {filtered.map((d,i)=>(
          <IndicatorCard key={i} data={d} style={{"--i":i}}/>
        ))}
      </div>

    </div>
  );
}
