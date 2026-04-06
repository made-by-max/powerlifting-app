"use client";
import * as React from "react";
import { addAttempt } from "@/app/actions/AddAttempt";
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

export function AttemptEntry() {
  const [state, formAction, isPending] = useActionState(addAttempt, {
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
            <FieldLabel htmlFor="lift_type">Lift</FieldLabel>
            <Select name="lift_type">
              <SelectTrigger className="w-full max-w-48">
                <SelectValue placeholder="" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="squat">Squat</SelectItem>
                <SelectItem value="bench">Bench</SelectItem>
                <SelectItem value="deadlift">Deadlift</SelectItem>
              </SelectContent>
            </Select>

            <FieldLabel htmlFor="attempt_number">Attempt Number</FieldLabel>
            <Input
              id="attempt_number"
              name="attempt_number"
              type="number"
              min={1}
              max={3}
              placeholder=""
              required
              autoComplete="off"
            />

            <FieldLabel htmlFor="weight">Weight</FieldLabel>
            <Input
              id="weight"
              name="weight"
              type="number"
              placeholder=""
              required
              autoComplete="off"
            />

            <FieldLabel htmlFor="left_judge">Left Judge</FieldLabel>
            <Select name="left_judge">
              <SelectTrigger className="w-full max-w-48">
                <SelectValue placeholder="" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="false">Red</SelectItem>
                <SelectItem value="true">White</SelectItem>
              </SelectContent>
            </Select>

            <FieldLabel htmlFor="center_judge">Center Judge</FieldLabel>
            <Select name="center_judge">
              <SelectTrigger className="w-full max-w-48">
                <SelectValue placeholder="" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="false">Red</SelectItem>
                <SelectItem value="true">White</SelectItem>
              </SelectContent>
            </Select>

            <FieldLabel htmlFor="right_judge">Right Judge</FieldLabel>
            <Select name="right_judge">
              <SelectTrigger className="w-full max-w-48">
                <SelectValue placeholder="" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="false">Red</SelectItem>
                <SelectItem value="true">White</SelectItem>
              </SelectContent>
            </Select>

            <FieldLabel htmlFor="result">Result</FieldLabel>
            <Select name="result">
              <SelectTrigger className="w-full max-w-48">
                <SelectValue placeholder="" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="false">Fail</SelectItem>
                <SelectItem value="true">Pass</SelectItem>
              </SelectContent>
            </Select>

            <Field orientation="horizontal">
              <Checkbox id="platform_pr" name="platform_pr" />
              <FieldLabel htmlFor="platform_pr">Platform PR</FieldLabel>
            </Field>

            <Field orientation="horizontal">
              <Checkbox id="all_time_pr" name="all_time_pr" />
              <FieldLabel htmlFor="all_time_pr">All-time PR</FieldLabel>
            </Field>
          </FieldGroup>
        </form>
      </CardContent>

      <CardFooter>
        <Field orientation="horizontal">
          <Button type="button" variant="outline">
            Reset
          </Button>
          <Button type="submit" form="new-attempt-form" disabled={isPending}>
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
