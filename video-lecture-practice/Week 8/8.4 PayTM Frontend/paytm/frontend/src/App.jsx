import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Singin";
import { Dashboard } from "./pages/Dashboard";
import { SendMoney } from "./pages/SendMoney";
import { Bulk } from "./pages/Bulk";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Dashboard />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/send" element={<SendMoney />} />
          <Route path="/bulk" element={<Bulk />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
