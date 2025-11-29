import { type TEnvVars } from "@/lib/env-schema";

declare global {
  namespace NodeJS {
    interface ProcessEnv extends TEnvVars {}
  }
}
