


'use client';

import { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { toast } from 'react-toastify';
import { createPatient } from '@/redux/slice/partner/patient/patient';
import { startLoading, stopLoading } from '@/redux/slice/loadingSlice';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

type CreatePatientProps = {
  close: () => void;
};

interface FormState {
  name: string;
  email: string;
  phone: string;
  country_code: string;
}

const CreatePatient: React.FC<CreatePatientProps> = ({ close }) => {
  const dispatch = useDispatch<any>();
  const isLoading = useSelector((state: RootState) => state.loading.isLoading);
  const [dragActive, setDragActive] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [mode, setMode] = useState<'bulk' | 'single' | null>(null); 
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    country_code: '',
  });
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleModeChange = (selectedMode: 'bulk' | 'single') => {
    setMode(selectedMode);
    setFormData({ 
      name: '',
      email: '', 
      phone: '', 
      country_code: '' 
    });
    setFile(null);
    setErrors({});
    setFirstName('');
    setLastName('');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhoneChange = (value: string, country: any) => {
    setFormData((prevData) => ({
      ...prevData,
      phone: value,
      country_code: country.dialCode,
    }));
  };

  // const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   if (e.target.files && e.target.files[0]) {
  //     setFile(e.target.files[0]);
  //   }
  // };


  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      console.log('Files selected:', files);
      // handle files here
    }
  };

  
  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      console.log('Files dropped:', files);
      // handle files here
    }
  };


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === 'firstName') {
      setFirstName(value);
      setFormData(prev => ({ ...prev, name: `${value} ${lastName}`.trim() }));
    } else if (name === 'lastName') {
      setLastName(value);
      setFormData(prev => ({ ...prev, name: `${firstName} ${value}`.trim() }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async () => {
    if (!mode) {
      return toast.error('Please select a mode');
    }

    if (mode === 'single') {
      const fullName = `${firstName.trim()} ${lastName.trim()}`;
      const payload = {
        ...formData,
        name: fullName,
      };

      try {
        dispatch(startLoading());
        await dispatch(createPatient(payload)).unwrap();
        toast.success('Patient created successfully!');
        close();
      } catch (error) {
        toast.error('Failed to create patient');
      } finally {
        dispatch(stopLoading());
      }
    }

    if (mode === 'bulk') {
      if (!file) {
        return toast.error('Please upload a file');
      }

      // TODO: Implement bulk upload dispatch or API call
      toast.info('Bulk upload logic goes here');
    }
  };

  return (
    <div className="p-4">
      {/* Mode Selection */}
      <h3 className='text-[#1E293B] font-[500] text-[16px]'>Choose mode of adding patients</h3>
      <div className="flex gap-4 items-center">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="mode"
            value="single"
            checked={mode === 'single'}
            onChange={() => handleModeChange('single')}
            className="form-radio text-blue-500"
          />
          <span className={mode === 'single' ? 'text-blue-600 font-medium' : ''}>Single</span>
        </label>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="mode"
            value="bulk"
            checked={mode === 'bulk'}
            onChange={() => handleModeChange('bulk')}
            className="form-radio text-blue-500"
          />
          <span className={mode === 'bulk' ? 'text-blue-600 font-medium' : ''}>Bulk</span>
        </label>
      </div>
      {/* Single Mode Form */}
      {mode === 'single' && (
        <div className="space-y-4">
          <div className='mt-5'>
            <h2 className='text-[#1E293B] font-[500] text-[20px]'>Single upload</h2>
            <div className='my-3'>
                <form 
                    className=''
                >
                    <div className='w-full flex items-center gap-x-3 mb-3'>
                        <div className=''>
                          <h2 className='text-[#1E293B] text-[16px] capitalize font-[500]'>first name</h2>
                          <input 
                            type="text" 
                            name='firstName'
                            value={firstName}
                            onChange={handleChange}
                            placeholder='e.g John'
                            className='w-full p-2 rounded outline-none border-[1px] border-[#94A3BB]'
                          />
                        </div>
                        <div className=''>
                          <h2 className='text-[#1E293B] text-[16px] capitalize font-[500]'>last name</h2>
                          <input 
                              type="text" 
                              name='lastName'
                              value={lastName}
                              onChange={handleChange}
                              placeholder='e.g Doe'
                              className='w-full p-2 rounded outline-none border-[1px] border-[#94A3BB]'
                          />
                        </div>
                    </div>
                    <div className='mb-3'>
                        <h2 className='text-[#1E293B] text-[16px] capitalize font-[500]'>email address</h2>
                        <input 
                            type="text" 
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                            placeholder='e.g Doe'
                            className='w-full p-2 rounded outline-none border-[1px] border-[#94A3BB]'
                        />
                    </div>
                    <div className='mb-3'>
                      <h2 className='text-[#1E293B] text-[16px] capitalize font-[500]'>phone number</h2>
                      <PhoneInput
                        country={'ng'}
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        inputClass="w-full"
                        inputStyle={{
                          width: '100%',
                          height: '48px',
                          borderRadius: '8px',
                          border: '1px solid #94A3BB',
                          paddingLeft: '48px',
                        }}
                        buttonStyle={{
                          border: 'none',
                          background: 'transparent',
                          borderRadius: '8px 0 0 8px',
                        }}
                        containerStyle={{ width: '100%' }}
                      />
                    </div>
                </form>
            </div>
          </div>
        </div>
      )}

      {/* Bulk Upload */}
      {mode === 'bulk' && (
        <div className="space-y-2">
          <div>
            <h2 className='text-[#1E293B] font-[500] text-[20px]'>Bulk upload</h2>
            <div
                className={`w-full h-[128px] border-[1px] rounded-sm border-dashed ${
                    dragActive ? 'bg-blue-100' : 'bg-[#EBF3FF]'
                } flex items-center justify-center relative`}
                onDragEnter={handleDrag}
                onDragOver={handleDrag}
                onDragLeave={handleDrag}
                onDrop={handleDrop}
            >
                <h3 className="text-center text-sm">
                    Drop your files here or{' '}
                    <span
                    className="underline text-blue-700 cursor-pointer"
                    onClick={() => inputRef.current?.click()}
                    >
                    choose file
                    </span>
                </h3>

                {/* Hidden file input */}
                <input
                    ref={inputRef}
                    type="file"
                    className="hidden"
                    multiple
                    onChange={handleFileChange}
                />
            </div>
            <p className='text-[12px] font-[400] leading-relaxed tracking-wide'>Upload a CSV or Excel file with the following columns: First Name, Last Name, Phone Number, Email Address, Country Code</p>
          </div>
        </div>
      )}

      {/* Submit Button */}
      {mode && (
        <div className="flex justify-center mt-6">
          <button
            onClick={handleSubmit}
            disabled={isLoading}
            className="w-[50%] bg-blue-600 text-white py-3 rounded-lg capitalize disabled:opacity-50"
          >
            {isLoading ? 'onboarding...' : 'onboard'}
          </button>
        </div>

      )}
    </div>
  );
};

export default CreatePatient;

