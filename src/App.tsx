import "./styles.css";
import TrafficLight from "./components/TrafficLight";

export default function App() {
    return (
        <div className="App">
            <TrafficLight initialValue={0} />
            <TrafficLight initialValue={1} />
        </div>
    );
}
