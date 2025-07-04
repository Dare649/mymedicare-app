'use client';

import React from 'react';
import Table from '@/components/table/page';
import { partnersTable } from '@/data/dummy';


const PatientSchedule = () => {


  const columns = [
    { key: "id", label: "id"},
    { key: "companyName", label: "company name"},
    { key: "address", label: "address"},
    { key: "contactInfo", label: "contact info"},
    { key: "type", label: "type"},
    { key: "status", label: "status"},
  ]
  return (
    <div className='w-full h-full overflow-auto'>
      <h2 className='text-[#1E293B] font-[500] text-[24px] my-2 capitalize'>partners</h2>
      <Table 
        columns={columns}
        data={partnersTable}
      />
    </div>
  )
}

export default PatientSchedule
