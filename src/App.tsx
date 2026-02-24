import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import DatasetsPage from "./pages/DatasetsPage";
import TrainingRunsPage from "./pages/TrainingRunsPage";
import ModelsPage from "./pages/ModelsPage";
import SettingsPage from "./pages/SettingsPage";
export default function App() {
  return (<BrowserRouter>
    <div style={{display:"flex"}}>
      <Sidebar />
      <main style={{marginLeft:"var(--sidebar-width)",flex:1,minHeight:"100vh"}}><Routes>
        <Route path="/" element={<DatasetsPage />} /> <Route path="/training" element={<TrainingRunsPage />} />
        <Route path="/models" element={<ModelsPage />} /> <Route path="/settings" element={<SettingsPage />} />
      </Routes></main>
    </div>
  </BrowserRouter>);
}
