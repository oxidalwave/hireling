/*
  Warnings:

  - Made the column `userId` on table `PlayerCharacter` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateTable
CREATE TABLE "PlayerCharacterAbilityScore" (
    "playerCharacterId" TEXT NOT NULL,
    "abilityScoreId" TEXT NOT NULL,
    CONSTRAINT "PlayerCharacterAbilityScore_playerCharacterId_fkey" FOREIGN KEY ("playerCharacterId") REFERENCES "PlayerCharacter" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "PlayerCharacterAbilityScore_abilityScoreId_fkey" FOREIGN KEY ("abilityScoreId") REFERENCES "AbilityScore" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_PlayerCharacter" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "ancestryId" TEXT NOT NULL,
    "backgroundId" TEXT NOT NULL,
    "playerClassId" TEXT NOT NULL,
    CONSTRAINT "PlayerCharacter_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "PlayerCharacter_ancestryId_fkey" FOREIGN KEY ("ancestryId") REFERENCES "Ancestry" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "PlayerCharacter_backgroundId_fkey" FOREIGN KEY ("backgroundId") REFERENCES "Background" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "PlayerCharacter_playerClassId_fkey" FOREIGN KEY ("playerClassId") REFERENCES "PlayerClass" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_PlayerCharacter" ("ancestryId", "backgroundId", "id", "name", "playerClassId", "userId") SELECT "ancestryId", "backgroundId", "id", "name", "playerClassId", "userId" FROM "PlayerCharacter";
DROP TABLE "PlayerCharacter";
ALTER TABLE "new_PlayerCharacter" RENAME TO "PlayerCharacter";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "PlayerCharacterAbilityScore_playerCharacterId_abilityScoreId_key" ON "PlayerCharacterAbilityScore"("playerCharacterId", "abilityScoreId");
