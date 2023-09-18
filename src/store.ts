import { configureStore } from '@reduxjs/toolkit';
import { enhancedApiTest } from './api.enhanced-api-test';

const store = configureStore({
  reducer: {
    apiTest: enhancedApiTest.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(enhancedApiTest.middleware),
});

export default store;
