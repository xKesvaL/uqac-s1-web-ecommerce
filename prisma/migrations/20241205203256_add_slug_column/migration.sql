-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_category" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL DEFAULT 'st',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_category" ("createdAt", "id", "name", "updatedAt") SELECT "createdAt", "id", "name", "updatedAt" FROM "category";
DROP TABLE "category";
ALTER TABLE "new_category" RENAME TO "category";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
