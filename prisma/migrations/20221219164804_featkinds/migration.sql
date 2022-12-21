/*
  Warnings:

  - You are about to drop the `PlayerClassFeat` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "PlayerClassFeat";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Feat" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "kind" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "level" INTEGER NOT NULL,
    "playerClassId" TEXT,
    "sourceId" TEXT NOT NULL,
    CONSTRAINT "Feat_playerClassId_fkey" FOREIGN KEY ("playerClassId") REFERENCES "PlayerClass" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Feat_sourceId_fkey" FOREIGN KEY ("sourceId") REFERENCES "Source" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Feat_name_kind_sourceId_key" ON "Feat"("name", "kind", "sourceId");
