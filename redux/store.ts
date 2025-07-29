import { configureStore } from '@reduxjs/toolkit';
import loadingReducer from '@/redux/slice/loadingSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from '@/redux/slice/auth/authSlice';
import adminPartnerReducer from '@/redux/slice/admin/partner/partnerSlice';
import partnerPatientReducer from '@/redux/slice/branch-partner/branch-patient/branch-patientSlice';
import branchPartnerReducer from '@/redux/slice/branch-partner/branch-account/branch-partner-accountSlice';
import hqPartnerReducer from '@/redux/slice/hq-partner/hq-account/hq-partner-accountSlice';




const persistConfig = {
    key: 'root',
    storage,
};


const persistedAuthReducer = persistReducer(persistConfig, authReducer);
const persistedAdminPartnerReducer = persistReducer(persistConfig, adminPartnerReducer);
const persistedPartnerPatientReducer = persistReducer(persistConfig, partnerPatientReducer);
const persistedBranchPartnerReducer = persistReducer(persistConfig, branchPartnerReducer);
const persistedHqPartnerReducer = persistReducer(persistConfig, hqPartnerReducer);



export const store = configureStore({
    reducer: {
        loading: loadingReducer,
        auth: persistedAuthReducer,
        adminPartner: persistedAdminPartnerReducer,
        partnerPatient: persistedPartnerPatientReducer,
        branchPartner: persistedBranchPartnerReducer,
        hqPartner: persistedHqPartnerReducer,
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