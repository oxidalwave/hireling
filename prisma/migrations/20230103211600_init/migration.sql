-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL,
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

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "sessionToken" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "emailVerified" TIMESTAMP(3),
    "image" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VerificationToken" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "AbilityScore" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "abbreviatedName" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "AbilityScore_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Skill" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "abilityScoreId" TEXT NOT NULL,

    CONSTRAINT "Skill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Equipment" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL DEFAULT '',
    "sourceId" TEXT NOT NULL,

    CONSTRAINT "Equipment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Source" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Source_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PlayerCharacter" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "ancestryId" TEXT NOT NULL,
    "backgroundId" TEXT NOT NULL,
    "playerClassId" TEXT NOT NULL,

    CONSTRAINT "PlayerCharacter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PlayerCharacterFeat" (
    "playerCharacterId" TEXT NOT NULL,
    "featId" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Ancestry" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "hp" INTEGER NOT NULL,
    "size" TEXT NOT NULL,
    "speed" INTEGER NOT NULL,
    "sourceId" TEXT NOT NULL,

    CONSTRAINT "Ancestry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Boost" (
    "id" TEXT NOT NULL,
    "kind" TEXT NOT NULL,
    "ancestryId" TEXT,
    "backgroundId" TEXT,
    "playerClassId" TEXT,
    "isBoost" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Boost_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AbilityScoreBoost" (
    "id" TEXT NOT NULL,
    "abilityScoreId" TEXT NOT NULL,
    "boostId" TEXT NOT NULL,

    CONSTRAINT "AbilityScoreBoost_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PlayerCharacterAbilityScoreBoost" (
    "abilityScoreBoostId" TEXT NOT NULL,
    "playerCharacterId" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Background" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "sourceId" TEXT NOT NULL,

    CONSTRAINT "Background_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PlayerClass" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "sourceId" TEXT NOT NULL,

    CONSTRAINT "PlayerClass_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Feat" (
    "id" TEXT NOT NULL,
    "kind" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "level" INTEGER NOT NULL,
    "sourceId" TEXT NOT NULL,

    CONSTRAINT "Feat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AncestryFeat" (
    "ancestryId" TEXT NOT NULL,
    "featId" TEXT NOT NULL,

    CONSTRAINT "AncestryFeat_pkey" PRIMARY KEY ("ancestryId","featId")
);

-- CreateTable
CREATE TABLE "PlayerClassFeat" (
    "playerClassId" TEXT NOT NULL,
    "featId" TEXT NOT NULL,

    CONSTRAINT "PlayerClassFeat_pkey" PRIMARY KEY ("playerClassId","featId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON "Account"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "Session_sessionToken_key" ON "Session"("sessionToken");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_token_key" ON "VerificationToken"("token");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_identifier_token_key" ON "VerificationToken"("identifier", "token");

-- CreateIndex
CREATE UNIQUE INDEX "AbilityScore_name_key" ON "AbilityScore"("name");

-- CreateIndex
CREATE UNIQUE INDEX "AbilityScore_abbreviatedName_key" ON "AbilityScore"("abbreviatedName");

-- CreateIndex
CREATE UNIQUE INDEX "Skill_name_key" ON "Skill"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Source_name_key" ON "Source"("name");

-- CreateIndex
CREATE UNIQUE INDEX "PlayerCharacterFeat_playerCharacterId_featId_key" ON "PlayerCharacterFeat"("playerCharacterId", "featId");

-- CreateIndex
CREATE UNIQUE INDEX "Ancestry_name_sourceId_key" ON "Ancestry"("name", "sourceId");

-- CreateIndex
CREATE UNIQUE INDEX "Boost_playerClassId_key" ON "Boost"("playerClassId");

-- CreateIndex
CREATE UNIQUE INDEX "AbilityScoreBoost_abilityScoreId_boostId_key" ON "AbilityScoreBoost"("abilityScoreId", "boostId");

-- CreateIndex
CREATE UNIQUE INDEX "PlayerCharacterAbilityScoreBoost_abilityScoreBoostId_player_key" ON "PlayerCharacterAbilityScoreBoost"("abilityScoreBoostId", "playerCharacterId");

-- CreateIndex
CREATE UNIQUE INDEX "Background_name_sourceId_key" ON "Background"("name", "sourceId");

-- CreateIndex
CREATE UNIQUE INDEX "PlayerClass_name_key" ON "PlayerClass"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Feat_kind_name_sourceId_key" ON "Feat"("kind", "name", "sourceId");

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Skill" ADD CONSTRAINT "Skill_abilityScoreId_fkey" FOREIGN KEY ("abilityScoreId") REFERENCES "AbilityScore"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Equipment" ADD CONSTRAINT "Equipment_sourceId_fkey" FOREIGN KEY ("sourceId") REFERENCES "Source"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlayerCharacter" ADD CONSTRAINT "PlayerCharacter_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlayerCharacter" ADD CONSTRAINT "PlayerCharacter_ancestryId_fkey" FOREIGN KEY ("ancestryId") REFERENCES "Ancestry"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlayerCharacter" ADD CONSTRAINT "PlayerCharacter_backgroundId_fkey" FOREIGN KEY ("backgroundId") REFERENCES "Background"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlayerCharacter" ADD CONSTRAINT "PlayerCharacter_playerClassId_fkey" FOREIGN KEY ("playerClassId") REFERENCES "PlayerClass"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlayerCharacterFeat" ADD CONSTRAINT "PlayerCharacterFeat_playerCharacterId_fkey" FOREIGN KEY ("playerCharacterId") REFERENCES "PlayerCharacter"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlayerCharacterFeat" ADD CONSTRAINT "PlayerCharacterFeat_featId_fkey" FOREIGN KEY ("featId") REFERENCES "Feat"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ancestry" ADD CONSTRAINT "Ancestry_sourceId_fkey" FOREIGN KEY ("sourceId") REFERENCES "Source"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Boost" ADD CONSTRAINT "Boost_ancestryId_fkey" FOREIGN KEY ("ancestryId") REFERENCES "Ancestry"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Boost" ADD CONSTRAINT "Boost_backgroundId_fkey" FOREIGN KEY ("backgroundId") REFERENCES "Background"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Boost" ADD CONSTRAINT "Boost_playerClassId_fkey" FOREIGN KEY ("playerClassId") REFERENCES "PlayerClass"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AbilityScoreBoost" ADD CONSTRAINT "AbilityScoreBoost_abilityScoreId_fkey" FOREIGN KEY ("abilityScoreId") REFERENCES "AbilityScore"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AbilityScoreBoost" ADD CONSTRAINT "AbilityScoreBoost_boostId_fkey" FOREIGN KEY ("boostId") REFERENCES "Boost"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlayerCharacterAbilityScoreBoost" ADD CONSTRAINT "PlayerCharacterAbilityScoreBoost_abilityScoreBoostId_fkey" FOREIGN KEY ("abilityScoreBoostId") REFERENCES "AbilityScoreBoost"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlayerCharacterAbilityScoreBoost" ADD CONSTRAINT "PlayerCharacterAbilityScoreBoost_playerCharacterId_fkey" FOREIGN KEY ("playerCharacterId") REFERENCES "PlayerCharacter"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Background" ADD CONSTRAINT "Background_sourceId_fkey" FOREIGN KEY ("sourceId") REFERENCES "Source"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlayerClass" ADD CONSTRAINT "PlayerClass_sourceId_fkey" FOREIGN KEY ("sourceId") REFERENCES "Source"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Feat" ADD CONSTRAINT "Feat_sourceId_fkey" FOREIGN KEY ("sourceId") REFERENCES "Source"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AncestryFeat" ADD CONSTRAINT "AncestryFeat_ancestryId_fkey" FOREIGN KEY ("ancestryId") REFERENCES "Ancestry"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AncestryFeat" ADD CONSTRAINT "AncestryFeat_featId_fkey" FOREIGN KEY ("featId") REFERENCES "Feat"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlayerClassFeat" ADD CONSTRAINT "PlayerClassFeat_playerClassId_fkey" FOREIGN KEY ("playerClassId") REFERENCES "PlayerClass"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlayerClassFeat" ADD CONSTRAINT "PlayerClassFeat_featId_fkey" FOREIGN KEY ("featId") REFERENCES "Feat"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
