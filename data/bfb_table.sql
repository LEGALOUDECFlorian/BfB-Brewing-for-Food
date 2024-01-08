BEGIN;

-- Suppression des tables avec CASCADE
DROP TABLE IF EXISTS "recipe_has_category", "opinion", "recipe", "category", "users", "role" CASCADE;


-- Table des roles
CREATE TABLE "role" (
    "id"         INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name"       TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);


-- Table des catégories
CREATE TABLE "category" (
    "id" integer GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL, 
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);

-- Table des utilisateurs
CREATE TABLE "users" (
    "id" integer GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    "firstname" TEXT NULL,
    "lastname" TEXT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "username" TEXT NOT NULL UNIQUE ,
    "compagnie" TEXT NOT NULL DEFAULT '',
    "web_site_compagnie"  TEXT NOT NULL DEFAULT '',
    "role_id" INTEGER REFERENCES "role"("id") DEFAULT(1),
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
   
);


-- Table des recettes
CREATE TABLE "recipe" (
    "id" integer GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    "title" TEXT NOT NULL,
    "number_of_parts" INTEGER NOT NULL,
    "description" TEXT NOT NULL DEFAULT '',
    "ingredients" TEXT NOT NULL, 
    "instruction" TEXT NOT NULL,
    "preparation_time" INTEGER NOT NULL,--temps de preparation
    "cooking_time" INTEGER NOT NULL DEFAULT 0,--temps de cuisson
    "picture" TEXT NOT NULL DEFAULT '',
    "user_id" INTEGER REFERENCES "users"("id"),
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);

-- Table des évaluations
CREATE TABLE "opinion" (
    "id" integer GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    "recipe_id" INTEGER REFERENCES "recipe"("id"),
    "user_id" INTEGER REFERENCES "users"("id"),
    "note" INTEGER NOT NULL,
    "comment" TEXT NOT NULL DEFAULT '',
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);

-- CREATE TABLE "recipe_has_opinion" (
--   "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
--   "recipe_id" INT NOT NULL REFERENCES "recipe"("id") ON DELETE CASCADE,
--   "category_id" INT NOT NULL REFERENCES "category"("id"),
--   "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW()
-- );

CREATE TABLE "recipe_has_category" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "recipe_id" INT NOT NULL REFERENCES "recipe"("id") ON DELETE CASCADE,
  "category_id" INT NOT NULL REFERENCES "category"("id"),
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);



COMMIT;