class Employee {
  id: string;
  name: string;
  role: string;
  description: string;
  skills: { title: string; values: string[] }[];
  theme: {
    primaryColor: string;
    secondaryColor: string;
  };

  constructor(
    id: string,
    name: string,
    role: string,
    description: string,
    skills: {
      title: string;
      values: string[];
    }[],
    theme: {
      primaryColor: string;
      secondaryColor: string;
    }
  ) {
    this.id = id;
    this.name = name;
    this.role = role;
    this.description = description;
    this.skills = skills;
    this.theme = theme;
  }
}

export default Employee;
