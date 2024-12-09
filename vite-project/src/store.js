// store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';

// Crear un slice (una parte del estado) para `datosMongo`
const datosMongoSlice = createSlice({
  name: 'datosMongo', 
  initialState: { datosMongo: {} }, 
  reducers: {
    setDatosMongo: (state, action) => {
      state.datosMongo = action.payload; 
    },
  },
});

// Exportar las acciones (para actualizar el estado de `datosMongo`)
export const { setDatosMongo } = datosMongoSlice.actions;

// Configurar el store con el slice `datosMongo`
const store = configureStore({
  reducer: {
    datosMongo: datosMongoSlice.reducer, // Reducer para `datosMongo`
  },
});

export default store;
