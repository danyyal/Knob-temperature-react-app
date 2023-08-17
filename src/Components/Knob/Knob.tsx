import React, { useState } from "react";
import KnobLabel from "./KnobLabel/KnobLabel.tsx";
import "./Knob.scss";
import { getErrorMessage, getKnobPosition } from "../helper/helper.ts";
import InputControls from "./InputsControls/InputControls.tsx";

interface Props {
  defaultMinTemperature: number;
  defaultMaxTemperature: number;
  defaultTargetTemperature: number;
}
function Knob(props: Props) {
  const {
    defaultMinTemperature,
    defaultMaxTemperature,
    defaultTargetTemperature,
  } = props;

  const [temperatures, setTemperatures] = useState<{
    minTemperature: number;
    maxTemperature: number;
    targetTemperature: number;
  }>({
    minTemperature: defaultMinTemperature,
    maxTemperature: defaultMaxTemperature,
    targetTemperature: defaultTargetTemperature,
  });

  const knobStyle = getKnobPosition(
    temperatures.minTemperature,
    temperatures.maxTemperature,
    temperatures.targetTemperature
  );

  const isError = getErrorMessage(
    temperatures.minTemperature,
    temperatures.maxTemperature,
    temperatures.targetTemperature
  );
  return (
    <div className="container">
      <InputControls
        setTemperatures={setTemperatures}
        temperatures={temperatures}
      />
      {!isError && (
        <div className="knob">
          <div
            style={{
              transform: `translate(-50%) rotate(${knobStyle}deg)`,
            }}
            className="target-temp"
          ></div>
        </div>
      )}
      <KnobLabel temperature={temperatures.targetTemperature} />
      {isError && (
        <span className="temp-range-error">
          <strong>Note:</strong>
          {isError}
        </span>
      )}
    </div>
  );
}

export default Knob;
