-- Revert BfB:crud_function from pg

BEGIN;

DROP FUNCTION 

"update_opinion"(json),
"insert_opinion"(json),
"update_recipe"(json),
"insert_recipe"(json),
"update_users"(json),
"insert_users"(json)
 
 CASCADE;
  
   
   


COMMIT;