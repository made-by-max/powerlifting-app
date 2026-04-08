import { pullResults } from "@/app/actions/PullResults";

import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type ResultsProps = {
  sessionId: string;
};

export async function ResultsView({ sessionId }: ResultsProps) {
  const state = await pullResults(Number(sessionId));

  return (
    <Card className="w-full sm:max-w-md">
      <CardHeader>
        <CardTitle>Results</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Squat: {state.bestSquat}</p>
        <p>Bench: {state.bestBench}</p>
        <p>Deadlift: {state.bestDeadlift}</p>
        <p>Total: {state.total}</p>
        <p>Dots Score: {state.dotScore}</p>
      </CardContent>
      <CardFooter>
        <Field orientation="horizontal">
          <Button type="button" variant="outline">
            Reset
          </Button>

          {state.message && (
            <p
              className={`form-message ${state.success ? "success" : "error"}`}
            >
              {state.message}
              {state.dotScore}
            </p>
          )}
        </Field>
      </CardFooter>
    </Card>
  );
}
