'use client';

import { useState, useEffect } from 'react';
import Modal from '@/components/modal/page';
import CreatePatient from '@/components/branch-partner/create-patient/page';
import { getAllBranchPatient } from '@/redux/slice/branch-partner/branch-patient/branch-patient';
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";
import { startLoading, stopLoading } from "@/redux/slice/loadingSlice";
import Tab from '@/components/tabs/page';
import AllPatients from '@/components/branch-partner/all-patient/page';
import RiskPatient from '@/components/branch-partner/risk-patient/page';

const Patient = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const allBranchPatient = useSelector((state: RootState) =>
    Array.isArray(state.branchPartnerPatient.allBranchPatient)
      ? state.branchPartnerPatient.allBranchPatient
      : []
  );

  // fetch patients
  useEffect(() => {
    const fetchPatients = async () => {
      try {
        dispatch(startLoading());
        await dispatch(getAllBranchPatient()).unwrap();
      } catch (error: any) {
        toast.error(error.message);
      } finally {
        dispatch(stopLoading());
      }
    };

    fetchPatients();
  }, [dispatch]);

  // Toggle modal
  const handleModal = () => setOpen((prev) => !prev);

  return (
    <section className="p-4">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Patients</h2>
        <button
          onClick={handleModal}
          className="px-4 py-2 bg-primary-5 text-white rounded-md hover:bg-primary/90 transition cursor-pointer"
        >
          Add Patient
        </button>
      </div>

      {/* Tabs */}
      <Tab
        titles={["All Patients", "Risk Patients"]}
        renderContent={(role) => {
          if (role === "All Patients") {
            return <AllPatients  />;
          }
          if (role === "Risk Patients") {
            return <RiskPatient  />;
          }
          return null;
        }}
      />

      {/* Modal */}
      {open && (
        <Modal onClose={handleModal} visible={open}>
          <CreatePatient close={handleModal} />
        </Modal>
      )}
    </section>
  );
};

export default Patient;
