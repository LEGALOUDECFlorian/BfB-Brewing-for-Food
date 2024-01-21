-- Revert BfB:crud_function from pg

BEGIN;

DROP FUNCTION 

"update_opinion"(json),
"create_opinion"(json),
"update_recipe"(json),
"create_recipe"(json),
"update_users"(json),
"create_users"(json)
 
 CASCADE;
  
   
   


COMMIT;