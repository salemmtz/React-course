# Installations guide

Use of redux

## Redux installation

Gettting Started --> [REDUX](https://redux-toolkit.js.org/introduction/getting-started)

-- For create app project --

```bash
npx create-react-app my-app --template redux
```

-- For Vite project --

quick start page

```bash
npm install @reduxjs/toolkit react-redux
```

## Usage

store.js

```javascript
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {},
});
```

Provide the Redux Store to React

Create a Redux State Slice

## AXIOS installation

[Axios](https://axios-http.com/docs/intro) link

```bash
npm install axios
```

For making http request

## RTK Query

https://redux-toolkit.js.org/rtk-query/overview
