-- CreateTable
CREATE TABLE "PlayerCharacterFeat" (
    "playerCharacterId" TEXT NOT NULL,
    "featId" TEXT NOT NULL,
    CONSTRAINT "PlayerCharacterFeat_playerCharacterId_fkey" FOREIGN KEY ("playerCharacterId") REFERENCES "PlayerCharacter" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "PlayerCharacterFeat_featId_fkey" FOREIGN KEY ("featId") REFERENCES "Feat" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "PlayerCharacterFeat_playerCharacterId_featId_key" ON "PlayerCharacterFeat"("playerCharacterId", "featId");
