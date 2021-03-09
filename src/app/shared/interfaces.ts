export interface IAdmin {
  email: string;
  password: string;
  returnSecureToken: boolean;
}

export interface IEnvironment {
  production: boolean;
  apiKey: string;
  fbDb: string;
}

export interface IGuide {
  id: number;
  title: "string"
}
