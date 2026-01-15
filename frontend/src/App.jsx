import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Accesschoice from "./pages/Access/Accesschoice";
import DeliveryAccess from "./pages/Access/DeliveryAccess";
import PickupAccess from "./pages/Access/PickupAccess";

// If you already have a Layout component, wrap Routes with it
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/access" element={<Accesschoice />} />
        <Route path="/access/delivery" element={<DeliveryAccess />} />
        <Route path="/access/pickup" element={<PickupAccess />} />
      </Routes>
    </Router>
  );
}
