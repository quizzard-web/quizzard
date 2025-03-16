declare namespace NodeJS {
    export interface ProcessEnv {
      NODE_ENV: "development" | "production" | "local";
      GOOGLE_CLIENT_ID: string;
      GOOGLE_CLIENT_SECRET: string;
      SESSION_SECRET: string;
      DATABASE_URL: string;
      CLIENT_URL: string;
    }
}
