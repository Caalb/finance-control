export interface IRegisterUser {
  name: string;
  email: string;
  username: string;
  password: string;
  confirm_password: string;
}

export interface IRegisterUserResponse {
  data: any;
  success: boolean;
}

export interface IUserLogin {
  username?: string;
  password: string;
  email?: string;
}

export interface IUserLoginResponse {
  data: any;
  success: boolean;
}

export interface IUserLogoutResponse {
  data: any;
  success: boolean;
}
