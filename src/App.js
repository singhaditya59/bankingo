
import './App.css';
import PlayNow from './pages/PlayNow';
import PowerYourBank from "./pages/PowerYourBank";
import SuccessPage from "./pages/SuccessPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PlayNow />} />
      <Route path="/power-your-bank" element={<PowerYourBank />} />
      <Route path="/success" element={<SuccessPage />} />
    </Routes>
  );
}

export default App;
