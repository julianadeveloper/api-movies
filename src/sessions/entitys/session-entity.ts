
export class userSessions{

user_id: string;
jwt: string;

constructor(Sessions: userSessions){
  this.user_id = Sessions.user_id;
  this.jwt = Sessions.jwt;
}
}