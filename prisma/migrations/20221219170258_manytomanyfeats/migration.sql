/*
  Warnings:

  - You are about to drop the column `playerClassId` on the `Feat` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "PlayerClassFeat" (
    "playerClassId" TEXT NOT NULL,
    "featId" TEXT NOT NULL,

    PRIMARY KEY ("playerClassId", "featId"),
    CONSTRAINT "PlayerClassFeat_playerClassId_fkey" FOREIGN KEY ("playerClassId") REFERENCES "PlayerClass" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "PlayerClassFeat_featId_fkey" FOREIGN KEY ("featId") REFERENCES "Feat" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Feat" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "kind" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "level" INTEGER NOT NULL,
    "sourceId" TEXT NOT NULL,
    CONSTRAINT "Feat_sourceId_fkey" FOREIGN KEY ("sourceId") REFERENCES "Source" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Feat" ("description", "id", "kind", "level", "name", "sourceId") SELECT "description", "id", "kind", "level", "name", "sourceId" FROM "Feat";
DROP TABLE "Feat";
ALTER TABLE "new_Feat" RENAME TO "Feat";
CREATE UNIQUE INDEX "Feat_name_kind_sourceId_key" ON "Feat"("name", "kind", "sourceId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
