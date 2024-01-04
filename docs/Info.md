creation table : 

psql -U superbrewer2 -d brewingfood2 -f data/bfb_table.sql


seeding :

psql -U superbrewer2 -d brewingfood2 -f data/bfb_seeding.sql



DROP DATABASE IF EXISTS brewingfood2 ;
