"use client";
import * as z from "zod";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "../ui/field";
import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox";
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";

const staffRoles = [
  "Data entry",
  "Accounting and finance",
  "IT and Technical Support",
];

const staffingVolumes = [
  { label: "0 - 10", value: "0 - 10" },
  { label: "10 - 50", value: "10 - 50" },
  { label: "50 - 100", value: "50 - 100" },
  { label: "100 - 500", value: "100 - 500" },
  { label: "Other", value: "Other" },
] as const;

const quoteFormSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(1, "Full name is required")
    .refine((val) => val?.split(" ")?.length >= 2, {
      error: "Provide both your first and last names",
    }),
  companyName: z.string().trim().min(1, "Company name is required"),
  jobTitle: z.string().trim().min(1, "Job title is required"),
  roles: z.array(z.string()).min(1, "Choose at least one role"),
  message: z.string().optional(),
  staffingVolume: z.string().min(1, "Staffing volume is required"),
});

type TQuoteForm = z.infer<typeof quoteFormSchema>;
const resolver = zodResolver(quoteFormSchema);

export default function QuoteForm() {
  const form = useForm<TQuoteForm>({
    resolver,
  });

  const onSubmit: SubmitHandler<TQuoteForm> = (data) => {};

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <FieldSet>
        <FieldGroup>
          <Controller
            control={form.control}
            name="fullName"
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>Full name</FieldLabel>
                <Input
                  {...field}
                  id={field.name}
                  aria-invalid={fieldState.invalid}
                  placeholder="Enter full name"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          <Controller
            control={form.control}
            name="companyName"
            render={({ field, fieldState }) => (
              <Field aria-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>Company name</FieldLabel>
                <Input
                  {...field}
                  id={field.name}
                  aria-invalid={fieldState.invalid}
                  placeholder="Enter company name"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          <Controller
            control={form.control}
            name="jobTitle"
            render={({ field, fieldState }) => (
              <Field aria-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>Job title</FieldLabel>
                <Input
                  {...field}
                  id={field.name}
                  aria-invalid={fieldState.invalid}
                  placeholder="Enter job title"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          <Controller
            control={form.control}
            name="roles"
            render={({ field, fieldState }) => (
              <FieldSet>
                <FieldLegend>Which roles do you require?</FieldLegend>
                <FieldGroup>
                  {staffRoles.map((role) => (
                    <Field
                      key={role}
                      aria-invalid={fieldState.invalid}
                      orientation="horizontal"
                    >
                      <Checkbox
                        id={role}
                        name={field.name}
                        aria-invalid={fieldState.invalid}
                        checked={field.value?.includes(role)}
                        onCheckedChange={(checked) => {
                          const newValue = checked
                            ? [...(field.value ?? []), role]
                            : field.value.filter((value) => value !== role);
                          field.onChange(newValue);
                        }}
                      />
                      <FieldLabel htmlFor={role}>{role}</FieldLabel>
                    </Field>
                  ))}
                </FieldGroup>
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </FieldSet>
            )}
          />
          <Controller
            control={form.control}
            name="message"
            render={({ field, fieldState }) => (
              <Field aria-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name} aria-required>
                  Message
                </FieldLabel>
                <Textarea
                  {...field}
                  id={field.name}
                  aria-invalid={fieldState.invalid}
                  placeholder="Enter a message"
                  className="min-h-32"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          <Controller
            control={form.control}
            name="staffingVolume"
            render={({ field, fieldState }) => (
              <Field aria-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name} aria-required>
                  Staffing volume
                </FieldLabel>
                <Select
                  name={field.name}
                  value={field.value}
                  onValueChange={field.onChange}
                >
                  <SelectTrigger
                    id={field.name}
                    aria-invalid={fieldState.invalid}
                    className="min-w-32"
                  >
                    <SelectValue placeholder="Select one" />
                  </SelectTrigger>
                  <SelectContent position="item-aligned">
                    {staffingVolumes.map((volume) => (
                      <SelectItem key={volume.value} value={volume.value}>
                        {volume.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </FieldGroup>
        <div>
          <Button>Get Quote</Button>
        </div>
      </FieldSet>
    </form>
  );
}
