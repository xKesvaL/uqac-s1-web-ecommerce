-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_category" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_category" ("createdAt", "id", "name", "updatedAt") SELECT "createdAt", "id", "name", "updatedAt" FROM "category";
DROP TABLE "category";
ALTER TABLE "new_category" RENAME TO "category";
CREATE TABLE "new_review" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "rating" INTEGER NOT NULL,
    "comment" TEXT NOT NULL,
    "verified" BOOLEAN NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "steroidId" TEXT NOT NULL,
    CONSTRAINT "review_steroidId_fkey" FOREIGN KEY ("steroidId") REFERENCES "steroid" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_review" ("comment", "createdAt", "id", "rating", "steroidId", "updatedAt", "verified") SELECT "comment", "createdAt", "id", "rating", "steroidId", "updatedAt", "verified" FROM "review";
DROP TABLE "review";
ALTER TABLE "new_review" RENAME TO "review";
CREATE TABLE "new_steroid" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "categoryId" TEXT,
    CONSTRAINT "steroid_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "category" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_steroid" ("categoryId", "createdAt", "description", "id", "name", "price", "type", "updatedAt") SELECT "categoryId", "createdAt", "description", "id", "name", "price", "type", "updatedAt" FROM "steroid";
DROP TABLE "steroid";
ALTER TABLE "new_steroid" RENAME TO "steroid";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
