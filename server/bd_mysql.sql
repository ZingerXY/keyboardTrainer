DROP TABLE IF EXISTS `statistics`;

CREATE TABLE `statistics` (
  `id` mediumint(8) NOT NULL auto_increment,
  `player_id` mediumint(8) COMMENT 'айди игрока',
  `task_id` mediumint(8) COMMENT 'айди задания',
  `time` mediumint default NULL COMMENT 'время потраченное на задание',
  `typed_characters` mediumint default NULL COMMENT 'набрано знаков',
  `number_of_errors` mediumint default NULL COMMENT 'Количество ошибок', 
  `Accuracy` mediumint default NULL COMMENT  'Точность',
  `dial_speeds` mediumint default NULL COMMENT  'Скорость набора',
  `created_at` varchar(100) COMMENT 'дата создания',
  PRIMARY KEY (`id`)
) AUTO_INCREMENT=1;

DROP TABLE IF EXISTS `tasks`;

CREATE TABLE `tasks` (
  `id` mediumint(8) NOT NULL auto_increment,
  `task` TEXT default NULL COMMENT 'задание', 
  `task_description` TEXT default NULL COMMENT 'описание задания', 
  `task_type` TEXT default NULL COMMENT 'тип задания',
  `difficulty` mediumint default NULL COMMENT 'сложность задания',
  PRIMARY KEY (`id`)
) AUTO_INCREMENT=1;

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` mediumint(8)  NOT NULL auto_increment,
  `username` varchar(100) default NULL COMMENT 'имя пользователя', 
  `email` varchar(100) default NULL COMMENT 'почта', 
  `password` varchar(60) default NULL COMMENT 'пароль',
  `created_at` varchar(100) COMMENT 'дата регистрации',
  PRIMARY KEY (`id`)
) AUTO_INCREMENT=1;

INSERT INTO `statistics` (`player_id`,`task_id`,`time`,`typed_characters`,`number_of_errors`,`Accuracy`,`dial_speeds`,`created_at`)
VALUES
  (11,6,7145,225,362,57,896,"2022-05-06 13:43:11"),
  (8,16,9083,781,941,21,893,"2023-11-13 20:47:13"),
  (6,15,8271,561,439,67,446,"2023-07-25 15:39:14"),
  (9,15,8697,74,542,61,927,"2022-09-12 23:23:13"),
  (2,14,9163,794,345,65,101,"2023-11-01 17:57:09"),
  (18,15,4629,665,729,76,726,"2023-11-15 01:40:11"),
  (17,17,9531,938,604,8,52,"2023-06-03 06:07:46"),
  (18,4,4523,457,326,11,693,"2023-02-20 18:37:04"),
  (18,11,1910,48,787,77,790,"2022-11-17 20:12:53"),
  (17,6,1764,767,220,93,462,"2022-07-17 05:58:57"),
  (12,6,1852,748,379,49,717,"2023-12-08 06:24:51"),
  (2,12,6434,548,190,97,89,"2023-10-23 02:31:50"),
  (12,11,7524,520,34,90,295,"2022-09-05 07:19:50"),
  (6,7,8485,262,111,1,500,"2023-08-19 06:04:16"),
  (13,12,6179,940,682,65,248,"2022-10-18 03:27:29"),
  (8,14,5556,816,956,76,577,"2023-05-22 02:53:52"),
  (17,14,2356,778,720,8,879,"2023-09-26 15:51:33"),
  (7,5,8465,306,379,22,137,"2022-03-01 16:14:31"),
  (12,1,8446,640,153,21,791,"2023-02-20 08:18:28"),
  (18,13,8403,95,586,91,317,"2023-11-06 15:52:35");


INSERT INTO `tasks` (`task`,`difficulty`,`task_description`,`task_type`)
VALUES
  ("Тест",0,"йцукен фывап ячсми","База"),
  ("Буквы ва ол",1,"аааооо ааоао оааоо аоаоа ооаоа ао оао аоаао оаоао ао оао вввооо ввово оввоо вовов оовов вова вова вовво овово вова вова лллввв ллвлв вллвв лвлвл ввлвл вал лава лвллв влвлв вол лов олово аааллл аалал лаалл алала ллала алла алло алаал лалал алла лола ввава авваа вавав аавав вал лава вова оолол лоолл ололо ллоло вол лов олово лола вовал оаллв овола аоввл алаво лвооа лалов влаао лава вал овал алло лола вова овал лава вол олово вова лола алла овал лава лов олово вал овал алло вол лава лола олово вова овал","Буквы"),
  ("Буквы фы дж",1,"ыыыддд ыыдыд дыыддыдыды ддыды ад два воды ыдыыд дыдыд ода вода вдова выводы доводы лады дылда фффддд ффдфд дффдд фдфдф ддфдф фа даф фдффд дфдфд фал фол лафа фалды жжжффф жжфжф фжжфф жфжфж ффжфж аж ложа жфжжф фжфжф лажа жало вожжа жыф ожыф фыж лжыф ыыыжжж ыыжыж жыыжж ыжыжы жжыжы лыжа выжал ыжыыж жыжыж лыжа дважды выждал ффыфы ыффыы фы фыфыф ыыфыф дыф фалды ддждж ждджж жажда джджд жжджд дважды ждал додж фдфыж дыжжф дфджы ыдффж ыжыфд жфдды жыждф фжыыд ад ода два дылда выжал доводы фол вожжа жало ждал додж жажда фа лыжа выждал выводы фалды ложа вдова ждала лафы дважды","Буквы"),
  ("Буквы п р э",1,"п п п п р р р э э р э эпр прпрппр пор пар паж под паф рад род рвы эра пэр вол дар дал вал лор одр лов воды пора орда рада лапа рвал жара плыл орлы прав двор арфа повар повод плоды пожар парад рыдал рвала радар выдра опора дважды доводы доллар рыдала порода водород варвары выдавал водопровод","Буквы"),
  ("Буквы кг не 1",2,"авыф олджэ пр к к ккг гг гк еона год гог рак рок око лак акр дог еда еле нож над дно фен она нога желе анод гнев кран желе анод какао фанера колпак воронка","Буквы"),
  ("Буквы ке нг 2",2,"fкод еле год еда нож лак дна фен акр кожа нога желе гнев факел какао ангел погода огород колпак клоака выгода рококо корова гагара пролог коллега денежка педагог доклад подагра аллегро волынка волокно надежда географ","Буквы"),
  ("Буквы уш 1",2,"у у ш ш уш уш не укгнонке шар увы уж шу луг шов пуд душ аул жук уже наш ура агу грош друг ковш рука шарж ноша шарф удав дуло дуга рагу пруд паук лужа швед врун ушко шнур шакал фауна клоун шпора укроп пшено уклон кошка кашне дудка шапка акула шалаш рупор купол школа","Буквы"),
  ("Буквы уш 2",2,"уже шов рукав шулер кошка пышка гудок эшелон группа шарада фургон орешек журнал одышка управа ералаш пугало калоша ерунда дружок пурпур ландыш прошел шашлык какаду курево курага аншлаг ураган горшок кружево девушка кукушка дедушка желудок дуршлаг кенгуру лукошко","Буквы"),
  ("Буквы зщц 1",2,"з ц щ з ц щ з ц щ з ц щ з ц щ з ц щ з ц щ з ц щ з ц щ вуз цыц зов зал зло зев щуп узы цел вуз цыц зов зал зло зев щуп узы цел вуз цыц зов зал зло зев щуп узы цел щека щука роща герц залп плащ узел клещ роза ноша указ овца груз жезл злак жнец цаца джаз щека щука роща герц залп плащ узел клещ роза ноша указ овца груз жезл злак жнец цаца джаз щегол загар щенок щепка конец цыган задор запад звено завод цедра гроза зразы егоза купец кварц газон навоз озеро щегол загар щенок щепка конец цыган задор запад звено завод цедра гроза зразы егоза купец кварц газон навоз озеро зарево удалец журнал пловец заново заноза вокзал заодно раздел угроза зарево удалец журнал пловец заново заноза вокзал заодно раздел угроза зеркало заранее заварка загадка площадка целлофан перезвон зеркало заранее заварка загадка площадка целлофан перезвон","Буквы"),
  ("Буквы зцщ 2",2,"з ц щ вуз цыц зов зал зло зев щуп узы цел щека щука роща герц залп плащ узел клещ роза ноша указ овца груз жезл злак жнец цаца джаз щегол загар щенок щепка конец цыган задор запад звено завод цедра гроза зразы егоза купец кварц газон навоз озеро зарево удалец журнал пловец заново заноза вокзал заодно раздел угроза зеркало заранее заварка загадка площадка целлофан перезвон","Буквы"),
  ("Буквы йхъ 1",2,"авыфолджэпр а о в л ы д ф ж э х й ъ уха ухо эхо хан ход хор шах пух цех дай дуй пей вой лай рай йод йог пай айва край фойе зной злой ехал уход хвощ охра рейд рейка лакей лайка горох порох эпоха шорох уехал въезд шейка","Буквы"),
  ("Буквы йхъ 2",2,"айва взор грош депо елей жена залп край лупа нога ожог паук рагу улов фарш холл фонд цена гайка жокей лейка война халва шайка","Буквы"),
  ("Буквы ить",3,"и т ь и иа ио ив иы иф ил ид иж иэ ь и т тот пир жди пик уши иди щит тир гид ива вид ток тик ель нить ноль тушь пить тень киль азот вещь цель гиви вилы кнут форт фото агат толпа тариф фронт тайна фаэтон тетерев единица путевой ошейник ондатра папоротник здравница эффективный изворотливый","Буквы"),
  ("Буквы мсб 1",3,"м с б ма со ба амии иам аи сон сыс мел бос быт бор оса бал бок раб дым ром сос шум сэр нос бос борщ изба кекс мусс смех баул балл бобр боец атлм шлем гром мина обоз соль небо сбыт рысь эпос аббат адрес базар бизон губка гусар алиби роман мотор камин алмаз камни томат кайма рифмы драма ампер норма камыш касса вести гость здесь весть сумма осока","Буквы"),
  ("Буквы мсб 2,",3,"обман масса шансы дробь хобби робот пьеса салат сеанс рубль шасси посох табак шансы абсурд баланс альбом балкон бамбук жасмин лосось массаж баобаб барбос барсук безмен батист борьба башмак боцман космос фосфор восемь область косинус аметист маэстро слесарь эмблема барбарис бумеранг ансамль хлебороб бадминтон восстание","Буквы"),
  ("Буквы чю 1",3,"ч ч чюч ю чю ча юа чо что час учт чиж меч чао чудо чушь чума ночь жечь дичь дочь тучо мечь ткач матч юрта юный юнга юбка вьюн союз этюд плющ люди июль июни меню ключ пюре бюро путч череп чижик чулок часть свача рычаг харчо удача точка","Буквы"),
  ("Буквы чю 2",3,"сучок мечта пчела сачок печка парча удача жучок алыча нюанс дюшес юноша приют вьюга велюр сюжет всюююду чучело чепуха чихать ученик причал смычок печать притча крючок юбилей","Буквы"),
  ("Буквы яё 1",3,"я яя ё ё яё яр ёж мяч ещё всё зря ёрш мёд лён ярд ёлка ядро яхта явка пять баян чёрт заря маяк фляга аллея знамя басня сапёр отчёт семья ябеда ёмкий амёба вишня паять чётки пряшка лётчик инфляция","Буквы"),
  ("Буквы яё 2",3,"акт бал вид гид экс ель ёрш жди йопт кот лом мою ёлка жито игла киль ложь мало наём опыт пари сбыт танк утро фото хлеб цель чаща экий юбка ядро явка этил часы ежели зёрнышко восьмёрка раскаяться боярышник старьёвщик перекрёсток гимнастёрка подберёзовик прямоугольник племянник","Буквы"),
  ("Слова А-Я",4,"алла олово воды лов дыры фора жена нежна едва пена репа мир идеал темнеть когти гимн сосна бабка ужин целый йога шишка щипцы зной халиф эфир юный чех ящерица абвгдежзийклмнопрстуфхцчшщъыьэюя араб опрос вывод лилия дудка фосфор жижа ересь нюанс попугай разборка модем идиосинкразия тату кошка герцог съесть бамбук укушу цыц йод йена шабаш щи щавель заразный хихикать эра эскимо юркий юра чукча яблоня яюэьыъщшчцхфутсрпонлмкйизжедгвба","Слова"),
  ("Короткие слова",4,"годы горы груз гиря шаг шарм шрам штык шифр шить шубу шейх пена пища плащ прыщ щит щель щека щука баня буря бусы боец юбка юрта юнец юнга юмор цирк царь цель цех цена цвет лица лиса лето луга луна лыко лыжи лужа ложа жало жрец жмот жар жгут жаба жбан туз изюм зона зима зной змей заря заяц яхта хата хлеб хлам хаос харя хвоя храм хуже халва хлыст кеды кино киты кожа дело доля дуга дума душа дыня меха мода морж муха мыло мясо мята мячи река раки рыба фриц фаза флаг фора фойе фея сюда здесь въезд это эта эра этаж этап эй экий эльф сэр увы улей удар удав угол что чего чай чиж чадо чары чаша чушь","Слова"),
  ("Длинные слова",4,"вальс вьюга верхний тухлый йогурт будущий щедрый сыщик помощник щенят черный чудище чужой чемодан челюсть чертополох чепуха животное жираф жужжать жрица жалко железо жалюзи фюзеляж формула фабрика фальсификация форель фотоэффект фрагмент фрегат форсаж француз хризантема хрусталь халтура ханжа хижина хвойный худосочный хирург хмель хулиган художник хурма харчевня целомудрие цензура цистерна цивилизация циферблат шлейф шершень шутиха шхуна шуршунчик дюжина парашют сюрприз тюлень люстра любовь эшафот эмиграция эпицентр экран экстаз экзальтация экзамен экземпляр зебры звено заморозки якудза ябеда ящерица яркий ясный рейтузы разъярить жадину говядину столешница объедки объект ягодицы царицы","Слова"),
  ("ПРОПИСНЫЕ буквы",4,"Анна Апрель Охта Операция Ы Волга Витя ОРТ Лида Литва Джо Денис Федя Франция Женя Жигули Ева Европа Надя НАТО Польша Прохор Рим Рая Миру Мир Иртыш Индия Тихвин ТНТ Катя КГБ Греция ГДР США Боря Бухарест Уфа Уругвай Царь Цирк Йорк Йод Шварц Шуберт Щорс Щит Зухра ЗИЛ Харьков Эльза Эфиопия Юра ЮАР Челобрек ЧП Яша Япония Алиса Батхед Вася Глеб Децл Елена Жук Запорожец Иван Йошкин Кот Лиза Милен НТВ Ольга Петя Рембо СНГ ТьмутараканЬ Урюпинск ФРГ Холмс Цент Чарльз Шишкин Щука Эстония Юпитер Ясен Пончик Сергей","Буквы");

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

ALTER TABLE `statistics`
ADD CONSTRAINT `fk_task_id` FOREIGN KEY (`task_id`) REFERENCES `tasks` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
