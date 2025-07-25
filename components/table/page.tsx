'use client';

import React, { useMemo, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { CiSearch } from 'react-icons/ci';
import Link from 'next/link';
import { IoEyeOutline } from 'react-icons/io5';

interface Column {
  key: string;
  label: string;
}

interface TableProps {
  data?: any[];
  columns?: Column[];
  itemsPerPage?: number;
  viewPath?: (id: string | number) => string;
}

const Table: React.FC<TableProps> = ({
  data = [],
  columns = [],
  itemsPerPage = 10,
  viewPath = (id) => `/view/${id}`,
}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = useMemo(() => {
    if (!data || !columns) return [];
    return data.filter((item) =>
      columns.some((col) =>
        String(item[col.key] ?? '')
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      )
    );
  }, [data, columns, searchTerm]);

  const pageCount = Math.ceil(filteredData.length / itemsPerPage);
  const offset = currentPage * itemsPerPage;
  const currentPageData = filteredData.slice(offset, offset + itemsPerPage);

  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };

  return (
    <div className="w-full">
      {/* Search Input */}
      <div className="w-full border-b-[1.5px] border-[#CBD5E1] px-4 py-3 flex items-center gap-x-2 text-[#94A3BB]">
        <CiSearch size={18} />
        <input
          type="text"
          placeholder="Search something..."
          className="outline-none border-none text-sm w-full"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Table */}
      <div className="w-full overflow-auto">
        <table className="w-full table-auto text-sm">
          <thead className="bg-[#F1F5F9] text-left">
            <tr>
              {columns.map((col) => (
                <th key={col.key} className="py-3 px-6 font-[500] text-[#475569] uppercase">
                  {col.label}
                </th>
              ))}
              <th className="py-3 px-6 font-[500] text-[#475569] uppercase">action</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {currentPageData.length > 0 ? (
              currentPageData.map((item, index) => (
                <tr key={index} className="border-t hover:bg-[#F9FAFB]">
                  {columns.map((col) => (
                    <td key={col.key} className="py-3 px-6 text-[#334155] font-[400]">
                      {item[col.key]}
                    </td>
                  ))}
                  <td className="py-3 px-6">
                    <Link 
                        href={viewPath(item.id)}
                        className='flex justify-center bg-secondary-4 rounded-md p-2 text-[#0F172A] cursor-pointer gap-x-1'
                    >
                      <IoEyeOutline size={14}/>
                      <h2 className='-mt-1'>view</h2>
                    </Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={columns.length + 1} className="text-center py-6 text-gray-400">
                  No data found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {pageCount > 1 && (
        <div className="flex justify-end px-4 py-3">
            <ReactPaginate
                previousLabel="← Prev"
                nextLabel="Next →"
                pageCount={pageCount}
                onPageChange={handlePageChange}
                containerClassName="flex gap-2 items-center text-sm cursor-pointer"
                pageClassName="px-3 py-1 border rounded-md hover:bg-primary-3 hover:text-white"
                activeClassName="bg-primary-5 text-white font-semibold"
                previousClassName="px-3 py-1 border rounded-md hover:bg-primary-3 hover:text-white"
                nextClassName="px-3 py-1 border rounded-md hover:bg-primary-3 hover:text-white"
                disabledClassName="opacity-50 cursor-not-allowed"
            />
        </div>
      )}
    </div>
  );
};

export default Table;
