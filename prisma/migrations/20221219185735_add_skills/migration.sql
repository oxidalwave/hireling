-- CreateTable
CREATE TABLE "Skill" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "abilityScoreId" TEXT NOT NULL,
    CONSTRAINT "Skill_abilityScoreId_fkey" FOREIGN KEY ("abilityScoreId") REFERENCES "AbilityScore" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Skill_name_key" ON "Skill"("name");
