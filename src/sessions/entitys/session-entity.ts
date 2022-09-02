
export class Sessions{
  constructor(Sessions?: Partial<Sessions>){
    this.user_id = Sessions.user_id;
    this.jwt = Sessions.jwt;
  }

  
user_id: string;
jwt: string;

}