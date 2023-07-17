# garpix-load-system-sdk

garpix-load-system-sdk - простой и удобный sdk для взаимодействия c Garpix Load System API. Можно установить библиотеку с помощью команды 
```
npm i garpix-load-system-sdk
```

Пример использования: вывод в консоль токен авторизации по данным учетной записи

```
getAuthToken('your_email@example.com', 'your_password').then(data => console.log(data))

```

```
npx ts-node ./your_file.ts
```

Чтобы пользоваться функционалом SDK необоходимо установить npm пакет и импортировать из него нужные Вам функции.
