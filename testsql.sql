-- recuperation d'unr recette par son id avec sa/ses categorie(s), note(s), commentaire(s) et qui a écrit la critique 

SELECT DISTINCT
"recipe"."title", 
"recipe"."number_of_parts",
"recipe"."description",
"recipe"."ingredients",
"recipe"."instruction",
"recipe"."preparation_time",
"recipe"."cooking_time",
"recipe"."picture",
"category"."name" AS "category",
"opinion"."note",
"opinion"."comment",
"users"."username"
FROM "recipe" 
JOIN "recipe_has_category" 
   ON "recipe_id" = "recipe"."id"
JOIN "category"
   ON "category"."id" = "category_id"
JOIN "opinion"  
   ON "opinion"."recipe_id" = "recipe"."id" 
JOIN "users"
   ON "users"."id" = "opinion"."user_id"
   WHERE "recipe"."id"  = 2;
--    GROUP BY "category"."name", "recipe"."title","recipe"."number_of_parts",
-- "recipe"."description",
-- "recipe"."ingredients",
-- "recipe"."instruction",
-- "recipe"."preparation_time",
-- "recipe"."cooking_time",
-- "recipe"."picture",
-- "category",
-- "opinion"."note",
-- "opinion"."comment",
-- "users"."username";