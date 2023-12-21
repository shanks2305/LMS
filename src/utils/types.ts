enum UserResponse {
  USER = "USER",
  ADMIN = "ADMIN",
  INSTRUCTOR = "INSTRUCTOR",
}

export interface IContextState {
  token: string | null;
  user: null | IUser;
}

export interface IUser {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
  role: UserResponse;
}
