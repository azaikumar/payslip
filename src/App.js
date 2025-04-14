import React from "react";
import PayslipForm from "./Components/PayslipForm";
import PrintButton from "./Components/PrintButton";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PayslipForm />} />
        {/* Render the PaySlipTemplate component */}

        <Route path="/paysliptemplateprintbtn" element={<PrintButton />} />
        {/* Render the PaySlipForm component */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
