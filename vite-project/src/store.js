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

const store = configureStore({
  reducer: {
    serverURL: serverUrlSlice.reducer, 
    datosMongo: datosMongoSlice.reducer,  
  },
});

export const { setServerURL } = serverUrlSlice.actions;
export const { setDatosMongo } = datosMongoSlice.actions;

export default store;
