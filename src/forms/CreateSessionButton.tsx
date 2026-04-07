"use client";
import { CreateSession } from "@/app/actions/CreateSession";
import { Button } from "@/components/ui/button";

export function CreateSessionButton() {
  return <Button onClick={() => CreateSession()}>Start New Session</Button>;
}
