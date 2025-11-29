import { z } from "zod";

export const EnvSchema = z.object({
  SMTP_HOST: z
    .string("SMTP_HOST env variable is required")
    .min(1, "SMTP_HOST env variable is required"),
  SMTP_USER: z
    .string("SMTP_USER env variable is required")
    .min(1, "SMTP_USER env variable is required"),
  SMTP_PASS: z
    .string("SMTP_PASS env variable is required")
    .min(1, "SMTP_PASS env variable is required"),
  SMTP_PORT: z.preprocess(
    Number,
    z.number("SMTP_PORT env variable is required")
  ),
});

export type TEnvVars = z.infer<typeof EnvSchema>;
