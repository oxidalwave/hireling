-- CreateTable
CREATE TABLE "AncestryBoost" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "ancestryId" INTEGER NOT NULL,
    "isBoost" BOOLEAN NOT NULL,
    "strength" BOOLEAN NOT NULL,
    "dexterity" BOOLEAN NOT NULL,
    "constitution" BOOLEAN NOT NULL,
    "intelligence" BOOLEAN NOT NULL,
    "wisdom" BOOLEAN NOT NULL,
    "charisma" BOOLEAN NOT NULL,
    CONSTRAINT "AncestryBoost_ancestryId_fkey" FOREIGN KEY ("ancestryId") REFERENCES "Ancestry" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
