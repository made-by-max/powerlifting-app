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

export function NewUserForm() {
  const [state, formAction, isPending] = useActionState(createUser, {
    success: false,
    message: "",
  });

  return (
    <Card className="w-full sm:max-w-md">
      <CardHeader>
        <CardTitle>New Lifter</CardTitle>
        <CardDescription>
          Enter your name and date of birth (optional, used to determine
          division)
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={formAction} id="new-user-form">
          <FieldGroup>
            <FieldLabel htmlFor="form-user-name">Name</FieldLabel>
            <Input
              id="form-user-name"
              name="form-user-name"
              type="text"
              placeholder="Your name"
              autoComplete="off"
              required
              minLength={2}
              maxLength={32}
            />
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
