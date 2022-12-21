-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Boost" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "kind" TEXT NOT NULL,
    "ancestryId" TEXT,
    "backgroundId" TEXT,
    "playerClassId" TEXT,
    "isBoost" BOOLEAN NOT NULL DEFAULT true,
    CONSTRAINT "Boost_ancestryId_fkey" FOREIGN KEY ("ancestryId") REFERENCES "Ancestry" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Boost_backgroundId_fkey" FOREIGN KEY ("backgroundId") REFERENCES "Background" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Boost_playerClassId_fkey" FOREIGN KEY ("playerClassId") REFERENCES "PlayerClass" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Boost" ("ancestryId", "backgroundId", "id", "isBoost", "kind", "playerClassId") SELECT "ancestryId", "backgroundId", "id", "isBoost", "kind", "playerClassId" FROM "Boost";
DROP TABLE "Boost";
ALTER TABLE "new_Boost" RENAME TO "Boost";
CREATE UNIQUE INDEX "Boost_playerClassId_key" ON "Boost"("playerClassId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
