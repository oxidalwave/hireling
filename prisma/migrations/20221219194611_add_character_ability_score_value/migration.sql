/*
  Warnings:

  - Added the required column `score` to the `PlayerCharacterAbilityScore` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_PlayerCharacterAbilityScore" (
    "playerCharacterId" TEXT NOT NULL,
    "abilityScoreId" TEXT NOT NULL,
    "score" INTEGER NOT NULL,
    CONSTRAINT "PlayerCharacterAbilityScore_playerCharacterId_fkey" FOREIGN KEY ("playerCharacterId") REFERENCES "PlayerCharacter" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "PlayerCharacterAbilityScore_abilityScoreId_fkey" FOREIGN KEY ("abilityScoreId") REFERENCES "AbilityScore" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_PlayerCharacterAbilityScore" ("abilityScoreId", "playerCharacterId") SELECT "abilityScoreId", "playerCharacterId" FROM "PlayerCharacterAbilityScore";
DROP TABLE "PlayerCharacterAbilityScore";
ALTER TABLE "new_PlayerCharacterAbilityScore" RENAME TO "PlayerCharacterAbilityScore";
CREATE UNIQUE INDEX "PlayerCharacterAbilityScore_playerCharacterId_abilityScoreId_key" ON "PlayerCharacterAbilityScore"("playerCharacterId", "abilityScoreId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
