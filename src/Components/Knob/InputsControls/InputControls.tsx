import React, { ChangeEventHandler } from "react";
import { DebouncedFunc, debounce } from "lodash";
import "./InputControls.scss";
interface Temp {
  minTemperature: number;
  maxTemperature: number;
  targetTemperature: number;
}
interface Props {
  temperatures: Temp;
  setTemperatures: React.Dispatch<React.SetStateAction<Temp>>;
}

function InputControls(props: Props) {
  const { setTemperatures, temperatures } = props;
  const onChange: DebouncedFunc<any> = debounce(
    (e: { target: { name: string; value: string } }) => {
      console.log(e.target.value, "e.target.value", typeof e.target.value);
      setTemperatures({
        ...temperatures,
        [e.target.name]: parseInt(e.target.value.length ? e.target.value : "0"),
      });
    },
    1000
  );
  return (
    <div className="temp-input-form">
      <h3>Initalized input fields with default values</h3>
      <label className="minTemperature" htmlFor="minTemperature">
        Minimum temperature:
        <input
          defaultValue={temperatures.minTemperature}
          onChange={onChange}
          type="number"
          name="minTemperature"
        />
      </label>
      <label className="maxTemperature" htmlFor="maxTemperature">
        Maximum temperature:
        <input
          defaultValue={temperatures.maxTemperature}
          onChange={onChange}
          type="number"
          name="maxTemperature"
        />
      </label>
      <label className="targetTemperature" htmlFor="targetTemperature">
        Target temperature:
        <input
          defaultValue={temperatures.targetTemperature}
          onChange={onChange}
          type="number"
          name="targetTemperature"
        />
      </label>
    </div>
  );
}

export default InputControls;
