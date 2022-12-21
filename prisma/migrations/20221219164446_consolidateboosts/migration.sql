/*
  Warnings:

  - You are about to drop the `AncestryBoost` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `BackgroundBoost` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PlayerClassBoost` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "AncestryBoost";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "BackgroundBoost";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "PlayerClassBoost";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Boost" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "kind" TEXT NOT NULL,
    "ancestryId" TEXT,
    "backgroundId" TEXT,
    "playerClassId" TEXT,
    "isBoost" BOOLEAN NOT NULL,
    "strength" BOOLEAN NOT NULL,
    "dexterity" BOOLEAN NOT NULL,
    "constitution" BOOLEAN NOT NULL,
    "intelligence" BOOLEAN NOT NULL,
    "wisdom" BOOLEAN NOT NULL,
    "charisma" BOOLEAN NOT NULL,
    CONSTRAINT "Boost_ancestryId_fkey" FOREIGN KEY ("ancestryId") REFERENCES "Ancestry" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Boost_backgroundId_fkey" FOREIGN KEY ("backgroundId") REFERENCES "Background" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Boost_playerClassId_fkey" FOREIGN KEY ("playerClassId") REFERENCES "PlayerClass" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Boost_playerClassId_key" ON "Boost"("playerClassId");
