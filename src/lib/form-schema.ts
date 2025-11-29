import * as z from "zod";

export const QuoteFormSchema = z.object({
  fullName: z
    .string("Full name is required")
    .trim()
    .min(1, "Full name is required")
    .refine((val) => val?.split(" ")?.length >= 2, {
      error: "Provide both your first and last names",
    }),
  email: z.email("Email is required"),
  companyName: z
    .string("Company name is required")
    .trim()
    .min(1, "Company name is required"),
  jobTitle: z
    .string("Job title is required")
    .trim()
    .min(1, "Job title is required"),
  roles: z
    .array(z.string(), "Choose at least one role")
    .min(1, "Choose at least one role"),
  message: z.string().optional(),
  staffingVolume: z
    .string("Staffing volume is required")
    .min(1, "Staffing volume is required"),
});

export type TQuoteForm = z.infer<typeof QuoteFormSchema>;
