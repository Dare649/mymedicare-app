'use client';

import { useEffect } from "react";
import { getPatient } from "@/redux/slice/admin/patient/patient";
import { RootState, AppDispatch } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { IoIosClose } from "react-icons/io";
import Image from "next/image";
import { MdOutlineMail } from "react-icons/md";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";

interface UserDetailsProps {
  uuid: string;
  close: () => void;
}

const UserDetails: React.FC<UserDetailsProps> = ({ uuid, close }) => {
  const dispatch = useDispatch<AppDispatch>();

  // ✅ Select patient details from Redux
  const patient = useSelector((state: RootState) => state.adminPatient.patient);

  useEffect(() => {
    if (uuid) {
      dispatch(getPatient(uuid));
    }
  }, [dispatch, uuid]);


  if (!patient) return <p>No details available.</p>;

  return (
    <div className="w-full h-full lg:p-3 sm:p-1">
      <div className="flex items-center justify-between">
        <h2 className="text-md font-bold text-primary-5">Patient Details</h2>
        <div 
          onClick={close}
        >
          <IoIosClose size={30} className="cursor-pointer"/>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center">
        <h2 className="text-secondary-5">ID: <span className="text-tertiary-1 text-xl font-bold">#{patient.id}</span></h2>
        <div className="border-1 border-secondary-5 rounded-xl my-5 p-1">
          <div className="w-full flex flex-row items-center justify-between">
            <div className="flex items-center gap-x-2">
              <div className="w-14 h-14 rounded-full">
                <Image
                  src={patient.profile_picture || "/doc-re.png"}
                  alt="mymedicare-app"
                  width={50}
                  height={50}
                  className="w-full h-full object-cover rounded-full"
                  quality={100}
                  priority
                />
              </div>
              <div>
                <h2 className="text-tertiary-1 text-xs mb-1 capitalize">{patient.name}</h2>
              <div className="w-full flex items-center gap-1.5">
                <div className="w-[50%] flex items-center gap-0.5 rounded bg-primary-2 justify-center px-2 py-1">
                  <MdOutlineCalendarMonth className="text-primary-5 text-[10px]" />
                  <span className="text-primary-5 font-medium text-[10px] whitespace-nowrap">
                    Schedule appointment
                  </span>
                </div>
                <div className="w-[20%] flex items-center gap-0.5 rounded bg-primary-2 justify-center px-2 py-1">
                  <IoCallOutline className="text-primary-5 text-[10px]" />
                  <span className="text-primary-5 font-medium text-[10px] whitespace-nowrap">
                    Call
                  </span>
                </div>
                <div className="w-[30%] flex items-center gap-0.5 rounded bg-primary-2 justify-center px-2 py-1">
                  <MdOutlineMail className="text-primary-5 text-[10px]" />
                  <span className="text-primary-5 font-medium text-[10px] whitespace-nowrap">
                    Email
                  </span>
                </div>
            </div>
              </div>
          </div>
          <div className={`rounded-xl capitalize text-[10px] p-1 ${patient.active_status == "inactive" ? "text-red-600 bg-red-300": "text-green-600 bg-green-300"}`}>
            <h2>{patient.active_status}</h2>
          </div>
        </div>
        <h2 className="text-sm text-tertiary-1 my-3">basic details</h2>
        <div className="w-full rounded-xl border-1 border-secondary-5">
          <div className="w-full border-b-1 border-secondary-5 my-2">
            
          </div>
        </div>
      </div>
    </div>
  </div>
  )
};

export default UserDetails;
