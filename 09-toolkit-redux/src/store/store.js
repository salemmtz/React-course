import { configureStore } from '@reduxjs/toolkit';
import { todosApi } from '../api';
import { counterSlice } from './slices/counter';
import { pokemonSlice } from './slices/pokemon';

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    pokemons: pokemonSlice.reducer,

    [todosApi.reducerPath]: todosApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(todosApi.middleware),
});
