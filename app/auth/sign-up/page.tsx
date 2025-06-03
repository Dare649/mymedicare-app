'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from "next/image";
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { startLoading, stopLoading } from '@/redux/slice/loadingSlice';
import { RootState, AppDispatch } from '@/redux/store';
import { signUp } from '@/redux/slice/auth/auth';
import Tab from '@/components/tabs/page';
import PatientSignup from '@/components/patient/sign-up/page';
import ProfessionalSignup from '@/components/professional/sign-up/page';
import Card from '@/components/card/page';




const Signup = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const isLoading = useSelector((state: RootState) => state.loading.isLoading);
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = ['/image-32.png', '/hospital-queue.jpg', '/hero-section-image.png'];
  const [selectedRole, setSelectedRole] = useState<'Patient' | 'Professional'>('Patient');
  const roles = ["Patient", "Professional"];
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "patient",
    country_code: "",
    phone: "",
    password: "",
    speciality_id: ""
  });


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  
  
  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleTabChange = (index: number) => {
    const role = roles[index];
    setSelectedRole(role as 'Patient' | 'Professional');
    setFormData((prev) => ({
      ...prev,
      role: role.toLowerCase(), // 'patient' or 'professional'
    }));
  };


  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(startLoading());
    try {
      const response = await dispatch(signUp(formData)).unwrap();
      toast.success(response.message);
      router.push('/auth/verify-otp');
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      dispatch(stopLoading());
    }
  };


  return (
    <section className="w-full h-screen flex">
      
      {/* Form Section */}
      <div className="sm:w-full lg:w-[40%] h-screen p-4 overflow-y-auto flex-col ">
        <div className="flex gap-3 flex-col">
          <div className="w-[60%]">
            <Image
              src={"/logo-2.png"}
              alt="MyMedicare"
              width={100}
              height={100}
              className="w-full"
              quality={100}
              priority
            />
          </div>
          <h2 className="text-xl sm:text-lg text-primary-5 text-left font-medium">Welcome, <br /> Sign up to get started.</h2>
        </div>
        <Card className='w-full p-5 mt-5'>
          <Tab titles={roles} renderContent={(role) => (
              role === "Patient" ? (
                <PatientSignup formData={formData} onChange={handleChange} />
              ) : (
                <ProfessionalSignup formData={formData} onChange={handleChange} />
              )
            )} 
          />
          <button
            className='w-full bg-primary-5 text-white py-5 rounded-md hover:bg-primary-4 transition duration-200 capitalize font-semibols'
            type='button'
            onClick={handleSubmit}
            disabled={isLoading}
          >
            sign up
          </button>
        </Card>
      </div>

      {/* Image Section */}
      <div className="sm:w-0 lg:w-[60%] h-screen relative overflow-hidden">
        {images.map((src, index) => (
          <Image
            key={src}
            src={src}
            alt={`Slide ${index}`}
            fill
            className={`object-cover absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            quality={100}
            priority={index === currentIndex}
          />
        ))}
      </div>
    </section>
  );
};

export default Signup;
