/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
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
import { QuoteFormSchema, TQuoteForm } from "@/lib/form-schema";
import { useState } from "react";
import { TQuoteRes } from "@/lib/types";

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

const resolver = zodResolver(QuoteFormSchema);

export default function QuoteForm() {
  const form = useForm<TQuoteForm>({
    resolver,
  });

  const [isSendingQuote, setIsSendingQuote] = useState(false);
  const [quoteRes, setQuoteRes] = useState<TQuoteRes>();

  const onSubmit: SubmitHandler<TQuoteForm> = async (data) => {
    try {
      setIsSendingQuote(true);
      const res = await fetch("/api/quote", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });
      const quoteRes: TQuoteRes = await res.json();
      setQuoteRes(quoteRes);
      form.reset({
        companyName: "",
        email: "",
        fullName: "",
        jobTitle: "",
        message: "",
        roles: [],
        staffingVolume: "",
      });
    } catch (error: any) {
      setQuoteRes(error);
    } finally {
      setIsSendingQuote(false);
    }
  };

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="py-8 px-4 bg-[rgba(0,15,12,0.7)] backdrop-blur-[92px] rounded-2xl"
    >
      <FieldSet>
        <FieldGroup>
          <Controller
            control={form.control}
            name="fullName"
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel className="text-base" htmlFor={field.name}>
                  Full name
                </FieldLabel>
                <Input
                  className="placeholder:text-[#BABABA] placeholder:font-medium"
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
            name="email"
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel className="text-base" htmlFor={field.name}>
                  Email
                </FieldLabel>
                <Input
                  className="placeholder:text-[#BABABA] placeholder:font-medium"
                  {...field}
                  id={field.name}
                  aria-invalid={fieldState.invalid}
                  placeholder="Enter email"
                  type="email"
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
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel className="text-base" htmlFor={field.name}>
                  Company name
                </FieldLabel>
                <Input
                  className="placeholder:text-[#BABABA] placeholder:font-medium"
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
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel className="text-base" htmlFor={field.name}>
                  Job title
                </FieldLabel>
                <Input
                  className="placeholder:text-[#BABABA] placeholder:font-medium"
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
                <FieldLegend data-invalid={fieldState.invalid}>
                  Which roles do you require?
                </FieldLegend>
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
                      <FieldLabel className="text-base" htmlFor={role}>
                        {role}
                      </FieldLabel>
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
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel
                  className="text-base"
                  htmlFor={field.name}
                  aria-required
                >
                  Message
                </FieldLabel>
                <Textarea
                  {...field}
                  id={field.name}
                  aria-invalid={fieldState.invalid}
                  placeholder="Enter a message"
                  className="min-h-32 placeholder:text-[#BABABA] placeholder:font-medium"
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
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel
                  className="text-base"
                  htmlFor={field.name}
                  aria-required
                >
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
                    className="min-w-32 data-[placeholder]:text-white"
                  >
                    <SelectValue placeholder="Select one" />
                  </SelectTrigger>
                  <SelectContent position="item-aligned" className="bg-white">
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
        {quoteRes?.success && (
          <div className="animate-fade-up">
            <h3 className="text-green-300 font-semibold">
              Quote sent successfully. You will receive a response from us
              shortly.
            </h3>
          </div>
        )}
        {quoteRes?.error && (
          <div className="animate-fade-up">
            <h3 className="text-green-300 font-semibold">
              {quoteRes?.message || quoteRes.error}
            </h3>
          </div>
        )}
        <div>
          <Button
            type="submit"
            className="text-gray-400 bg-white"
            disabled={isSendingQuote}
          >
            {isSendingQuote ? (
              <span className="animate-pulse">Sending Quote...</span>
            ) : (
              <span>Get Quote</span>
            )}
          </Button>
        </div>
      </FieldSet>
    </form>
  );
}
