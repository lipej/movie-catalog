-- CreateEnum
CREATE TYPE "Types" AS ENUM ('MOVIE', 'TVSHOW');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT false,
    "activationHash" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MovieShow" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "originalTitle" TEXT NOT NULL,
    "year" TEXT NOT NULL,
    "duration" TEXT NOT NULL,
    "tags" TEXT[],
    "resume" TEXT NOT NULL,
    "cast" TEXT[],
    "director" TEXT NOT NULL,
    "rating" TEXT[],
    "awards" TEXT[],
    "type" "Types" NOT NULL,

    CONSTRAINT "MovieShow_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "MovieShow_id_key" ON "MovieShow"("id");
