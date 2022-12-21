/*
  Warnings:

  - A unique constraint covering the columns `[name,sourceId]` on the table `Ancestry` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name,sourceId]` on the table `Background` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name,sourceId]` on the table `PlayerClass` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Ancestry_name_sourceId_key" ON "Ancestry"("name", "sourceId");

-- CreateIndex
CREATE UNIQUE INDEX "Background_name_sourceId_key" ON "Background"("name", "sourceId");

-- CreateIndex
CREATE UNIQUE INDEX "PlayerClass_name_sourceId_key" ON "PlayerClass"("name", "sourceId");
