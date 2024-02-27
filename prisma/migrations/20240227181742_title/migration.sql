/*
  Warnings:

  - Added the required column `title` to the `Tour` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Tour" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "city" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "stops" TEXT NOT NULL,
    "image" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Tour" ("city", "country", "createdAt", "description", "id", "image", "stops", "updatedAt") SELECT "city", "country", "createdAt", "description", "id", "image", "stops", "updatedAt" FROM "Tour";
DROP TABLE "Tour";
ALTER TABLE "new_Tour" RENAME TO "Tour";
CREATE UNIQUE INDEX "Tour_city_country_key" ON "Tour"("city", "country");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
