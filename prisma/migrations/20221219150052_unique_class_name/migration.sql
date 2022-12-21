/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `PlayerClass` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "PlayerClass_name_sourceId_key";

-- CreateIndex
CREATE UNIQUE INDEX "PlayerClass_name_key" ON "PlayerClass"("name");
