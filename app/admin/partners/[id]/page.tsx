import React, { useEffect } from "react";
import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { getPartner } from "@/redux/slice/admin/partner/partner";



const PartnerDetails = () => {
    const params = useParams();
    const id = params
  return (
    <div>

    </div>
  )
}

export default PartnerDetails