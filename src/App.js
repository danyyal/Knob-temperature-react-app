import "./App.scss";
import Knob from "./Components/Knob/Knob.tsx";

function App() {
  return (
    <Knob
      defaultMinTemperature={0}
      defaultMaxTemperature={100}
      defaultTargetTemperature={100}
    />
  );
}

export default App;
