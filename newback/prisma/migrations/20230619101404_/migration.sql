/*
  Warnings:

  - Added the required column `state` to the `client` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "client" ADD COLUMN     "state" TEXT NOT NULL;
