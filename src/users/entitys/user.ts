export class User {
  constructor(User?: Partial<User>) {
    this.name = User?.name;
    this.email = User?.email;
    this.password = User?.password;
  }

  name: string;
  email: string;
  password: string;
}
