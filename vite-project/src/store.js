// redux/store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';

// Slice para `serverURL`
const serverUrlSlice = createSlice({
  name: 'serverURL',
  initialState: {
    //serverURL: 'http://localhost:3001/api/', 
    serverURL: 'https://server-axia.vercel.app/api/',  
  },
  reducers: {
    setServerURL: (state, action) => {
      state.serverURL = action.payload;
    },
  },
});

// Slice para `datosMongo`
const datosMongoSlice = createSlice({
  name: 'datosMongo',
  initialState: {
    datosMongo: {},
  },
  reducers: {
    setDatosMongo: (state, action) => {
      state.datosMongo = action.payload;
    },
  },
});

// Crear el store con ambos reducers combinados
const store = configureStore({
  reducer: {
    serverURL: serverUrlSlice.reducer,  // Reducer para `serverURL`
    datosMongo: datosMongoSlice.reducer,  // Reducer para `datosMongo`
  },
});

// Exportar las acciones de ambos slices
export const { setServerURL } = serverUrlSlice.actions;
export const { setDatosMongo } = datosMongoSlice.actions;

export default store;
