1. Task: https://github.com/rolling-scopes-school/tasks/blob/master/react/modules/tasks/redux.md
2. Screenshot:
3. Deployment: https://rsschoolreact2024.netlify.app/
4. Done 28.07.2024 / deadline 29.07.2024
5. Score: 200 / 200

- [x] RTK query is used for api calls (25/25)
- [x] Current page and selected item details are saved in the separate slices in the Redux store (25/25)
- [x] Selected items are managed through the redux store, selected items are persistent across pages (50/50)
- [x] Flyout component is showed/hidden based on the presence of selected items, displays the number of selected items (20/20)
- [x] "Unselect all" button and "Download" button work according to the requirements (35/35)
- [x] User can switch the theme of the application (45/45)

Я вроде разобрался как узнать рендерится ли страница на сервере.
Если вы используете getStaticProps, то next в браузер отдает готовый html (не знаю будет ли этот подход кто-то использовать).
Если вы используете getServerSideProps, то next отдает в браузер данные в виде json, но со своего сервера.
Для проверки можно открыть вкладку network в браузере и посмотреть что приходит в ответе.
Если запрос идет на
https://rickandmortyapi.com/api/character/44

- то это будет клиентский рендеринг.
  Если у вас запрос вида
  http://localhost:3000/\_next/data/development/character/details/220.json?page=1&queryName=Far&id=220

И ответ, ваш json из метода getServerSideProps, типа такого

{pageProps: {,…}, **N_SSP: true}
pageProps: {,…}
dataDetails: {id: 220, name: "Mega Fruit Farmer Rick", status: "Alive", species: "Human", type: "", gender: "Male",…}
dataMain: {info: {count: 826, pages: 42, next: "https://rickandmortyapi.com/api/character?page=2", prev: null},…}
initialState: {character: {,…}, characterAPI: {queries: {,…}, mutations: {}, provided: {}, subscriptions: {},…},…}
**N_SSP: true

то рендер на сервере.
Может меня поправят если я ошибаюсь) (изменено)
СПОЙЛЕР

refactor: rewrite routing and links
