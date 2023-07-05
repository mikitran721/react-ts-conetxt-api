# cai dat

- yan add @material-ui/core
- npx create-react-app <name> --template typescript
- nếu bị lỗi TS, có thể sử dụng: npm i @types/react (cài lại Typescript)
- yarn add @types/uuid --save-dev (cho vao dev+dependencies)

# Cong nghe

- Su dung hook: useState, useContext (Interface, Generics)
- Gia tri default cua function la: () =>{}
- import { v4 as uuidv4 } from "uuid";
- Hook: useContext -> theme, movies
- Reducer: login, favourite movies
- TS/kieu cho event: const onUsernameChange = (event: ChangeEvent<HTMLInputElement>) => setUsername(event.target.value);
- Gia tri mac dinh cho Promise.Func: getTopMovies: () => Promise.resolve(void 0), //void 0==undifined

# Chuc nang

- Dong ho realtime
- toggle theme
- Add movies
- Authetication (Reducer)
- Top 10 movies api from https://www.omdbapi.com/ (using Reducer/Context)

# welcome

- I'm Miki.Tran
