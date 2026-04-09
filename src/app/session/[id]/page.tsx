import { AttemptEntry } from "@/app/forms/AttemptEntry";
import { Grid } from "@/app/components/Grid";

// import { NewMeetForm } from "@/forms/NewMeetForm";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function AttemptPage({ params }: PageProps) {
  const { id: sessionId } = await params;
  return (
    <>
      <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
          <Grid sessionId={sessionId} />
          <AttemptEntry sessionId={sessionId} />
        </main>
      </div>
    </>
  );
}
