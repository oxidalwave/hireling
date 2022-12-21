-- DropIndex
DROP INDEX "Feat_name_kind_sourceId_key";

-- CreateTable
CREATE TABLE "AncestryFeat" (
    "ancestryId" TEXT NOT NULL,
    "featId" TEXT NOT NULL,

    PRIMARY KEY ("ancestryId", "featId"),
    CONSTRAINT "AncestryFeat_ancestryId_fkey" FOREIGN KEY ("ancestryId") REFERENCES "Ancestry" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "AncestryFeat_featId_fkey" FOREIGN KEY ("featId") REFERENCES "Feat" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
