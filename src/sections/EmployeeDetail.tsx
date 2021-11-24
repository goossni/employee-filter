import React from "react";

type employeeDetailType = {
  className?: string;
};

const EmployeeDetail: React.FC<employeeDetailType> = ({ className }) => {
  return <section className={`${className && className}`}></section>;
};

export default EmployeeDetail;
