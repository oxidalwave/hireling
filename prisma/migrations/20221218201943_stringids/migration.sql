/*
  Warnings:

  - You are about to drop the `Boost` table. If the table is not empty, all the data it contains will be lost.
  - The primary key for the `Background` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Ancestry` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `BackgroundBoost` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `boostId` on the `BackgroundBoost` table. All the data in the column will be lost.
  - The primary key for the `Source` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `PlayerCharacter` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Account` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Equipment` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `PlayerClass` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `AncestryBoost` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `boostId` on the `AncestryBoost` table. All the data in the column will be lost.
  - The primary key for the `Session` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `charisma` to the `BackgroundBoost` table without a default value. This is not possible if the table is not empty.
  - Added the required column `constitution` to the `BackgroundBoost` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dexterity` to the `BackgroundBoost` table without a default value. This is not possible if the table is not empty.
  - The required column `id` was added to the `BackgroundBoost` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `intelligence` to the `BackgroundBoost` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isBoost` to the `BackgroundBoost` table without a default value. This is not possible if the table is not empty.
  - Added the required column `strength` to the `BackgroundBoost` table without a default value. This is not possible if the table is not empty.
  - Added the required column `wisdom` to the `BackgroundBoost` table without a default value. This is not possible if the table is not empty.
  - Added the required column `charisma` to the `AncestryBoost` table without a default value. This is not possible if the table is not empty.
  - Added the required column `constitution` to the `AncestryBoost` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dexterity` to the `AncestryBoost` table without a default value. This is not possible if the table is not empty.
  - The required column `id` was added to the `AncestryBoost` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `intelligence` to the `AncestryBoost` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isBoost` to the `AncestryBoost` table without a default value. This is not possible if the table is not empty.
  - Added the required column `strength` to the `AncestryBoost` table without a default value. This is not possible if the table is not empty.
  - Added the required column `wisdom` to the `AncestryBoost` table without a default value. This is not possible if the table is not empty.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Boost";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Background" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "sourceId" TEXT NOT NULL,
    CONSTRAINT "Background_sourceId_fkey" FOREIGN KEY ("sourceId") REFERENCES "Source" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Background" ("description", "id", "name", "sourceId") SELECT "description", "id", "name", "sourceId" FROM "Background";
DROP TABLE "Background";
ALTER TABLE "new_Background" RENAME TO "Background";
CREATE TABLE "new_Ancestry" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "hp" INTEGER NOT NULL,
    "size" TEXT NOT NULL,
    "speed" INTEGER NOT NULL,
    "sourceId" TEXT NOT NULL,
    CONSTRAINT "Ancestry_sourceId_fkey" FOREIGN KEY ("sourceId") REFERENCES "Source" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Ancestry" ("description", "hp", "id", "name", "size", "sourceId", "speed") SELECT "description", "hp", "id", "name", "size", "sourceId", "speed" FROM "Ancestry";
DROP TABLE "Ancestry";
ALTER TABLE "new_Ancestry" RENAME TO "Ancestry";
CREATE TABLE "new_BackgroundBoost" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "backgroundId" TEXT NOT NULL,
    "isBoost" BOOLEAN NOT NULL,
    "strength" BOOLEAN NOT NULL,
    "dexterity" BOOLEAN NOT NULL,
    "constitution" BOOLEAN NOT NULL,
    "intelligence" BOOLEAN NOT NULL,
    "wisdom" BOOLEAN NOT NULL,
    "charisma" BOOLEAN NOT NULL,
    CONSTRAINT "BackgroundBoost_backgroundId_fkey" FOREIGN KEY ("backgroundId") REFERENCES "Background" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_BackgroundBoost" ("backgroundId") SELECT "backgroundId" FROM "BackgroundBoost";
DROP TABLE "BackgroundBoost";
ALTER TABLE "new_BackgroundBoost" RENAME TO "BackgroundBoost";
CREATE TABLE "new_Source" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);
INSERT INTO "new_Source" ("id", "name") SELECT "id", "name" FROM "Source";
DROP TABLE "Source";
ALTER TABLE "new_Source" RENAME TO "Source";
CREATE UNIQUE INDEX "Source_name_key" ON "Source"("name");
CREATE TABLE "new_PlayerCharacter" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "userId" TEXT,
    "ancestryId" TEXT NOT NULL,
    "backgroundId" TEXT NOT NULL,
    "playerClassId" TEXT NOT NULL,
    CONSTRAINT "PlayerCharacter_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "PlayerCharacter_ancestryId_fkey" FOREIGN KEY ("ancestryId") REFERENCES "Ancestry" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "PlayerCharacter_backgroundId_fkey" FOREIGN KEY ("backgroundId") REFERENCES "Background" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "PlayerCharacter_playerClassId_fkey" FOREIGN KEY ("playerClassId") REFERENCES "PlayerClass" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_PlayerCharacter" ("ancestryId", "backgroundId", "id", "name", "playerClassId", "userId") SELECT "ancestryId", "backgroundId", "id", "name", "playerClassId", "userId" FROM "PlayerCharacter";
DROP TABLE "PlayerCharacter";
ALTER TABLE "new_PlayerCharacter" RENAME TO "PlayerCharacter";
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT,
    "email" TEXT,
    "emailVerified" DATETIME,
    "image" TEXT
);
INSERT INTO "new_User" ("email", "emailVerified", "id", "image", "name") SELECT "email", "emailVerified", "id", "image", "name" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
CREATE TABLE "new_Account" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,
    CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Account" ("access_token", "expires_at", "id", "id_token", "provider", "providerAccountId", "refresh_token", "scope", "session_state", "token_type", "type", "userId") SELECT "access_token", "expires_at", "id", "id_token", "provider", "providerAccountId", "refresh_token", "scope", "session_state", "token_type", "type", "userId" FROM "Account";
DROP TABLE "Account";
ALTER TABLE "new_Account" RENAME TO "Account";
CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON "Account"("provider", "providerAccountId");
CREATE TABLE "new_Equipment" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL DEFAULT '',
    "sourceId" TEXT NOT NULL,
    CONSTRAINT "Equipment_sourceId_fkey" FOREIGN KEY ("sourceId") REFERENCES "Source" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Equipment" ("description", "id", "name", "sourceId") SELECT "description", "id", "name", "sourceId" FROM "Equipment";
DROP TABLE "Equipment";
ALTER TABLE "new_Equipment" RENAME TO "Equipment";
CREATE TABLE "new_PlayerClass" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "sourceId" TEXT NOT NULL,
    CONSTRAINT "PlayerClass_sourceId_fkey" FOREIGN KEY ("sourceId") REFERENCES "Source" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_PlayerClass" ("description", "id", "name", "sourceId") SELECT "description", "id", "name", "sourceId" FROM "PlayerClass";
DROP TABLE "PlayerClass";
ALTER TABLE "new_PlayerClass" RENAME TO "PlayerClass";
CREATE TABLE "new_AncestryBoost" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "ancestryId" TEXT NOT NULL,
    "isBoost" BOOLEAN NOT NULL,
    "strength" BOOLEAN NOT NULL,
    "dexterity" BOOLEAN NOT NULL,
    "constitution" BOOLEAN NOT NULL,
    "intelligence" BOOLEAN NOT NULL,
    "wisdom" BOOLEAN NOT NULL,
    "charisma" BOOLEAN NOT NULL,
    CONSTRAINT "AncestryBoost_ancestryId_fkey" FOREIGN KEY ("ancestryId") REFERENCES "Ancestry" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_AncestryBoost" ("ancestryId") SELECT "ancestryId" FROM "AncestryBoost";
DROP TABLE "AncestryBoost";
ALTER TABLE "new_AncestryBoost" RENAME TO "AncestryBoost";
CREATE TABLE "new_Session" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "sessionToken" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expires" DATETIME NOT NULL,
    CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Session" ("expires", "id", "sessionToken", "userId") SELECT "expires", "id", "sessionToken", "userId" FROM "Session";
DROP TABLE "Session";
ALTER TABLE "new_Session" RENAME TO "Session";
CREATE UNIQUE INDEX "Session_sessionToken_key" ON "Session"("sessionToken");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
