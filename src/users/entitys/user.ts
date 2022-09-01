export class User {
  constructor(User?: Partial<User>) {
    this._id = User?._id;
    this.name = User?.name;
    this.email = User?.email;
    this.password = User?.password;
  }

  _id: string;
  name: string;
  email: string;
  password: string;
}
