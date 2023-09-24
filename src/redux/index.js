import {configureStore, combineReducers} from "@reduxjs/toolkit";
import products from "./reducers/laws";
import user, {fillUser} from "./reducers/user";
import storage from 'redux-persist/lib/storage';
import {
    persistReducer,
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from "redux-persist";
import findUsers from "./reducers/findUsers";
import notification from "./reducers/notification";
import {requestsSlice} from "./reducers/requests";
import myFriends from "./reducers/myFriends";
import laws from "./reducers/laws";
import myLaws from "./reducers/myLaws";



const rootReducer = combineReducers({
    user,
    laws,
    myLaws
})

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: {
        persistedReducer,
        [requestsSlice.reducerPath] : requestsSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },

        }).concat(requestsSlice.middleware)

})

export const persistor = persistStore(store)
export default store;