import React, { useState } from "react";
import Employee from "../models/employee";

type employeeContextType = {
  items: Employee[];
  activeId: string | null;
  selectedIds: string[];
  setActiveId: (id: string) => void;
  selectEmployee: (id: string) => void;
  removeEmployee: (id: string) => void;
};

export const EmployeesContext = React.createContext<employeeContextType>({
  items: [],
  activeId: "",
  selectedIds: [],
  setActiveId: (id: string) => {},
  selectEmployee: (id: string) => {},
  removeEmployee: (id: string) => {},
});

const EmployeesContextProvider: React.FC = ({ children }) => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const setActiveIdHandler = (id: string) => {
    setActiveId(id);
  };

  const setSelectedIdsHandler = (id: string) => {
    setSelectedIds([...selectedIds, id]);
  };

  const setRemoveSelectedIdsHandler = (id: string) => {
    setSelectedIds(selectedIds.filter((selectedId) => selectedId !== id));
  };

  const contextValue = {
    items: employees,
    activeId: activeId,
    selectedIds: selectedIds,
    setActiveId: setActiveIdHandler,
    selectEmployee: setSelectedIdsHandler,
    removeEmployee: setRemoveSelectedIdsHandler,
  };

  return (
    <EmployeesContext.Provider value={contextValue}>
      {children}
    </EmployeesContext.Provider>
  );
};

export default EmployeesContextProvider;
