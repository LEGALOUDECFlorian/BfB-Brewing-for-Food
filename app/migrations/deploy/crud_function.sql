-- Deploy BfB:crud_function to pg

BEGIN;

-- USERS
CREATE FUNCTION "create_users"(json) RETURNS "users" AS $$

    INSERT INTO "users"
    (
        "firstname",
        "lastname",
        "email",
        "password",
        "username",
        "compagnie",
        "web_site_compagnie",
        "role_id"
    ) VALUES (
        $1->>'firstname',
        $1->>'lastname',
        $1->>'email',
        $1->>'password',
        $1->>'username',
        COALESCE($1->>'compagnie',''),
        COALESCE($1->>'web_site_compagnie',''),
        COALESCE(($1->>'role_id')::int,1)
    )
    RETURNING *;

$$ LANGUAGE sql STRICT;    


CREATE FUNCTION "update_users"(json) RETURNS "users" AS $$

     UPDATE "users" SET
        "firstname" = COALESCE($1->>'firstname',"firstname"),
        "lastname" = COALESCE($1->>'lastname',"lastname"),
        "email" = COALESCE($1->>'email',"email"),
        "password" = COALESCE($1->>'password',"password"),
        "username" = COALESCE($1->>'username',"username"),
        "compagnie" = COALESCE($1->>'compagnie',"compagnie"),
        "web_site_compagnie" = COALESCE($1->>'web_site_compagnie',"web_site_compagnie"),
        "role_id" = COALESCE(($1->>'role_id')::int,"role_id"),
        "updated_at" = now()
    WHERE id = ($1->>'id')::int
    RETURNING *;    
$$ LANGUAGE sql STRICT;

-- RECIPE

CREATE FUNCTION "create_recipe"(json) RETURNS "recipe" AS $$

    INSERT INTO "recipe"
    (
        "title",
        "slug",
        "number_of_parts",
        "description",
        "ingredients",
        "instruction",
        "preparation_time",
        "cooking_time",
        "picture"
    ) VALUES (
        $1->>'title',
        $1->>'slug',
        ($1->>'number_of_parts')::int,
        $1->>'description',
        $1->>'ingredients',
        $1->>'instruction',
        ($1->>'preparation_time')::int,
        ($1->>'cooking_time')::int,
        $1->>'picture'
    )
    RETURNING *;

$$ LANGUAGE sql STRICT;    


CREATE FUNCTION "update_recipe"(json) RETURNS "recipe" AS $$

     UPDATE "recipe" SET
        "title" = COALESCE($1->>'title',"title"),
        "slug" = COALESCE($1->>'slug',"slug"),
        "number_of_parts" = COALESCE(($1->>'number_of_parts')::int,"number_of_parts"),
        "description" = COALESCE($1->>'description',"description"),
        "ingredients" = COALESCE($1->>'ingredients',"ingredients"),
        "instruction" = COALESCE($1->>'instruction',"instruction"),
        "preparation_time" = COALESCE(($1->>'preparation_time')::int,"preparation_time"),
        "cooking_time" = COALESCE(($1->>'cooking_time')::int,"cooking_time"),
        "picture" = COALESCE($1->>'picture',"picture"),
        "updated_at" = now()
    WHERE id = ($1->>'id')::int
    RETURNING *;    
$$ LANGUAGE sql STRICT;
COMMIT;

-- OPINION

CREATE FUNCTION "create_opinion"(json) RETURNS "opinion" AS $$

    INSERT INTO "opinion"
    (
        "note",
        "comment",
        "recipe_id",
        "user_id"
    ) VALUES (
        ($1->>'note')::int,
        $1->>'comment',
        ($1->>'recipe_id')::int,
        ($1->>'user_id')::int
    )
    RETURNING *;

$$ LANGUAGE sql STRICT;    


CREATE FUNCTION "update_opinion"(json) RETURNS "opinion" AS $$

     UPDATE "opinion" SET
        "note" = COALESCE(($1->>'note')::int,"note"),
        "comment" = COALESCE($1->>'comment',"comment"),
        "recipe_id" = COALESCE(($1->>'recipe_id')::int,"recipe_id"),
        "user_id" = COALESCE(($1->>'user_id')::int,"user_id"),
        "updated_at" = now()
    WHERE id = ($1->>'id')::int
    RETURNING *; 

$$ LANGUAGE sql STRICT;

COMMIT;
