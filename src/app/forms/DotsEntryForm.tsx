"use client";
import { useActionState } from "react";
import { calculateDots } from "@/app/actions/CalculateDots";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type DotsEntryProps = {
  sessionId: string;
};

export function DotsEntryForm({ sessionId }: DotsEntryProps) {
  const actionWithSessionId = calculateDots.bind(null, Number(sessionId));
  const [state, formAction, isPending] = useActionState(actionWithSessionId, {
    success: false,
    message: "",
    dotScore: 0,
  });

  return (
    <Card className="w-full sm:max-w-md">
      <CardHeader>
        <CardTitle>Calculate Dots Score</CardTitle>
      </CardHeader>
      <CardContent>
        <form action={formAction} id="dots-entry-form">
          <FieldGroup>
            <FieldLabel htmlFor="bodyweight">Bodyweight (in kg)</FieldLabel>
            <Input
              id="bodyweight"
              name="bodyweight"
              type="number"
              placeholder=""
              required
              autoComplete="off"
            />

            <FieldLabel htmlFor="coefficient">Coefficient</FieldLabel>
            <Select name="coefficient">
              <SelectTrigger className="w-full max-w-48">
                <SelectValue placeholder="" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="male">Male</SelectItem>
              </SelectContent>
            </Select>
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Field orientation="horizontal">
          {/*<Button type="button" variant="outline">
            Reset
          </Button>*/}

          <Button type="submit" form="dots-entry-form" disabled={isPending}>
            {isPending ? "Submitting..." : "Submit"}
          </Button>

          {/*{state.message && (
            <p
              className={`form-message ${state.success ? "success" : "error"}`}
            >
              {state.message}
              {state.dotScore}
            </p>
          )}*/}
        </Field>
      </CardFooter>
    </Card>
  );
}
