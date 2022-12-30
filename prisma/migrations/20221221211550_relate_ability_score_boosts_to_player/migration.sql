/*
  Warnings:

  - You are about to drop the `PlayerCharacterAbilityScore` table. If the table is not empty, all the data it contains will be lost.
  - The required column `id` was added to the `AbilityScoreBoost` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropIndex
DROP INDEX "PlayerCharacterAbilityScore_playerCharacterId_abilityScoreId_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "PlayerCharacterAbilityScore";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "PlayerCharacterAbilityScoreBoost" (
    "abilityScoreBoostId" TEXT NOT NULL,
    "playerCharacterId" TEXT NOT NULL,
    CONSTRAINT "PlayerCharacterAbilityScoreBoost_abilityScoreBoostId_fkey" FOREIGN KEY ("abilityScoreBoostId") REFERENCES "AbilityScoreBoost" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "PlayerCharacterAbilityScoreBoost_playerCharacterId_fkey" FOREIGN KEY ("playerCharacterId") REFERENCES "PlayerCharacter" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_AbilityScoreBoost" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "abilityScoreId" TEXT NOT NULL,
    "boostId" TEXT NOT NULL,
    CONSTRAINT "AbilityScoreBoost_abilityScoreId_fkey" FOREIGN KEY ("abilityScoreId") REFERENCES "AbilityScore" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "AbilityScoreBoost_boostId_fkey" FOREIGN KEY ("boostId") REFERENCES "Boost" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_AbilityScoreBoost" ("abilityScoreId", "boostId") SELECT "abilityScoreId", "boostId" FROM "AbilityScoreBoost";
DROP TABLE "AbilityScoreBoost";
ALTER TABLE "new_AbilityScoreBoost" RENAME TO "AbilityScoreBoost";
CREATE UNIQUE INDEX "AbilityScoreBoost_abilityScoreId_boostId_key" ON "AbilityScoreBoost"("abilityScoreId", "boostId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "PlayerCharacterAbilityScoreBoost_abilityScoreBoostId_playerCharacterId_key" ON "PlayerCharacterAbilityScoreBoost"("abilityScoreBoostId", "playerCharacterId");
