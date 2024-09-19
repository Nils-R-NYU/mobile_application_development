import ButtonPage from "./pages/ButtonPage";
import AccordionPage from "./pages/AccordionPage";
import DropdownPage from "./pages/DropdownPage";
import IconSelectorPage from "./pages/IconSelectorPage";
import ModalPage from "./pages/ModalPage";
import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";

export default function App() {
  return (
    <div className="container mx-auto grid grid-cols-6 gap-4">
      <NavBar />
      <div className="col-span-5 relative p-4">
        <Routes>
          <Route path="/" element={<ButtonPage />} />
          <Route path="accordion" element={<AccordionPage />} />
          <Route path="modal" element={<ModalPage />} />
          <Route path="dropdown" element={<DropdownPage />} />
          <Route path="iconSelector" element={<IconSelectorPage />} />
        </Routes>
      </div>
    </div>
  );
}
