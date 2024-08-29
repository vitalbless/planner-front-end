export interface IAuthForm {
  email: string;
  password: string;
}
interface IUser {
  id: number;
  name?: string;
  email: string;
  workInterval?: number;
  breakInterval?: number;
  intervalsCount?: number;
}

export interface IAuthResponse {
  accessToken: string;
  user: IUser;
}
