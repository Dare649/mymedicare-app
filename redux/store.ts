import { configureStore } from '@reduxjs/toolkit';
import loadingReducer from '@/redux/slice/loadingSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from '@/redux/slice/auth/authSlice';
import adminPartnerReducer from '@/redux/slice/admin/partner/partnerSlice';
import partnerPatientReducer from '@/redux/slice/partner/patient/patientSlice';




const persistConfig = {
    key: 'root',
    storage,
};


const persistedAuthReducer = persistReducer(persistConfig, authReducer);
const persistedAdminPartnerReducer = persistReducer(persistConfig, adminPartnerReducer);
const persistedPartnerPatientReducer = persistReducer(persistConfig, partnerPatientReducer);



export const store = configureStore({
    reducer: {
        loading: loadingReducer,
        auth: persistedAuthReducer,
        adminPartner: persistedAdminPartnerReducer,
        partnerPatient: persistedPartnerPatientReducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
            },
        }),
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);