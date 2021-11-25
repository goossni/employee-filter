import React, { useState } from "react";
import Employee from "../models/employee";
import UI_COLORS from "../constants/ui-colors";

type employeeContextType = {
  employees: Employee[];
  activeEmployee: Employee | null;
  selectedEmployees: Employee[];
  setActiveId: (id: string) => void;
  selectEmployee: (employee: Employee) => void;
  removeEmployee: (id: string) => void;
};

export const EmployeesContext = React.createContext<employeeContextType>({
  employees: [],
  activeEmployee: null,
  selectedEmployees: [],
  setActiveId: (id: string) => {},
  selectEmployee: (employee: Employee) => {},
  removeEmployee: (id: string) => {},
});

const EmployeesContextProvider: React.FC = ({ children }) => {
  const [employees] = useState<Employee[]>([
    new Employee(
      "2",
      "Simon Buysse",
      "Frontend Developer",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elementum turpis quis tellus malesuada tempus. Donec eu congue ipsum, ut vehicula lectus. Integer ultricies tellus eu mauris fermentum, at luctus elit luctus. Nam sed eleifend arcu. Donec a dolor vel erat sagittis facilisis quis at mauris. Donec vitae.",
      [
        {
          title: "Soft Skills",
          values: ["Lorem", "Ipsum"],
        },
        {
          title: "Technical Skills",
          values: ["React", "And more!"],
        },
      ],
      UI_COLORS.RED
    ),
    new Employee(
      "3",
      "Bruno De Simpelaere",
      "UX Designer",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elementum turpis quis tellus malesuada tempus. Donec eu congue ipsum, ut vehicula lectus. Integer ultricies tellus eu mauris fermentum, at luctus elit luctus. Nam sed eleifend arcu. Donec a dolor vel erat sagittis facilisis quis at mauris. Donec vitae.",
      [
        {
          title: "Soft Skills",
          values: ["Lorem", "Ipsum"],
        },
        {
          title: "Technical Skills",
          values: ["Photoshop", "Illustrator"],
        },
      ],
      UI_COLORS.ORANGE
    ),
    new Employee(
      "6",
      "Bart Haedens",
      "Business Director Digital Experiences & Front-end",
      "Test test 123.",
      [
        {
          title: "Soft Skills",
          values: ["Lorem", "Ipsum"],
        },
      ],
      UI_COLORS.GREEN
    ),
    new Employee(
      "4",
      "Eline Van Gelder",
      "UX Designer",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elementum turpis quis tellus malesuada tempus. Donec eu congue ipsum, ut vehicula lectus. Integer ultricies tellus eu mauris fermentum, at luctus elit luctus. Nam sed eleifend arcu. Donec a dolor vel erat sagittis facilisis quis at mauris. Donec vitae.",
      [
        {
          title: "Soft Skills",
          values: ["Lorem", "Ipsum"],
        },
        {
          title: "Technical Skills",
          values: ["Photoshop", "Illustrator"],
        },
      ],
      UI_COLORS.ORANGE
    ),
    new Employee(
      "7",
      "Jane Doe",
      "Cleaning Lady",
      "Secretly a spy.",
      [
        {
          title: "Soft Skills",
          values: ["Charming", "Gathering Intelligence"],
        },
        { title: "Martial Arts", values: ["Karate", "Judo"] },
      ],
      UI_COLORS.BLUE
    ),
    new Employee(
      "1",
      "Nick Goossens",
      "Frontend Developer",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elementum turpis quis tellus malesuada tempus. Donec eu congue ipsum, ut vehicula lectus. Integer ultricies tellus eu mauris fermentum, at luctus elit luctus. Nam sed eleifend arcu. Donec a dolor vel erat sagittis facilisis quis at mauris. Donec vitae.",
      [
        {
          title: "Soft Skills",
          values: ["Direct", "Teamplayer", "Communicative"],
        },
        {
          title: "Technical Skills",
          values: ["React", "Vue.js"],
        },
      ],
      UI_COLORS.RED
    ),
    new Employee(
      "5",
      "Lode De Bot",
      "Resource Manager",
      "Test test 123.",
      [
        {
          title: "Soft Skills",
          values: ["Lorem", "Ipsum"],
        },
      ],
      UI_COLORS.GREEN
    ),
    new Employee(
      "8",
      "John Doe",
      "Cleaning Lad",
      "Also secretly a spy.",
      [
        {
          title: "Soft Skills",
          values: ["Charming", "Gathering Intelligence"],
        },
        { title: "Martial Arts", values: ["Karate", "Judo"] },
      ],
      UI_COLORS.BLUE
    ),
  ]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [selectedEmployees, setSelectedEmployees] = useState<Employee[]>([]);

  const setActiveIdHandler = (id: string) => {
    setActiveId(id);
  };

  const setSelectedIdsHandler = (newEmployee: Employee) => {
    if (!selectedEmployees.find((employee) => employee.id === newEmployee.id))
      setSelectedEmployees((prevEmployees) => [...prevEmployees, newEmployee]);
  };

  const setRemoveSelectedIdsHandler = (id: string) => {
    setSelectedEmployees((prevEmployees) =>
      prevEmployees.filter((employee) => employee.id !== id)
    );
  };

  const contextValue = {
    employees: employees,
    activeEmployee:
      employees.find((employee) => employee.id === activeId) || null,
    selectedEmployees: selectedEmployees,
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
