class Employee {
  id: string;
  name: string;
  role: string;
  avatar: string;

  constructor(id: string, name: string, role: string, avatar: string) {
    this.id = id;
    this.name = name;
    this.role = role;
    this.avatar = avatar;
  }
}

export default Employee;
