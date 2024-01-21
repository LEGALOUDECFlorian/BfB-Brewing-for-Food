BEGIN;

-- Ajout de rôles
INSERT INTO"role" ("name", "created_at")VALUES 
    ('user', NOW()), 
    ('admin', NOW());

-- Ajout de catégories
INSERT INTO"category" ("name", "created_at")VALUES 
    ('beer', NOW()), 
    ('malt', NOW()), 
    ('yeast', NOW()), 
    ('hops', NOW());

-- Ajout d'utilisateurs
INSERT INTO"users" 
    ("firstname","lastname","email","password","username","compagnie","web_site_compagnie","role_id","created_at")VALUES
    ('Charlie','Brewer','charlie.brewer@example.com','password','Charlie_Brewer','','',2,NOW()),
    ('Samantha','Hophead','samantha.hophead@example.com','password','Samantha_Hophead','','',1,NOW());

-- Ajout de recettes
INSERT INTO
    "recipe"
     ("title","slug","number_of_parts","description","ingredients","instruction","preparation_time","cooking_time","picture","user_id","created_at" )VALUES 
        (
        'Limonade citronnée à la levure de bière',
        'Limonade citronnée a la levure de biere',
        8,
        '',
        '1.5 l d''eau,1 kg de sucre cristallisé (à confiture),1 citron bio (ou non traité),15 cl de vinaigre blanc,5 g de levure de bière',
        'Lavez et coupez le citron en morceaux (avec la peau).
    Mélangez tous les ingrédients dans une terrine ou un grand pichet, remuez et laissez reposer et fermenter pendant au moins 2 jours. 
    Remuez de temps en temps.
    Filtrez et laissez à nouveau reposer au moins deux jours.
    Servez bien frais.',
        8,
        0,
        ' https://www.fourchette-et-bikini.fr/sites/default/files/styles/1200x675/public/migration-images/0dc3e1d49cd18c614d760e33cc3d7d68.webp',
        1,
        NOW()
    ),

 (
    'poulet à la bière et au miel',
    'poulet a la biere et au miel',
    3,
    'Voici le poulet à la bière ! Les amateurs de houblon et de carbonade apprécieront la légère amertume de la sauce, adoucie par le miel. 
    J’utilise ici des hauts de cuisses de poulet avec des pommes de terre. Il peut également être servi avec des petites pâtes.',
    '6 hauts de cuisses de poulet,
     30 cl de bière blonde,
     1 belle cuillère à soupe de miel (acacia ici),
     1 cc de graines de moutarde (ou de moutarde à l''ancienne, à défaut),
     1 oignon,
     1 gousse d''ail,
     1 cs de farine,
     1/2 cube de bouillon de poule,
     Poivre,
     3 carottes,
     3 pommes de terre,
     Huile végétale',
    'Dans un faitout, faire dorer le poulet dans un fond d''huile d''olive. Cela prend 6 à 8 minutes.
     Retirer les morceaux de viande et vider l''excès de graisse.
     Faire fondre l''oignon et la gousse d''ail émincés dans le même faitout, en ajoutant un peu d''huile “fraîche” si nécessaire.
     Ajouter les carottes coupées en deux dans la longueur puis en tronçons.
     Replacer le poulet dans le faitout, saupoudrer avec la cuillerée de farine et bien mélanger.
     Arroser avec la bière. Ajouter le miel, les graines de moutarde et le demi cube de bouillon de poule émietté.
     Couvrir et laisser mijoter à petit feu et à couvert pendant 35 minutes.
     En parallèle, cuire les pommes de terre à l’eau. Les éplucher et les couper en gros dés.
     Ajouter les dés dans le faitout et laisser mijoter 5 minutes supplémentaires.
     Le poulet à la bière et au miel est prêt !',
    10,
    40,
    ' https://www.cookismo.fr/wp-content/uploads/2014/02/poulet-biere-et-miel440%C2%A9christelle-vogel-cookismo.jpg',
    1,
    NOW()
),

 (
    'Biscuits aux drêches et amandes',
    'Biscuits aux dreches et amandes',
    10,
    'Les drêches sont un co-produit créé lors de la fabrication de la bière : 
     c''est la partie restante du malt d’orge (ou de blé) après sa fermentation (soit l’enveloppe riche en fibres et le grain,
     dépourvu de son amidon, et donc concentré en protéines & minéraux).',
    '50 g de drêches, 100 g de farine, 50 g de sucre (complet si possible), 50 g d''huile, 1 oeuf, 1 c. à c. de levure chimique, 1 c. à s. d''eau, 1 pincée de sel, 50 g d''amandes',
    'Mélangez les drêches et la farine, ajoutez la levure et le sucre.
     Ajoutez l''huile et mélangez bien.
     Ajoutez l''oeuf, le sel, un peu d''eau pour détendre si besoin puis les amandes.
     Préchauffez le four à 180°.
     Sur un lèche frite huilé, faites une dizaine de tas avec une grosse cuillère.
     Cuisez à four chaud pendant 10 minutes environ',
    10,
    10,
    ' https://www.laure-auzeil-nutrition.fr/wp-content/uploads/2019/11/IMG_5229-1080x810.jpg',
    1,
    NOW()
),

 (
    'La galette au houblon, orge caramélisée, bière glacée',
    'La galette au houblon, orge caramelisee, biere glacee',
    6,
    'Orge, malt, torréfaction, fleurs de houblon… Pour ce dessert signature, la chef pâtissière du Plaza Athénée convie à une expérience sensorielle unique autour de la bière et de l''amertume.',
    'Pour la galette au houblon,
     275 g de lait entier,
     100 ml de bière brune,
     8 g de houblon mixé en poudre,
     300 g de farine,
     4 g de sel fin,
     9 g de levure chimique,
     240 g de beurre fondu chaud,
     3 œufs, jaunes et blancs séparés,
     35 g de sucre,
     Pour l’orge caramélisée,
     100 g d’orge maltée,
     20 g d’eau,
     45 g de sucre bio non raffiné,
     Pour la sauce à l’orge,
     100 g d’orge maltée,
     200 g de lait,
     150 g de crème liquide,
     100 ml de bière brune type Monk,
     10 g de miel d’arbousier',
    'Étape 1 , 
     la préparation de la galette au houblon.
     Chauffer doucement le lait, la bière et le houblon. Dans un cul-de-poule, mélanger la farine, le sel et la levure. 
     Incorporer le mélange lait-bière en fouettant, ajouter les jaunes puis le beurre fondu, toujours en fouettant. 
     Monter les blancs en les serrant au sucre. Incorporer les blancs montés. Cuire en galette épaisse dans un poêlon. 
     Caraméliser au beurre sucré.
     Étape 2 ,
     la caramélisation de l''orge.
     Torréfier rapidement l''orge à la poêle. Faire chauffer l''eau et le sucre.
     Dès que le sirop s’épaissit, ajouter l''orge. Mélanger sur feu doux jusqu’à caramélisation. Débarrasser sur papier de cuisson graissé, laisser refroidir, puis concasser finement.
     Étape 3 ,
     la confection de la sauce à l''orge.
     Torréfier l''orge à la poêle. Faire chauffer le lait avec la crème, 
     la moitié de la bière et l''orge, éteindre et infuser 5 minutes.
     Mixer puis passer au chinois.
     Ajouter le reste de la bière et réserver au frais.
     Étape 4 ,
     Le dressage et le service.
     Saupoudrer la galette chaude d''orge caramélisée. 
     Servir avec la sauce à part, une pointe de miel d’arbousier sur le bord de l''assiette et une bière brune glacée.',
    25,
    0,
    ' https://img.lemde.fr/2019/07/11/0/0/5760/3840/800/0/75/0/1637316_cGC5PzZH4KyEid2Qi-jdtiAo.jpg',
    1,
    NOW()
);

