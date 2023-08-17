import React from "react";
import "./KnobLabel.scss";

interface Props {
  temperature: number;
  tempUnit?: "C" | "F";
}
function KnobLabel(props: Props) {
  const { temperature, tempUnit = "C" } = props;
  return (
    <div className="layout">
      <span className="temp-val">{temperature}&deg;</span>
      <span className="temp-unit">{tempUnit}</span>
    </div>
  );
}

export default KnobLabel;
