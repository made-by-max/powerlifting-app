-- CreateTable
CREATE TABLE "Lifter" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "date_of_birth" TIMESTAMP(3),

    CONSTRAINT "Lifter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Meet" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "meet_date" TIMESTAMP(3),
    "location" TEXT,
    "federation" TEXT,

    CONSTRAINT "Meet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MeetEntry" (
    "id" SERIAL NOT NULL,
    "lifterId" INTEGER NOT NULL,
    "meetId" INTEGER NOT NULL,
    "bodyweight" INTEGER,
    "weight_class" TEXT,
    "division" TEXT,
    "coefficient" TEXT,
    "bestSquat" INTEGER NOT NULL,
    "bestBench" INTEGER NOT NULL,
    "bestDeadlift" INTEGER NOT NULL,
    "total" INTEGER NOT NULL,
    "wilks_score" INTEGER,
    "dots_score" INTEGER,
    "placement" INTEGER,
    "meet_entry" INTEGER NOT NULL,

    CONSTRAINT "MeetEntry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Attempt" (
    "id" SERIAL NOT NULL,
    "meetEntryId" INTEGER NOT NULL,
    "lift_type" TEXT NOT NULL,
    "attempt_number" INTEGER NOT NULL,
    "weight" INTEGER NOT NULL,
    "left_judge" BOOLEAN NOT NULL DEFAULT false,
    "center_judge" BOOLEAN NOT NULL DEFAULT false,
    "right_judge" BOOLEAN NOT NULL DEFAULT false,
    "result" BOOLEAN NOT NULL DEFAULT false,
    "platform_pr" BOOLEAN NOT NULL DEFAULT false,
    "all_time_pr" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Attempt_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "MeetEntry" ADD CONSTRAINT "MeetEntry_lifterId_fkey" FOREIGN KEY ("lifterId") REFERENCES "Lifter"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MeetEntry" ADD CONSTRAINT "MeetEntry_meetId_fkey" FOREIGN KEY ("meetId") REFERENCES "Meet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Attempt" ADD CONSTRAINT "Attempt_meetEntryId_fkey" FOREIGN KEY ("meetEntryId") REFERENCES "MeetEntry"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
