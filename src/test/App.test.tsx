import { describe, it, expect } from "vitest"; import { render, screen } from "@testing-library/react"; import { MemoryRouter } from "react-router-dom";
import Sidebar from "../components/Sidebar"; import DatasetsPage from "../pages/DatasetsPage"; import TrainingRunsPage from "../pages/TrainingRunsPage";
import ModelsPage from "../pages/ModelsPage"; import SettingsPage from "../pages/SettingsPage";
function wrap(ui: React.ReactElement) { return render(<MemoryRouter>{ui}</MemoryRouter>); }
describe("Sidebar", () => { it("renders nav items", () => { wrap(<Sidebar/>); expect(screen.getByText("Fine-Tune Studio")).toBeInTheDocument(); }); });
describe("Pages", () => {
  it("DatasetsPage renders", () => { wrap(<DatasetsPage/>); expect(screen.getByText("Customer Support Q&A")).toBeInTheDocument(); });
  it("TrainingRunsPage renders", () => { wrap(<TrainingRunsPage/>); expect(screen.getByText("Llama-3-8B-Support")).toBeInTheDocument(); });
  it("ModelsPage renders", () => { wrap(<ModelsPage/>); expect(screen.getByText("Mistral-Coder-v2")).toBeInTheDocument(); });
  it("SettingsPage renders", () => { wrap(<SettingsPage/>); expect(screen.getByText("Compute Provider")).toBeInTheDocument(); });
});
