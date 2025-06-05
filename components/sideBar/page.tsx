'use client';


import { useEffect } from "react";
import { adminNav, patientNav, professionalNav } from "@/data/dummy";
import Link from "next/link";
import { IoLogOutOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { startLoading, stopLoading } from "@/redux/slice/loadingSlice";
import { RootState, AppDispatch } from "@/redux/store";
import { getSignedInUser } from "@/redux/slice/auth/auth";

const Sidebar = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const isLoading = useSelector((state: RootState) => state.loading.isLoading);
  const user = useSelector((state: RootState) => state.auth.user);


  useEffect(() => {
  // If user is not in Redux, try to get from localStorage
    let currentUser = user;
    if (!currentUser && typeof window !== "undefined") {
      const storedUser = localStorage.getItem("user");
      console.log('login user', storedUser);
      if (storedUser) {
        currentUser = JSON.parse(storedUser);
      }
    }

    if (currentUser && typeof currentUser.role === "string") {
      const allowedRoles = ["patient", "professional", "other"] as const;
      if (allowedRoles.includes(currentUser.role as any)) {
        dispatch(getSignedInUser(currentUser.role as "patient" | "professional"));
      } else {
        dispatch(getSignedInUser("other"));
      }
    }
  }, [dispatch, user]);

  // function for sign out
  const handleSignout = (event: React.FormEvent) => {
    event.preventDefault();

    dispatch(startLoading());

    setTimeout(() => {
      router.push('/');
      toast.success('Sign out success!');
      dispatch(stopLoading());
    }, 3000)
  }
  return (
    <div className="w-full h-full border-r-2 border-primary-5 shadow-lg flex flex-col items-center justify-between py-5">
      {/* Navigation Links */}
      <div className="w-full px-3 mt-[10%]">
      {
        user ? (
          user.role === 'admin' ? (
            adminNav.map((item, id) => (
              <Link
                href={item.path}
                key={id}
                className="p-3 flex items-center gap-x-3 hover:bg-primary-5/60 rounded-lg cursor-pointer hover:text-white focus:text-primary-5 font-semibold text-primary-5 capitalize"
              >
                <h2>{item.icon}</h2>
                <h2>{item.title}</h2>
              </Link>
            ))
          ) : user.role === 'business' ? (
            professionalNav.map((item, id) => (
              <Link
                href={item.path}
                key={id}
                className="p-3 flex items-center gap-x-3 hover:bg-primary-5/60 rounded-lg cursor-pointer hover:text-white focus:text-primary-5 font-semibold text-primary-5 capitalize"
              >
                <h2>{item.icon}</h2>
                <h2>{item.title}</h2>
              </Link>
            ))
          ) : (
            patientNav.map((item, id) => (
              <Link
                href={item.path}
                key={id}
                className="p-3 flex items-center gap-x-3 hover:bg-primary-5/60 rounded-lg cursor-pointer hover:text-white focus:text-primary-5 font-semibold text-primary-5 capitalize"
              >
                <h2>{item.icon}</h2>
                <h2>{item.title}</h2>
              </Link>
            ))
          )
        ) : null
      }

      </div>

      {/* Sign Out Button (Centered in Sidebar) */}
      <div 
        className="flex justify-center fixed bottom-10"
        
      >
        <button onClick={handleSignout} className="bg-red-600 cursor-pointer text-white font-bold capitalize rounded-lg p-2 flex items-center gap-x-1">
          <span><IoLogOutOutline size={25} /></span>
          <span>{ isLoading ? 'loading' : 'sign out'}</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
