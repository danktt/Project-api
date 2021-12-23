-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "nickname" TEXT NOT NULL,
    "pattent" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);
