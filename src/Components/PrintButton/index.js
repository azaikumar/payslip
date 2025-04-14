import React from "react";
import PaySlipTemplate from "../PaySlipTemplate";
import "./index.css";

const PrintButton = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div>
      <PaySlipTemplate />
      <button onClick={handlePrint} className="print-button">
        Print
      </button>
    </div>
  );
};

// const App = () => {
//   return (
//     <div>
//       <PrintButton />
//     </div>
//   );
// };

export default PrintButton;
