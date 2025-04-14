import React, { useState } from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";

const PayslipForm = () => {
  const [employeeName, setEmployeeName] = useState("");
  const [designation, setDesignation] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [month, setMonth] = useState("");
  const [basicSalary, setBasicSalary] = useState(0);
  const [hra, setHra] = useState(0);
  const [medicalAllowance, setMedicalAllowance] = useState(0);
  const [specialAllowance, setSpecialAllowance] = useState(0);

  // const [formData, setFormData] = useState({
  //   employeeName: "",
  //   designation: "",
  //   employeeId: "",
  //   month: "",
  //   basicSalary: "",
  //   hra: "",
  //   medicalAllowance: "",
  //   specialAllowance: "",
  // });

  const navigate = useNavigate();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      employeeName,
      designation,
      employeeId,
      month,
      basicSalary,
      hra,
      medicalAllowance,
      specialAllowance,
    };
    // console.log("data", data);
    employeeName &&
      designation &&
      employeeId &&
      month &&
      basicSalary &&
      hra &&
      medicalAllowance &&
      specialAllowance &&
      navigate("/paysliptemplateprintbtn", { state: { data } });
  };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  return (
    <div className="App">
      <h1>Pay Slip Generator</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="label-container">
          <label className="label">Employee Name:</label>
          <input
            type="text"
            name="employeeName"
            value={employeeName}
            onChange={(e) => setEmployeeName(e.target.value)}
            // onChange={handleSubmit}
          />
        </div>
        <div className="label-container">
          <label className="label-designation">Designation:</label>
          <input
            name="designation"
            type="text"
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
            // onChange={handleSubmit}
          />
        </div>
        <div className="label-container">
          <label className="label-designation">Employee Id:</label>
          <input
            type="text"
            value={employeeId}
            name="employeeId"
            onChange={(e) => setEmployeeId(e.target.value)}
            // onChange={handleSubmit}
          />
        </div>
        <div className="label-container">
          <label className="label-month">Month:</label>
          <select
            // type="text"
            value={month}
            name="month"
            onChange={(e) => setMonth(e.target.value)}
            // onChange={handleSubmit}
          >
            <option value="" disabled>
              Select a month
            </option>
            {months.map((month, index) => (
              <option key={index} value={month}>
                {month}
              </option>
            ))}
          </select>
        </div>
        <div className="label-container">
          <label className="label-basic">Basic Salary:</label>
          <input
            type="number"
            value={basicSalary}
            name={"basicSalary"}
            onChange={(e) => setBasicSalary(parseInt(e.target.value))}
          />
        </div>
        <div className="label-container">
          <label className="label-hra">HRA:</label>
          <input
            type="number"
            value={hra}
            name={"hra"}
            onChange={(e) => setHra(parseInt(e.target.value))}
          />
        </div>
        <div className="label-container">
          <label className="label">Medical Allowance:</label>
          <input
            type="number"
            value={medicalAllowance}
            name={"medicalAllowance"}
            onChange={(e) => setMedicalAllowance(parseInt(e.target.value))}
          />
        </div>
        <div className="label-container">
          <label className="label">Special Allowance:</label>
          <input
            type="number"
            value={specialAllowance}
            name={"specialAllowance"}
            onChange={(e) => setSpecialAllowance(parseInt(e.target.value))}
          />
        </div>
        <button className="payslip-btn text">Generate Pay Slip</button>
      </form>

      {/* {paySlip && (
        <div>
          <h2>Pay Slip</h2>
          <pre>{JSON.stringify(paySlip, null, 2)}</pre>
        </div>
      )} */}
    </div>
  );
};

export default PayslipForm;
