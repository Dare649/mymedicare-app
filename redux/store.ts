import { configureStore } from '@reduxjs/toolkit';
import loadingReducer from '@/redux/slice/loadingSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from '@/redux/slice/auth/authSlice';
import adminPartnerReducer from '@/redux/slice/admin/partner/partnerSlice';
import branchPartnerPatientReducer from '@/redux/slice/branch-partner/branch-patient/branch-patientSlice';
import branchPartnerReducer from '@/redux/slice/branch-partner/branch-account/branch-partner-accountSlice';
import hqPartnerReducer from '@/redux/slice/hq-partner/hq-account/hq-partner-accountSlice';
import hqPatientReducer from '@/redux/slice/hq-partner/hq-patient/hq-patientSlice';
import partnerDashboardReducer from '@/redux/slice/dashboard/dashboardSlice';




const persistConfig = {
    key: 'root',
    storage,
};


const persistedAuthReducer = persistReducer(persistConfig, authReducer);
const persistedAdminPartnerReducer = persistReducer(persistConfig, adminPartnerReducer);
const persistedBranchPartnerPatientReducer = persistReducer(persistConfig, branchPartnerPatientReducer);
const persistedBranchPartnerReducer = persistReducer(persistConfig, branchPartnerReducer);
const persistedHqPartnerReducer = persistReducer(persistConfig, hqPartnerReducer);
const persistedHqPatientReducer = persistReducer(persistConfig, hqPatientReducer);
const persistedPartnerDashboardReducer = persistReducer(persistConfig, partnerDashboardReducer);



export const store = configureStore({
    reducer: {
        loading: loadingReducer,
        auth: persistedAuthReducer,
        adminPartner: persistedAdminPartnerReducer,
        branchPartnerPatient: persistedBranchPartnerPatientReducer,
        branchPartner: persistedBranchPartnerReducer,
        hqPartner: persistedHqPartnerReducer,
        hqPatient: persistedHqPatientReducer,
        pertnerDashboard: persistedPartnerDashboardReducer,
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