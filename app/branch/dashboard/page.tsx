'use client';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBranchRiskPatient } from '@/redux/slice/branch-partner/branch-patient/branch-patient';
import Card from '@/components/card/page';
import { partnerDashboardAnalytics } from '@/data/dummy';
import SwitchButton from '@/components/switch-button/page';
import DashboardTable from '@/components/dashboard-table/page';
import { RootState, AppDispatch } from '@/redux/store';
import { startLoading, stopLoading } from '@/redux/slice/loadingSlice';
import { toast } from 'react-toastify';



const BranchDashboard = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { allBranchPatient: patients, loading } = useSelector((state: RootState) => ({
    allBranchPatient: Array.isArray(state.branchPartnerPatient.allBranchPatient)
      ? state.branchPartnerPatient.allBranchPatient
      : [],
    loading: state.loading.isLoading,
  }));

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        dispatch(startLoading());
        await dispatch(getAllBranchRiskPatient()).unwrap();
      } catch (error: any) {
        toast.error(error?.message || 'Failed to fetch patients');
      } finally {
        dispatch(stopLoading());
      }
    };
    fetchPatients();
  }, [dispatch]);

  const getFormattedDate = () =>
    new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  const formattedPatients = patients.map((patient) => ({
    id: patient.uuid || patient.id,
    name: patient.name || 'Unknown',
    img: (
      <span className="text-sm font-bold">
        {patient.name?.charAt(0).toUpperCase() || '?'}
      </span>
    ),
    rm_tracking: Object.entries(patient.rm_tracking || {})
      .filter(([_, value]) => value === 'yes')
      .map(([key]) => ({ track: key.replace(/_/g, ' ') })),
  }));


  console.log(formattedPatients);

  return (
    <div className="w-full h-full overflow-auto">
      {/* Header */}
      <div className="lg:py-[12px] lg:px-[24px] sm:p-3 border-[1.5px] border-[#CBD5E1] rounded-lg flex lg:flex-row sm:flex-col gap-y-5 items-center justify-between">
        <div>
          <h2 className="text-[#1E293B] font-[500] text-[20px] capitalize">latest report</h2>
          <h2 className="text-[#1E293B] font-[400] text-[14px] flex items-center gap-x-1">
            <span>today</span>
            <span>.</span>
            <span>{getFormattedDate()}</span>
          </h2>
        </div>
        <div className="flex items-center gap-x-3">
          <SwitchButton />
          <h2 className="text-[#1E293B] font-[500] text-[16px] capitalize">timeframe</h2>
        </div>
      </div>

      {/* Analytics Cards */}
      <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 lg:gap-[16px] sm:gap-y-10 my-10">
        {partnerDashboardAnalytics.map((item, id) => (
          <div key={id} className="h-[172px]">
            <Card className="rounded-lg">
              <div className="flex items-center justify-between">
                <h2 className="text-[#647488] capitalize text-[12px] font-[500]">{item.title}</h2>
                <h2 className="text-[#1E293B]">{item.icon}</h2>
              </div>
              <div className="flex flex-col mt-2">
                <h2 className="text-[#1E293B] font-[600] text-[20px] capitalize">{item.figure}</h2>
                <p className="text-[10px] font-[400] text-[#647488]">
                  <span
                    className={
                      item.rate === '+150%' || item.rate === '+80%'
                        ? 'text-[#CA1005]'
                        : item.rate === '+20%'
                        ? 'text-[#F59E08]'
                        : ''
                    }
                  >
                    {item.rate}
                  </span>{' '}
                  vs last month
                </p>
              </div>
              <div className="mt-2 w-full">
                <button className="bg-[#0058E6] w-full rounded-xl text-center md:px-[24px] md:py-[8px] sm:p-3 cursor-pointer first-letter:capitalize">
                  view patients
                </button>
              </div>
            </Card>
          </div>
        ))}
      </div>

      {/* Remote Monitoring Summary */}
      <div className="lg:py-[12px] lg:px-[24px] sm:p-3 border-[1.5px] border-[#CBD5E1] rounded-lg flex lg:flex-row sm:flex-col gap-y-5 items-center justify-between">
        <h2 className="text-[#1E293B] font-[500] text-[20px] capitalize">remote monitoring summary</h2>
        <div className="flex items-center gap-x-3">
          <SwitchButton />
          <h2 className="text-[#1E293B] font-[500] text-[16px] capitalize">timeframe</h2>
        </div>
      </div>

      {/* Risky Patients Table */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10">
        <DashboardTable
          header="risky patients"
          text="patients with abnormal readings"
          data={formattedPatients}
          link="/branch/patients"
        />
      </div>
    </div>
  );
};

export default BranchDashboard;
