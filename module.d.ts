declare namespace NodeJS {
  export interface ProcessEnv {
    SERVER_PORT: number;
    BD_PORT: number;
    BD_USERNAME: string;
    BD_PASSWORD: string;
    BD_NAME: string;
    JWT_SECRET_KEY: string;
    JWT_REFRESH_TOKEN_KEY: string;
  }
}
