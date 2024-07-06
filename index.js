const express = require("express");
const app = express();
const port = 3000;

let phones = [
  { number: "123-456-7890", owner: "Alice", type: "mobile" },
  { number: "987-654-3210", owner: "Bob", type: "home" },
];

let accounts = [
  { number: "111122223333", holder: "Charlie", balance: 5000 },
  { number: "444455556666", holder: "Dave", balance: 3000 },
];

let licenses = [
  { number: "D1234567", name: "Eve", expiryDate: "2026-04-01" },
  { number: "D7654321", name: "Frank", expiryDate: "2024-11-15" },
];

let employees = [
  { id: "E1234", name: "Grace", department: "Engineering" },
  { id: "E5678", name: "Hank", department: "Marketing" },
];

let orders = [
  { id: "ORD12345", customerName: "Ivy", totalAmount: 150 },
  { id: "ORD67890", customerName: "Jake", totalAmount: 200 },
];

// phones/find
function findPhoneNumber(num, phoneNumber) {
  return num.number === phoneNumber;
}
app.get("/phones/find", (req, res) => {
  let phoneNumber = req.query.phoneNumber;
  let result = phones.find((num) => findPhoneNumber(num, phoneNumber));
  res.json(result);
});

// accounts/find
function findAccountNumber(acc, accountNumber) {
  return (acc.number = accountNumber);
}
app.get("/accounts/find", (req, res) => {
  let accountNumber = req.query.accountNumber;
  let result = accounts.find((acc) => findAccountNumber(acc, accountNumber));
  res.json(result);
});

// licenses/find
function findLicenseNumber(lic, licenseNumber) {
  return lic.number === licenseNumber;
}
app.get("/licenses/find", (req, res) => {
  let licenseNumber = req.query.licenseNumber;
  let result = licenses.find((lic) => findLicenseNumber(lic, licenseNumber));
  res.json(result);
});

// employees/find
function findEmployeeById(emp, employeeId) {
  return emp.id === employeeId;
}
app.get("/employees/find", (req, res) => {
  let employeeId = req.query.employeeId;
  let result = employees.find((emp) => findEmployeeById(emp, employeeId));
  res.json(result);
});

// orders/find
function findOrderById(ord, orderId) {
  return ord.id === orderId;
}
app.get("/orders/find", (req, res) => {
  let orderId = req.query.orderId;
  let result = orders.find((ord) => findOrderById(ord, orderId));
  res.json(result);
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
