-- Verify BfB:init on pg

BEGIN;

SELECT * FROM "recipe_has_category" WHERE false;
SELECT * FROM "opinion" WHERE false;
SELECT * FROM "recipe" WHERE false;
SELECT * FROM "users" WHERE false;
SELECT * FROM "category" WHERE false;
SELECT * FROM "role" WHERE false;

ROLLBACK;
