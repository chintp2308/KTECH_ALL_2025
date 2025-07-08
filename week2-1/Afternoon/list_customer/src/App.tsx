import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListCustomer from "./components/CRUD/ListCustomer";
import UpdateCustomer from "./components/CRUD/UpdateCustomer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListCustomer />} />
        <Route path="/update-customer/:id" element={<UpdateCustomer />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
