/*
  Warnings:

  - Added the required column `state` to the `field` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "field" ADD COLUMN     "state" BOOLEAN NOT NULL;
