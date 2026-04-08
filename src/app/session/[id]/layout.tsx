import * as React from "react";
type SessionLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ id: string }>;
};
export default async function SessionLayout({
  children,
  params,
}: SessionLayoutProps) {
  const { id: sessionId } = await params;
  // Option A: just pass sessionId down manually from pages/components
  // Option B: load session here and pass to wrappers
  return <>{children}</>;
}
