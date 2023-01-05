-- CreateTable
CREATE TABLE "Heritage" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "ancestryId" TEXT NOT NULL,
    "sourceId" TEXT NOT NULL,

    CONSTRAINT "Heritage_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Heritage" ADD CONSTRAINT "Heritage_ancestryId_fkey" FOREIGN KEY ("ancestryId") REFERENCES "Ancestry"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Heritage" ADD CONSTRAINT "Heritage_sourceId_fkey" FOREIGN KEY ("sourceId") REFERENCES "Source"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
