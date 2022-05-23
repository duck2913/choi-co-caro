import { configureStore } from "@reduxjs/toolkit";
import gameSliceReducer from "./gameSlice";

export const store = configureStore({
	reducer: {
		gameSlice: gameSliceReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
