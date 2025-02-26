import { useEffect } from "react";

const EmployeeList = () => {
  useEffect(() => {
    const getEmployees = async() => {
      const response = await fetch(' --- link from render');
      console.log(response);
    }
    getEmployees();
  })
  return (
    <h2>Listed Eployees!</h2>
  )
}

export default EmployeeList;