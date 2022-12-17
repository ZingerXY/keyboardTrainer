-- Задания, статистика пользователя (общая), 
-- можно так же хранить историю прохождения (именно запись о том какое задание проходимо пользователь,
-- когда, какие результаты), 
-- но думаю это уже перебор

-- Название, сложность (скорее всего лучше хранить в цифрах от одного до 5), сам текст задания
-- В последующем будет видео что нужно добавить дополнительно

GRANT ALL PRIVILEGES ON DATABASE kangaroo to gb_user;

DROP DATABASE IF EXISTS  kangaroo;
CREATE DATABASE kangaroo;

DROP TABLE IF EXISTS "users";
CREATE TABLE "users" (
  id SERIAL PRIMARY KEY,
  username varchar(255) default NULL,
  email varchar(255) default NULL,
  password varchar(255),
  statistics_id INT,
  created_at TIMESTAMP
);

DROP TABLE IF EXISTS "tasks";

CREATE TABLE "tasks" (
  id SERIAL PRIMARY KEY,
  task TEXT default NULL, -- задание
  difficulty integer NULL, --сложность задания
  task_description TEXT default NULL, -- описание задания
  stats_id INT -- статистика 
);

DROP TABLE IF EXISTS "statistics";
CREATE TABLE "statistics" (
  id SERIAL PRIMARY KEY ,
  time varchar(255), --время потраченное на задание
  typed_characters varchar(255) default NULL, --набрано знаков
  speed_of_signs_per_minute varchar(255), --скорость знаков в минуту
  percentage_accuracy varchar(255), --точность в процентах
  player_id INT  --айди игрока
);

ALTER TABLE statistics
ADD CONSTRAINT users_to_player_id_fk
FOREIGN KEY (player_id)
REFERENCES users (id)
ON DELETE CASCADE;

ALTER TABLE tasks
ADD CONSTRAINT statistics_to_tasks_id_fk
FOREIGN KEY (stats_id)
REFERENCES statistics (id)
ON DELETE CASCADE;

INSERT INTO users (username,email,password,statistics_id,created_at)
VALUES
  ('Rhonda Navarro','risus.a@icloud.couk','ACI56UIU6NL',1,'2022-08-08 17:54:06'),
  ('Raymond Neal','elit@aol.ca','XRA17DXL9VB',2,'2022-05-20 15:46:58'),
  ('William Leach','dolor.quam@aol.net','ENF67YLO0LM',3,'2023-11-13 10:11:51'),
  ('Caleb Gray','nunc@outlook.couk','KUC32OPZ3ET',4,'2022-09-07 02:57:12'),
  ('Arthur Kramer','et@icloud.ca','DSV21GKX9FZ',5,'2023-11-10 11:59:42'),
  ('Clio Swanson','consequat.enim@protonmail.couk','WBI24GIH8BU',6,'2022-01-11 13:58:31'),
  ('Bevis Bowers','non.nisi@aol.com','QBN55CDA5BJ',7,'2022-07-13 04:28:31'),
  ('Maggy Henson','aliquam@aol.com','FFM26WHG8EI',8,'2022-02-18 09:07:58'),
  ('Aaron Bradley','fusce@hotmail.edu','OEP06JRR3TI',9,'2021-12-29 22:14:21'),
  ('Shelby Ford','purus.duis@aol.ca','PGY70NEY3SH',10,'2023-04-13 00:42:06'),
  ('Audrey Carver','at.velit.pellentesque@protonmail.net','QNK06WTK6VS',11,'2023-10-17 13:46:11'),
  ('Ishmael Anderson','tempor.erat@protonmail.com','CIR18GYT2RY',12,'2023-01-26 14:06:51'),
  ('Howard Newton','eget.odio@outlook.couk','PIX63IOM8WG',13,'2023-01-02 07:45:53'),
  ('Ivory Ingram','lacus@icloud.net','PIQ74EOC7AW',14,'2023-06-06 00:22:17'),
  ('Rashad Andrews','ultricies.ligula@outlook.edu','SYJ50OWQ6PQ',15,'2023-03-15 12:53:26'),
  ('Steven Petty','ipsum@hotmail.net','ZIW39FYT0SO',16,'2022-10-07 06:40:18'),
  ('Beatrice Madden','malesuada.integer@hotmail.org','KSZ82SEB8JI',17,'2022-12-20 01:06:29'),
  ('Lewis Roach','placerat.orci@hotmail.net','XPH72OLW1QD',18,'2023-10-25 17:00:46'),
  ('Zenaida Robertson','lacinia.vitae@protonmail.org','AEE48BTI4QK',19,'2022-11-13 06:01:11'),
  ('Zahir Crawford','eleifend.non.dapibus@icloud.edu','ORY31UXK4WD',20,'2023-05-22 00:33:19');

