import "./IndicatorCard.css";
import { LineChart, Line, ResponsiveContainer } from "recharts";

export default function IndicatorCard({ data, style }) {

  // random sparkline pts — later backend se real data aayega
  const graphData = [
    {pv: data.value - 3},
    {pv: data.value - 1.5},
    {pv: data.value - 2},
    {pv: data.value - 0.5},
    {pv: data.value},
  ];

  return(
    <div className="indi_card" style={style}>

      {/* Title */}
      <h3 className="indi_name">{data.name}</h3>

      {/* Sparkline Super Mini Graph */}
      <div className="sparkline">
        <ResponsiveContainer width="100%" height="60%">
          <LineChart data={graphData}>
            <Line type="monotone" dataKey="pv" stroke="#00A884" strokeWidth={3}/>
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Value Big Number */}
      <div className="indi_value">
        {data.value}<span>{data.unit}</span>
      </div>

      <p className="indi_sector">{data.sector}</p>
      <span className="indi_update">Updated: {data.updated}</span>

    </div>
  );
}
