class Employee {
  id: string;
  name: string;
  role: string;
  theme: {
    primaryColor: string;
    secondaryColor: string;
  };

  constructor(
    id: string,
    name: string,
    role: string,
    theme: {
      primaryColor: string;
      secondaryColor: string;
    }
  ) {
    this.id = id;
    this.name = name;
    this.role = role;
    this.theme = theme;
  }
}

export default Employee;