INSERT INTO statistics (time,typed_characters,speed_of_signs_per_minute,percentage_accuracy,player_id)
VALUES
  ('0:31:14',98,375,14,19),
  ('0:28:15',28,510,9,14),
  ('0:09:06',53,75,62,5),
  ('0:37:59',48,328,48,3),
  ('0:03:43',89,821,83,10),
  ('0:47:31',26,902,34,13),
  ('0:20:40',93,757,11,20),
  ('0:40:39',64,206,44,13),
  ('0:34:53',32,744,61,4),
  ('0:41:21',74,31,93,6),
  ('0:38:56',96,975,79,11),
  ('0:17:56',31,915,34,10),
  ('0:07:26',77,215,87,20),
  ('0:24:07',15,336,45,4),
  ('0:18:57',92,323,52,10),
  ('0:53:57',95,474,55,10),
  ('0:15:15',40,867,39,17),
  ('0:09:25',63,919,46,4),
  ('0:15:38',46,423,12,11),
  ('0:33:20',8,951,59,12);

INSERT INTO tasks (task,difficulty,task_description,stats_id)
VALUES
  ('Phasellus elit pede,',2,'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin',9),
  ('feugiat metus sit',2,'dapibus quam quis diam. Pellentesque habitant morbi tristique senectus et netus et malesuada',13),
  ('pretium et, rutrum',2,'et magnis dis parturient montes, nascetur ridiculus mus. Donec dignissim magna a tortor.',19),
  ('pulvinar arcu et',2,'amet metus. Aliquam erat volutpat. Nulla facilisis. Suspendisse commodo tincidunt nibh. Phasellus',8),
  ('placerat, augue. Sed',4,'velit egestas lacinia. Sed congue, elit sed consequat auctor, nunc nulla vulputate dui, nec',8),
  ('urna suscipit nonummy.',2,'In condimentum. Donec at arcu. Vestibulum ante ipsum primis in faucibus orci luctus et',2),
  ('diam nunc, ullamcorper',2,'Donec egestas. Duis ac arcu. Nunc mauris. Morbi non sapien molestie',9),
  ('mollis lectus pede',3,'augue eu tellus. Phasellus elit pede, malesuada vel, venenatis vel, faucibus id, libero. Donec consectetuer',19),
  ('dui, nec tempus',2,'Proin dolor. Nulla semper tellus id nunc interdum feugiat. Sed nec metus',10),
  ('Duis risus odio,',2,'Nullam lobortis quam a felis ullamcorper viverra. Maecenas iaculis aliquet',16),
  ('torquent per conubia',5,'lobortis mauris. Suspendisse aliquet molestie tellus. Aenean egestas hendrerit neque. In ornare',7),
  ('molestie orci tincidunt',4,'at, libero. Morbi accumsan laoreet ipsum. Curabitur consequat, lectus sit amet',15),
  ('laoreet ipsum. Curabitur',5,'Maecenas libero est, congue a, aliquet vel, vulputate eu, odio. Phasellus at augue id ante',10),
  ('at, egestas a,',4,'quam quis diam. Pellentesque habitant morbi tristique senectus et netus et malesuada',2),
  ('Aliquam tincidunt, nunc',1,'malesuada. Integer id magna et ipsum cursus vestibulum. Mauris magna. Duis dignissim tempor arcu.',7),
  ('vitae, erat. Vivamus',2,'in molestie tortor nibh sit amet orci. Ut sagittis lobortis mauris. Suspendisse',13),
  ('mattis ornare, lectus',4,'Sed pharetra, felis eget varius ultrices, mauris ipsum porta elit, a feugiat',16),
  ('In lorem. Donec',2,'Nulla eu neque pellentesque massa lobortis ultrices. Vivamus rhoncus. Donec est.',5),
  ('Etiam vestibulum massa',4,'sit amet nulla. Donec non justo. Proin non massa non ante bibendum',14),
  ('lorem ut aliquam',4,'elit, dictum eu, eleifend nec, malesuada ut, sem. Nulla interdum. Curabitur',4);