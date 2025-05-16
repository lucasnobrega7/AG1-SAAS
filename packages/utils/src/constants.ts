import { isDev } from "./env";

export const INTERNAL_DASHBOARD_URL = isDev()
  ? "http://localhost:3001"
  : "https://agentesdeconversao.com.br/dashboard";

export const PUBLIC_DASHBOARD_URL = isDev()
  ? "http://localhost:3000/dashboard"
  : "https://agentesdeconversao.com.br/dashboard";
