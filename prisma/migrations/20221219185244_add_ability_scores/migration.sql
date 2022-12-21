/*
  Warnings:

  - A unique constraint covering the columns `[kind,name,sourceId]` on the table `Feat` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "AbilityScore" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "abbreviatedName" TEXT NOT NULL,
    "description" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "AbilityScore_name_key" ON "AbilityScore"("name");

-- CreateIndex
CREATE UNIQUE INDEX "AbilityScore_abbreviatedName_key" ON "AbilityScore"("abbreviatedName");

-- CreateIndex
CREATE UNIQUE INDEX "Feat_kind_name_sourceId_key" ON "Feat"("kind", "name", "sourceId");
