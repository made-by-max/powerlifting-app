"use client";
import * as React from "react";
import { addAttempt } from "@/app/actions/AddAttempt";
// import { zodResolver } from "@hookform/resolvers/zod";
import { useActionState, useState } from "react";
import { CalculateTotals } from "@/app/actions/CalculateTotals";

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
  FieldContent,
  FieldTitle,
  FieldLegend,
  FieldSet,
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { Toggle } from "@/components/ui/toggle";
import { DEFAULT_PRESET_CONFIG } from "shadcn/preset";
import { Slabo_13px } from "next/font/google";

type AttemptEntryProps = {
  sessionId: string;
};

export function AttemptEntry({ sessionId }: AttemptEntryProps) {
  const [state, formAction, isPending] = useActionState(addAttempt, {
    success: false,
    message: "",
  });

  const [formKey, setFormKey] = useState(1);

  const handleReset = () => setFormKey((prev) => prev + 1);

  let lift_type = "squat";
  if (formKey <= 3) {
    lift_type = "squat";
  }
  if (formKey >= 4 && formKey <= 6) {
    lift_type = "bench";
  }
  if (formKey >= 7) {
    lift_type = "deadlift";
  }

  let attempt_number = 1;
  if (formKey % 3 === 1) {
    attempt_number = 1;
  }
  if (formKey % 3 === 2) {
    attempt_number = 2;
  }
  if (formKey % 3 === 0) {
    attempt_number = 3;
  }

  return (
    <Card className="w-full sm:max-w-md">
      <CardHeader>
        <CardTitle>{lift_type}</CardTitle>
        <CardDescription>Attempt {attempt_number}</CardDescription>
      </CardHeader>
      <CardContent>
        <form
          action={formAction}
          id="new-attempt-form"
          key={formKey}
          onReset={handleReset}
        >
          <Input
            type="hidden"
            id="sessionId"
            name="sessionId"
            value={sessionId}
          />
          <Input
            type="hidden"
            id="lift_type"
            name="lift_type"
            value={lift_type}
          />
          <Input
            type="hidden"
            id="attempt_number"
            name="attempt_number"
            value={attempt_number}
          />

          <FieldGroup>
            <FieldLabel htmlFor="weight">Weight</FieldLabel>
            <Input
              id="weight"
              name="weight"
              type="number"
              placeholder=""
              required
              autoComplete="off"
            />

            <div className="flex justify-around">
              <FieldSet className="w-11 max-w-xs">
                <RadioGroup name="left_judge">
                  <Field>
                    <RadioGroupItem
                      value="false"
                      id="left_judge_fail"
                      className="sr-only"
                    />
                    <FieldLabel
                      htmlFor="left_judge_fail"
                      className="border w-11 h-11  bg-red-500 rounded-full cursor-pointer hover:bg-red-600 peer-data-[state=checked]:border-primary  peer-data-[state=checked]:bg-red-600"
                    ></FieldLabel>
                  </Field>

                  <Field>
                    <RadioGroupItem
                      value="true"
                      id="left_judge_pass"
                      className="sr-only"
                    />
                    <FieldLabel
                      htmlFor="left_judge_pass"
                      className="border w-11 h-11  bg-white rounded-full cursor-pointer hover:bg-stone-50 peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-stone-50"
                    ></FieldLabel>
                  </Field>
                </RadioGroup>
              </FieldSet>

              <FieldSet className="w-11 max-w-xs">
                <RadioGroup name="center_judge">
                  <Field>
                    <RadioGroupItem
                      value="false"
                      id="center_judge_fail"
                      className="sr-only"
                    />
                    <FieldLabel
                      htmlFor="center_judge_fail"
                      className="border w-11 h-11  bg-red-500 rounded-full cursor-pointer hover:bg-red-600 peer-data-[state=checked]:border-primary  peer-data-[state=checked]:bg-red-600"
                    ></FieldLabel>
                  </Field>

                  <Field>
                    <RadioGroupItem
                      value="true"
                      id="center_judge_pass"
                      className="sr-only"
                    />
                    <FieldLabel
                      htmlFor="center_judge_pass"
                      className="border w-11 h-11  bg-white rounded-full cursor-pointer hover:bg-stone-50 peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-stone-50"
                    ></FieldLabel>
                  </Field>
                </RadioGroup>
              </FieldSet>

              <FieldSet className="w-11 max-w-xs">
                <RadioGroup name="right_judge">
                  <Field>
                    <RadioGroupItem
                      value="false"
                      id="right_judge_fail"
                      className="sr-only"
                    />
                    <FieldLabel
                      htmlFor="right_judge_fail"
                      className="border w-11 h-11  bg-red-500 rounded-full cursor-pointer hover:bg-red-600 peer-data-[state=checked]:border-primary  peer-data-[state=checked]:bg-red-600"
                    ></FieldLabel>
                  </Field>

                  <Field>
                    <RadioGroupItem
                      value="true"
                      id="right_judge_pass"
                      className="sr-only"
                    />
                    <FieldLabel
                      htmlFor="right_judge_pass"
                      className="border w-11 h-11  bg-white rounded-full cursor-pointer hover:bg-stone-50 peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-stone-50"
                    ></FieldLabel>
                  </Field>
                </RadioGroup>
              </FieldSet>
            </div>

            {/*

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
            </Select>*/}

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
          {/*<Button type="button" variant="outline">
            Reset
          </Button>*/}

          {formKey < 9 ? (
            <Button type="submit" form="new-attempt-form" disabled={isPending}>
              {isPending ? "Submitting..." : "Submit"}
            </Button>
          ) : (
            <Button onClick={() => CalculateTotals(Number(sessionId))}>
              Finish
            </Button>
          )}

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
