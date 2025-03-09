declare namespace NodeJS {
    export interface ProcessEnv {
      NODE_ENV: "development" | "production" | "local";
      GOOGLE_CLIENT_ID: string;
      GOOGLE_CLIENT_SECRET: string;
      JWT_SECRET: string;
    }
}
