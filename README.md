# keyboardTrainer
Веб приложение по улучшению навыков владения клавиатурой и 10-ти пальцевой печати

Цель спринта: сделать MVP (Минимально жизнеспособный продукт)

### Авторы:
* Сергей https://github.com/SveTi4
* Евгений https://github.com/EvgeniyKorshov
* Виталий https://github.com/ZingerXY
* Анастасия https://github.com/AnastasiyaVi
* Ирина https://github.com/irdolgopolova
* Владислав https://github.com/SHALFY007

<hr/>

## Инициализация:
`npm install`

<hr/>

## Запуск:
`npm start` либо `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Деплой

* Собираем React командой: `npm run build`
* Загружаем файлы из папки `build` в корневую директорию сайта на сервере
* Загружаем папку `server` в корневую директорию сайта на сервере
* Проверяем версии php `php -v` (долна быть > 8.0)
* Проверяем версию comporser `composer --version` (долна быть > 2.2)
* При необходимости устанавливаем нужные версии
* Выполняем `composer install` в директории `server`
* В директории `server` переименовываем файл `.env.example` в `.env` и меняем конфиги подключения к базе данных
* Выгружаем базу данных из файла `server/bd_mysql.sql` в базу данных на сервере
* Все готово!

## API Сервера

* `/api/tasks` - получить все задания
* `/api/tasks/%id задания%` - получить зание по id

* `/api/users` - получить всех пользователей
* `/api/users/%id пользователя%` - получить пользователя по id

* `/api/stats` - получить всю статистику
* `/api/stats/%id записи в стасистике%` - получить запись в стасистике по id
