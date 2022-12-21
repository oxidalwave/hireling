-- CreateTable
CREATE TABLE "PlayerClassBoost" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "playerClassId" TEXT NOT NULL,
    "isBoost" BOOLEAN NOT NULL,
    "strength" BOOLEAN NOT NULL,
    "dexterity" BOOLEAN NOT NULL,
    "constitution" BOOLEAN NOT NULL,
    "intelligence" BOOLEAN NOT NULL,
    "wisdom" BOOLEAN NOT NULL,
    "charisma" BOOLEAN NOT NULL,
    CONSTRAINT "PlayerClassBoost_playerClassId_fkey" FOREIGN KEY ("playerClassId") REFERENCES "PlayerClass" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
