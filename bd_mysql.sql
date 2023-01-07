-- Основные проблемы в таблице в типах данных: 
-- Все строковые переменные заданы как varchar(255), но ни имя пользователя, 
-- ни email не бывают на 255 символов соответственно можно уменьшить размерность этих полей например до 50-100 символов.
-- Пароль обычно хранится в базе данных в виде хеша фиксированной длинны поэтому для него надо решить какое хеширование мы будем использовать 
-- и задать соответствующий размер например php функция password_hash по алгоритму PASSWORD_BCRYPT всегда возвращает строку длинной 60 символов.

-- Для поля "время потраченное на здание" не стоит использовать строку,
-- лучше взять число и в дальнейшем его уже можно преобразовывать к удобному виду при выводе. 
-- Остальные поля в таблице statistics тоже лучше хранить в виде чисел,
-- "точность в процентах" можно заменить на количество ошибок, 
-- а "скорость знаков в минуту" можно вообще убрать так как ее можно будет посчитать из количества времени потраченного на задания и количества набранных знаков

DROP DATABASE IF EXISTS  kangaroo;
CREATE DATABASE kangaroo;

USE kangaroo;

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` mediumint(8)  NOT NULL auto_increment,
  `username` varchar(100) default NULL COMMENT 'имя пользователя', 
  `email` varchar(100) default NULL COMMENT 'почта', 
  `password` varchar(60) default NULL COMMENT 'пароль',
  `created_at` varchar(100) COMMENT 'дата регистрации',
  PRIMARY KEY (`id`)
) AUTO_INCREMENT=1;

DROP TABLE IF EXISTS `tasks`;

CREATE TABLE `tasks` (
  `id` mediumint(8) NOT NULL auto_increment,
  `task` TEXT default NULL COMMENT 'задание', 
  `difficulty` mediumint default NULL COMMENT 'сложность задания',
  `task_description` TEXT default NULL COMMENT 'описание задания', 
  `stats_id` mediumint default NULL COMMENT 'статистика',  
  PRIMARY KEY (`id`)
) AUTO_INCREMENT=1;

DROP TABLE IF EXISTS `statistics`;

CREATE TABLE `statistics` (
  `id` mediumint(8) NOT NULL auto_increment,
  `time` mediumint default NULL COMMENT 'время потраченное на задание',
  `typed_characters` mediumint default NULL COMMENT 'набрано знаков',
  `number_of_errors` mediumint default NULL COMMENT 'Количество ошибок', 
  `player_id` mediumint(8) COMMENT 'айди игрока',
  PRIMARY KEY (`id`)
) AUTO_INCREMENT=1;


INSERT INTO `statistics` (`time`,`typed_characters`,`number_of_errors`,`player_id`)
VALUES
  (1010,3,68,15),
  (8843,13,39,18),
  (6494,23,59,5),
  (2028,13,5,7),
  (3795,4,26,5),
  (3197,22,42,16),
  (4428,26,88,3),
  (859,12,88,18),
  (8222,26,28,7),
  (4362,27,51,3),
  (3803,22,89,17),
  (4475,22,2,6),
  (7459,5,99,19),
  (2420,28,86,6),
  (6098,25,21,7),
  (5959,11,74,1),
  (9839,4,18,16),
  (7859,23,11,5),
  (397,23,41,12),
  (5700,5,66,17);

INSERT INTO `tasks` (`task`,`difficulty`,`task_description`,`stats_id`)
VALUES
  ("rutrum magna.",5,"vitae nibh. Donec est mauris, rhoncus id, mollis nec, cursus a, enim. Suspendisse aliquet, sem ut",9),
  ("et, rutrum eu, ultrices",5,"odio. Nam interdum enim non nisi. Aenean eget metus. In nec orci. Donec nibh. Quisque nonummy ipsum",15),
  ("lectus pede, ultrices a,",4,"dui. Fusce aliquam, enim nec tempus scelerisque, lorem ipsum sodales purus, in molestie tortor nibh sit amet orci. Ut",15),
  ("iaculis, lacus pede sagittis",3,"in aliquet lobortis, nisi nibh lacinia orci, consectetuer euismod est arcu ac orci. Ut semper pretium",9),
  ("lacus. Quisque purus sapien, gravida",2,"nibh. Aliquam ornare, libero at auctor ullamcorper, nisl arcu iaculis enim, sit amet ornare lectus justo eu arcu. Morbi",2),
  ("mauris sit amet lorem",4,"facilisis eget, ipsum. Donec sollicitudin adipiscing ligula. Aenean gravida nunc sed pede. Cum sociis",17),
  ("malesuada ut, sem. Nulla",3,"posuere vulputate, lacus. Cras interdum. Nunc sollicitudin commodo ipsum. Suspendisse non leo.",9),
  ("Suspendisse ac metus vitae",4,"sodales at, velit. Pellentesque ultricies dignissim lacus. Aliquam rutrum lorem ac risus. Morbi metus. Vivamus euismod urna. Nullam",2),
  ("a, dui. Cras",2,"vitae diam. Proin dolor. Nulla semper tellus id nunc interdum feugiat. Sed nec metus facilisis lorem tristique aliquet. Phasellus",16),
  ("dolor. Fusce feugiat. Lorem",1,"dictum sapien. Aenean massa. Integer vitae nibh. Donec est mauris, rhoncus id,",4),
  ("In faucibus. Morbi vehicula. Pellentesque",4,"sapien. Nunc pulvinar arcu et pede. Nunc sed orci lobortis",13),
  ("semper, dui",3,"consequat auctor, nunc nulla vulputate dui, nec tempus mauris erat eget ipsum. Suspendisse sagittis. Nullam vitae diam. Proin dolor.",5),
  ("Nunc ullamcorper,",3,"et arcu imperdiet ullamcorper. Duis at lacus. Quisque purus sapien, gravida non, sollicitudin a, malesuada id, erat. Etiam vestibulum",5),
  ("Curabitur massa. Vestibulum accumsan neque",3,"a, facilisis non, bibendum sed, est. Nunc laoreet lectus quis massa. Mauris vestibulum, neque",10),
  ("lacinia vitae,",4,"Curabitur egestas nunc sed libero. Proin sed turpis nec mauris blandit",8),
  ("consectetuer mauris",3,"luctus vulputate, nisi sem semper erat, in consectetuer ipsum nunc id enim.",9),
  ("rutrum",4,"sem mollis dui, in sodales elit erat vitae risus. Duis a mi fringilla",14),
  ("interdum enim non",3,"metus. In nec orci. Donec nibh. Quisque nonummy ipsum non arcu.",3),
  ("dapibus quam",3,"vitae sodales nisi magna sed dui. Fusce aliquam, enim nec tempus scelerisque, lorem ipsum sodales",16),
  ("neque vitae semper",4,"dolor. Donec fringilla. Donec feugiat metus sit amet ante. Vivamus non",16);

INSERT INTO `users` (`username`,`email`,`password`,`created_at`)
VALUES
  ("Jamal Estes","sed.sem.egestas@google.org","DDL77WHS3MN","2022-07-03 19:42:02"),
  ("Mariko Lucas","scelerisque.dui@yahoo.org","TQK22QPO6EO","2022-01-26 23:27:04"),
  ("Adara Matthews","aliquam.ultrices.iaculis@yahoo.ca","EBS65UIV4JC","2023-12-19 01:59:24"),
  ("Dalton Newton","amet.massa@google.com","HHR05MGL7KD","2023-09-06 04:29:45"),
  ("Curran Frazier","ante.blandit@aol.com","MTK38DON3WW","2023-03-31 17:01:39"),
  ("Ray Wheeler","velit@aol.net","GHC63XQY8XP","2022-05-01 07:08:57"),
  ("Timothy Howe","praesent.luctus@outlook.org","MXW46KRP6MH","2023-10-15 20:31:14"),
  ("Rhonda Woods","ac.mattis@aol.net","DJC35UCV4UA","2023-03-22 20:38:12"),
  ("Nash Mejia","enim.commodo.hendrerit@outlook.couk","WFG62HOI3GR","2023-06-08 10:45:09"),
  ("Cadman Mccarty","dolor.sit.amet@aol.com","NUP35OEF7LK","2023-08-03 19:21:06"),
  ("Zena Wagner","et.ultrices@yahoo.org","BBO47GLA6JL","2022-05-12 19:31:27"),
  ("Natalie Shannon","sed.pede.nec@google.couk","ZSJ76TFV5KY","2023-03-27 20:41:40"),
  ("Ora Calhoun","euismod.ac.fermentum@aol.ca","GYY44EUT8AN","2022-10-05 05:09:19"),
  ("Otto Burks","magnis@yahoo.org","NIC71BSF2KT","2022-02-28 13:35:15"),
  ("Lucas Santana","a.ultricies.adipiscing@hotmail.edu","NMJ69IHL4UK","2022-07-07 01:21:16"),
  ("Hilda Melendez","ultricies.sem.magna@aol.org","PQB65BLQ2BH","2022-03-21 00:04:38"),
  ("Jorden Duffy","pellentesque.ultricies.dignissim@outlook.net","CXU25AVI3FF","2022-02-04 16:02:39"),
  ("Deirdre Hodge","in@yahoo.couk","GDG21NVR1TW","2023-08-08 14:20:27"),
  ("Cara Frazier","adipiscing@google.edu","RGC48PQP7DP","2023-03-16 11:05:49"),
  ("Eve Houston","dictum.eleifend@icloud.couk","JUP33TBC7KB","2023-12-05 01:41:24");

ALTER TABLE `statistics`
ADD CONSTRAINT `fk_player_id` FOREIGN KEY (`player_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `tasks`
ADD CONSTRAINT `fk_stats_id` FOREIGN KEY (`stats_id`) REFERENCES `statistics` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