-- ajout d'opinion
INSERT INTO "opinion" ("recipe_id", "user_id", "note", "comment", "created_at") VALUES
  (1, 2, 4, 'Très rafraîchissante, j''adore cette limonade à la levure de bière!', NOW()),
  (2, 2, 5, 'Le poulet à la bière et au miel est délicieux, la sauce est incroyable!', NOW()),
  (3, 1, 3, 'Les biscuits aux drêches & amandes sont originaux, mais un peu secs.', NOW()),
  (4, 1, 5, 'La galette au houblon est une expérience gustative exceptionnelle!', NOW()),
  (4, 2, 4, 'J''ai adoré la sauce à l''orge, c''est vraiment unique!', NOW()),
  (1, 1, 2, 'La limonade à la levure de bière n''est pas à mon goût, trop acide.', NOW()),
  (2, 1, 2, 'Je n''ai pas apprécié le mélange de saveurs dans le poulet à la bière et au miel.', NOW()),
  (3, 2, 1, 'Les biscuits aux drêches & amandes sont secs et manquent de saveur.', NOW()),
  (4, 1, 2, 'La galette au houblon est trop amère pour moi, je n''ai pas aimé.', NOW());

-- liaisons entre recettes et catégories
INSERT INTO "recipe_has_category" ("recipe_id", "category_id", "created_at") VALUES
  (1, 3, NOW()), 
  (2, 1, NOW()),
  (3, 2, NOW()),
  (4, 4, NOW()),
  (4, 1, NOW());

COMMIT;