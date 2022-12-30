/*
  Warnings:

  - You are about to drop the column `charisma` on the `Boost` table. All the data in the column will be lost.
  - You are about to drop the column `constitution` on the `Boost` table. All the data in the column will be lost.
  - You are about to drop the column `dexterity` on the `Boost` table. All the data in the column will be lost.
  - You are about to drop the column `intelligence` on the `Boost` table. All the data in the column will be lost.
  - You are about to drop the column `strength` on the `Boost` table. All the data in the column will be lost.
  - You are about to drop the column `wisdom` on the `Boost` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "AbilityScoreBoost" (
    "abilityScoreId" TEXT NOT NULL,
    "boostId" TEXT NOT NULL,
    CONSTRAINT "AbilityScoreBoost_abilityScoreId_fkey" FOREIGN KEY ("abilityScoreId") REFERENCES "AbilityScore" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "AbilityScoreBoost_boostId_fkey" FOREIGN KEY ("boostId") REFERENCES "Boost" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Boost" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "kind" TEXT NOT NULL,
    "ancestryId" TEXT,
    "backgroundId" TEXT,
    "playerClassId" TEXT,
    "isBoost" BOOLEAN NOT NULL,
    CONSTRAINT "Boost_ancestryId_fkey" FOREIGN KEY ("ancestryId") REFERENCES "Ancestry" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Boost_backgroundId_fkey" FOREIGN KEY ("backgroundId") REFERENCES "Background" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Boost_playerClassId_fkey" FOREIGN KEY ("playerClassId") REFERENCES "PlayerClass" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Boost" ("ancestryId", "backgroundId", "id", "isBoost", "kind", "playerClassId") SELECT "ancestryId", "backgroundId", "id", "isBoost", "kind", "playerClassId" FROM "Boost";
DROP TABLE "Boost";
ALTER TABLE "new_Boost" RENAME TO "Boost";
CREATE UNIQUE INDEX "Boost_playerClassId_key" ON "Boost"("playerClassId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "AbilityScoreBoost_abilityScoreId_boostId_key" ON "AbilityScoreBoost"("abilityScoreId", "boostId");
