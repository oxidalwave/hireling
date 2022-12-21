/*
  Warnings:

  - The primary key for the `AncestryBoost` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `charisma` on the `AncestryBoost` table. All the data in the column will be lost.
  - You are about to drop the column `constitution` on the `AncestryBoost` table. All the data in the column will be lost.
  - You are about to drop the column `dexterity` on the `AncestryBoost` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `AncestryBoost` table. All the data in the column will be lost.
  - You are about to drop the column `intelligence` on the `AncestryBoost` table. All the data in the column will be lost.
  - You are about to drop the column `isBoost` on the `AncestryBoost` table. All the data in the column will be lost.
  - You are about to drop the column `strength` on the `AncestryBoost` table. All the data in the column will be lost.
  - You are about to drop the column `wisdom` on the `AncestryBoost` table. All the data in the column will be lost.
  - Added the required column `boostId` to the `AncestryBoost` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "Boost" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "isBoost" BOOLEAN NOT NULL,
    "strength" BOOLEAN NOT NULL,
    "dexterity" BOOLEAN NOT NULL,
    "constitution" BOOLEAN NOT NULL,
    "intelligence" BOOLEAN NOT NULL,
    "wisdom" BOOLEAN NOT NULL,
    "charisma" BOOLEAN NOT NULL
);

-- CreateTable
CREATE TABLE "BackgroundBoost" (
    "backgroundId" INTEGER NOT NULL,
    "boostId" INTEGER NOT NULL,

    PRIMARY KEY ("backgroundId", "boostId"),
    CONSTRAINT "BackgroundBoost_backgroundId_fkey" FOREIGN KEY ("backgroundId") REFERENCES "Background" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "BackgroundBoost_boostId_fkey" FOREIGN KEY ("boostId") REFERENCES "Boost" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_AncestryBoost" (
    "ancestryId" INTEGER NOT NULL,
    "boostId" INTEGER NOT NULL,

    PRIMARY KEY ("ancestryId", "boostId"),
    CONSTRAINT "AncestryBoost_ancestryId_fkey" FOREIGN KEY ("ancestryId") REFERENCES "Ancestry" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "AncestryBoost_boostId_fkey" FOREIGN KEY ("boostId") REFERENCES "Boost" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_AncestryBoost" ("ancestryId") SELECT "ancestryId" FROM "AncestryBoost";
DROP TABLE "AncestryBoost";
ALTER TABLE "new_AncestryBoost" RENAME TO "AncestryBoost";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
