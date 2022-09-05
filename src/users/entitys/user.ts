import { identity } from "rxjs";

export class User {
  constructor(User?: Partial<User>) {
    this.id = User?.id
    this.name = User?.name;
    this.email = User?.email;
    this.password = User?.password;
  }
  id: string;
  name: string;
  email: string;
  password: string;
}
