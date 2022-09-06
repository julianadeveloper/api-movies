
export interface User {
  _id?: string;
  name: string;
  email: string;
  password: string;
  _doc?: {
    _id?: string;
    name: string;
    email: string;
    password: string;
  }
}
