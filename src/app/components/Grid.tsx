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

export function Grid({ sessionId }: AttemptEntryProps) {
  const [state, formAction, isPending] = useActionState(addAttempt, {
    success: false,
    message: "",
  });

  return (
    <Card className="w-full sm:max-w-md">
      <CardContent>
        <form>
          <RadioGroup>
            <div className="flex row ">
              <Field orientation="horizontal">
                <FieldLabel htmlFor="lift-squat" className="font-normal">
                  <RadioGroupItem value="squat" id="lift-squat" />
                  <FieldTitle>Squat</FieldTitle>
                </FieldLabel>
              </Field>

              <Field orientation="horizontal">
                <FieldLabel htmlFor="lift-bench" className="font-normal">
                  <RadioGroupItem value="bench" id="lift-bench" />
                  <FieldTitle>Bench</FieldTitle>
                </FieldLabel>
              </Field>

              <Field orientation="horizontal">
                <FieldLabel htmlFor="lift-deadlift" className="font-normal">
                  <RadioGroupItem value="deadlift" id="lift-deadlift" />
                  <FieldTitle>Deadlift</FieldTitle>
                </FieldLabel>
              </Field>
            </div>
          </RadioGroup>

          <RadioGroup>
            <div className="flex row ">
              <Field orientation="horizontal">
                <FieldLabel htmlFor="attemptOne" className="font-normal">
                  <RadioGroupItem value="attemptOne" id="attemptOne" />
                  <FieldTitle>First Attempt</FieldTitle>
                </FieldLabel>
              </Field>

              <Field orientation="horizontal">
                <FieldLabel htmlFor="attemptTwo" className="font-normal">
                  <RadioGroupItem value="attemptTwo" id="attemptTwo" />
                  <FieldTitle>Second Attempt</FieldTitle>
                </FieldLabel>
              </Field>

              <Field orientation="horizontal">
                <FieldLabel htmlFor="attemptThree" className="font-normal">
                  <RadioGroupItem value="attemptThree" id="attemptThree" />
                  <FieldTitle>Second Attempt</FieldTitle>
                </FieldLabel>
              </Field>
            </div>
          </RadioGroup>
        </form>
      </CardContent>
    </Card>
  );
}
