-- DropForeignKey
ALTER TABLE "PlayerCharacter" DROP CONSTRAINT "PlayerCharacter_ancestryId_fkey";

-- DropForeignKey
ALTER TABLE "PlayerCharacter" DROP CONSTRAINT "PlayerCharacter_backgroundId_fkey";

-- DropForeignKey
ALTER TABLE "PlayerCharacter" DROP CONSTRAINT "PlayerCharacter_playerClassId_fkey";

-- AlterTable
ALTER TABLE "PlayerCharacter" ALTER COLUMN "ancestryId" DROP NOT NULL,
ALTER COLUMN "backgroundId" DROP NOT NULL,
ALTER COLUMN "playerClassId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "PlayerCharacter" ADD CONSTRAINT "PlayerCharacter_ancestryId_fkey" FOREIGN KEY ("ancestryId") REFERENCES "Ancestry"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlayerCharacter" ADD CONSTRAINT "PlayerCharacter_backgroundId_fkey" FOREIGN KEY ("backgroundId") REFERENCES "Background"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlayerCharacter" ADD CONSTRAINT "PlayerCharacter_playerClassId_fkey" FOREIGN KEY ("playerClassId") REFERENCES "PlayerClass"("id") ON DELETE SET NULL ON UPDATE CASCADE;
