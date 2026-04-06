"use client";
import * as React from "react";
import { createUser } from "@/app/actions/CreateUser";
// import { zodResolver } from "@hookform/resolvers/zod";

import { useActionState } from "react";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Toggle } from "@/components/ui/toggle";
import { DEFAULT_PRESET_CONFIG } from "shadcn/preset";

const userFormSchema = z.object({
  name: z
    .string()
    .min(2, "Must be at least 2 characters.")
    .max(32, "Must be at most 32 characters."),
  date_of_birth: z.date().optional(),
});

// async function submitForm(prevState, formData) {
//   await new Promise((resolve) => setTimeout(resolve, 1500));
//   const userName = formData.get("form-user-name");
//   return {
//     success: true,
//     message: `Form submitted successfully! ${userName} ${birthDate} `,
//   };
// }

export function AttemptEntry() {
  const [state, formAction, isPending] = useActionState(createUser, {
    success: false,
    message: "",
  });

  return (
    <Card className="w-full sm:max-w-md">
      <CardHeader>
        <CardTitle>Attempt</CardTitle>
        <CardDescription>Attempt information</CardDescription>
      </CardHeader>
      <CardContent>
        <form action={formAction} id="new-attempt-form">
          <FieldGroup>
            <FieldLabel htmlFor="form-attempt-lift">Lift</FieldLabel>
            <Select>
              <SelectTrigger className="w-full max-w-48">
                <SelectValue placeholder="" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="squat">Squat</SelectItem>
                <SelectItem value="bench">Bench</SelectItem>
                <SelectItem value="deadlift">Deadlift</SelectItem>
              </SelectContent>
            </Select>

            <FieldLabel htmlFor="form-attempt-number">
              Attempt Number
            </FieldLabel>
            <Select>
              <SelectTrigger className="w-full max-w-48">
                <SelectValue placeholder="" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1</SelectItem>
                <SelectItem value="2">2</SelectItem>
                <SelectItem value="3">3</SelectItem>
              </SelectContent>
            </Select>

            <FieldLabel htmlFor="form-attempt-results">Results</FieldLabel>

            <div className="flex flex-wrap items-center gap-2">
              <Toggle variant="outline" aria-label="left" size="lg">
                Left
              </Toggle>
              <Toggle variant="outline" aria-label="center" size="lg">
                Center
              </Toggle>
              <Toggle variant="outline" aria-label="right" size="lg">
                Right
              </Toggle>
            </div>

            <Field orientation="horizontal">
              <Checkbox id="platformPR" name="platformPR" />
              <FieldLabel htmlFor="platformPR">Platform PR</FieldLabel>
            </Field>

            <Field orientation="horizontal">
              <Checkbox id="ATPR" name="ATPR" />
              <FieldLabel htmlFor="ATPR">All-time PR</FieldLabel>
            </Field>
          </FieldGroup>
        </form>
      </CardContent>

      <CardFooter>
        <Field orientation="horizontal">
          <Button type="button" variant="outline">
            Reset
          </Button>
          <Button type="submit" form="new-user-form" disabled={isPending}>
            {isPending ? "Submitting..." : "Submit"}
          </Button>
          {state.message && (
            <p
              className={`form-message ${state.success ? "success" : "error"}`}
            >
              {state.message}
            </p>
          )}
        </Field>
      </CardFooter>
    </Card>
  );
}
