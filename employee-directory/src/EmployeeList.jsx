import { useEffect } from "react";

const EmployeeList = () => {
  useEffect(() => {
    const getEmployees = async() => {
      const response = await fetch('https://block-31and32-employees.onrender.com/');
      console.log(response);
    }
    getEmployees();
  })
  return (
    <h2>Listed Eployees!</h2>
  )
}

export default EmployeeList;