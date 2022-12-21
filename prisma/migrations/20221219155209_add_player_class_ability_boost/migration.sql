/*
  Warnings:

  - Added the required column `boost` to the `PlayerClass` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_PlayerClass" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "boost" TEXT NOT NULL,
    "sourceId" TEXT NOT NULL,
    CONSTRAINT "PlayerClass_sourceId_fkey" FOREIGN KEY ("sourceId") REFERENCES "Source" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_PlayerClass" ("description", "id", "name", "sourceId") SELECT "description", "id", "name", "sourceId" FROM "PlayerClass";
DROP TABLE "PlayerClass";
ALTER TABLE "new_PlayerClass" RENAME TO "PlayerClass";
CREATE UNIQUE INDEX "PlayerClass_name_key" ON "PlayerClass"("name");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
