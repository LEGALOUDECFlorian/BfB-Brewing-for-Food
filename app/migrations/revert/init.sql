-- Revert BfB:init from pg


BEGIN;

DROP TABLE "recipe_has_category", "opinion", "recipe", "users", "category", "role";

COMMIT;
