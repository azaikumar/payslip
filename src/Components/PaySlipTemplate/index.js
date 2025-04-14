import React from "react";
import { useLocation } from "react-router-dom";
// import { NumberToWords } from "number-to-words-converter";
// import { numberToRupee } from "number-to-rupee";
import { ToWords } from "to-words";
import "./index.css";

const PaySlipTemplate = () => {
  const { state } = useLocation();
  const { data } = state;
  const {
    employeeName,
    designation,
    employeeId,
    month,
    basicSalary,
    hra,
    medicalAllowance,
    specialAllowance,
  } = data;

  const totalEarnings = (
    basicSalary,
    hra,
    specialAllowance,
    medicalAllowance
  ) => {
    const grossSalary =
      parseInt(basicSalary) +
      parseInt(hra) +
      parseInt(specialAllowance) +
      parseInt(medicalAllowance);
    return grossSalary;
  };

  const totalDeductions = () => {
    const deductions = Math.floor((parseInt(basicSalary) * 12) / 100, 0) + 200;
    return deductions;
  };

  const earningsTotal = totalEarnings(
    basicSalary,
    hra,
    specialAllowance,
    medicalAllowance
  );

  // console.log("data type:", earningsTotal);

  const deductionsTotal = totalDeductions(basicSalary);
  const toWords = new ToWords();

  const grossSalaryInWords = toWords.convert(earningsTotal);
  const netPayInWords = toWords.convert(earningsTotal - deductionsTotal);

  // console.log("ntow:", result);

  // const amountInFigures = () => {
  //   if (isNaN()) {
  //     return <div>Error: Invalid amount</div>;
  //   }
  //   return new NumberToWords().convert();
  // };

  // const grossSalaryConvertToNum = parseInt(earningsTotal);
  // const grossSalaryInWords = amountInFigures(earningsTotal);

  // console.log("templatescreen", data);

  return (
    <div>
      <div class="container">
        <div className="company-name">
          <h2>ABC Company</h2>
        </div>
        <div className="header">
          <p>Newyork city, street no.542, United States of America</p>
        </div>
        <div class="header">
          <h2>Payslip</h2>
        </div>
        <hr />
        <div class="employee-details">
          <div>
            <p>
              <strong>Employee Name:</strong> {employeeName}
            </p>
            <p>
              <strong>Employee ID:</strong> {employeeId}
            </p>
          </div>
          <div>
            <p>
              <strong>Designation:</strong> {designation}
            </p>

            <p>
              <strong>Month:</strong> {month}
            </p>
          </div>
        </div>
        <hr />
        <table>
          <thead>
            <tr>
              <th>Description</th>
              <th>Amount (Rs.)</th>
              <th>Deductions</th>
              <th>Amount (Rs.)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Basic Salary</td>
              <td>{`${basicSalary}.00`}</td>
              <td>Provident Fund</td>
              <td>{`${Math.floor((basicSalary * 12) / 100, 0)}.00`}</td>
            </tr>
            <tr>
              <td>HRA</td>
              <td>{`${hra}.00`}</td>
              <td>Professional Tax</td>
              <td>200.00</td>
            </tr>
            <tr>
              <td>Medical Allowance</td>
              <td>{`${medicalAllowance}.00`}</td>
              <td>ESI</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Special Allowance</td>
              <td>{`${specialAllowance}.00`}</td>
              <td>IT</td>
              <td>-</td>
            </tr>
            {/* <!-- Add more rows for additional components --> */}
          </tbody>
          <thead>
            <tr>
              <th>Total Earnings</th>
              <th>{`${earningsTotal}.00`}</th>
              <th>Total Deductions</th>
              <th>{`${deductionsTotal}.00`}</th>
            </tr>
          </thead>
        </table>
        <hr />
        <div class="footer">
          <div>
            <p>
              <strong>Gross Salary:</strong> {`Rs. ${earningsTotal}.00`}
            </p>
            <p className="text-style">{`(Rupees ${grossSalaryInWords} Only)`}</p>
          </div>
          <div>
            <p>
              <strong>Net Pay:</strong>{" "}
              {`Rs. ${earningsTotal - deductionsTotal}.00`}
            </p>
            <p className="text-style">{`(Rupees ${netPayInWords} Only)`}</p>
          </div>
        </div>
      </div>
      {/* <div className="back-btn">
        <button>
          <Link to="/">Back to Home</Link>
        </button>
      </div> */}
    </div>
  );
};

export default PaySlipTemplate;
