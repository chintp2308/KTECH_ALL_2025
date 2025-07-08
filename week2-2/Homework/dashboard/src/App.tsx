import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import OverviewPage from "./pages/OverviewPage";
import PatientsPage from "./pages/PatientsPage";
import DoctorPage from "./pages/DoctorPage";
import DepartmentsPage from "./pages/DepartmentsPage";
import HistoryPage from "./pages/HistoryPage";
import SettingsPage from "./pages/SettingsPage";
import Sidebar from "./components/Sidebar";
import { SquarePlus } from "lucide-react";
import MapPage from "./pages/MapPage";
import Header from "./components/Header";

function App() {
  return (
    <div className=" w-full h-screen bg-gray-100 p-5 gap-5 flex flex-row">
      <BrowserRouter>
        <div className="flex flex-row gap-5">
          <div className="flex flex-col gap-5 border-r shadow-md ">
            <div className="flex flex-row gap-4 items-center ">
              <SquarePlus className="w-10 h-10 text-blue-500" />
              <h1 className="text-4xl font-bold ">H-care</h1>
            </div>
            <Sidebar />
          </div>
        </div>
        <div className="flex flex-col gap-5 w-full">
          <Header />
          <Routes>
            <Route path="/" element={<OverviewPage />} />
            <Route path="/patients" element={<PatientsPage />} />
            <Route path="/map" element={<MapPage />} />
            <Route path="/doctors" element={<DoctorPage />} />
            <Route path="/departments" element={<DepartmentsPage />} />
            <Route path="/history" element={<HistoryPage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
