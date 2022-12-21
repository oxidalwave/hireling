/*
  Warnings:

  - A unique constraint covering the columns `[name,sourceId]` on the table `PlayerClassFeat` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "PlayerClassFeat_name_sourceId_key" ON "PlayerClassFeat"("name", "sourceId");
