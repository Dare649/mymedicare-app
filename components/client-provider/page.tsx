'use client';

import { ReactNode, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "@/redux/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingOverlay from "@/components/loading/page";
import MainLayout from "@/components/main-layout/page";

export default function ClientProviders({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // List of pages that should NOT be wrapped with MainLayout
  const excludedPaths = ["/", "/auth/sign-up", "/auth/sign-in", "/auth/verify-otp", "/error", "/reset_password"];
  const isExcluded = excludedPaths.includes(pathname);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <LoadingOverlay />
        <ToastContainer position="top-center" autoClose={3000} />
        {isExcluded ? children : <MainLayout>{children}</MainLayout>}
      </PersistGate>
    </Provider>
  );
}
