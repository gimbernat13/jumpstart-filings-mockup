import logo from "./logo.svg";
import "./App.scss";
import { InfoCard } from "./Components/InfoCard/InfoCard";

function App() {
  return (
    <div className="App">
      <div className="info-cards">
        <InfoCard title="Default State" />
        <InfoCard title="Hover State" isHovered={true} />
      </div>
    </div>
  );
}

export default App;
