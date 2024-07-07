import { formateDate } from '../../utils/formateDate'

import React from 'react'

const DoctorAbout = () => {
  return (
    <div>
      <div>
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">About Of
        <span className='text-irisBlueColor font-bold text-[24] leading-9'>
            Asish Mishra
        </span> 
        </h3>
        <p className='text__para'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto illum fugit dicta quisquam quas expedita ad dolor, deserunt nostrum reiciendis.</p>
      </div>
        <div className='mt-12'>
            <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>Education</h3>
            <ul className='pt-4 md:p-5'>
                <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
                    <div>
                        <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>{formateDate("12-04-2007")}-{formateDate("10-04-2011")}</span>
                        <p className='text-[16px] leading-6 font-medium text-textColor'>PHD</p>
                        <p className='text-[16px] leading-5 font-medium text-textColor'>AIIMS,Delhi</p>
                        
                    </div>
                    
                </li>
                <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
                    <div>
                        <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>{formateDate("1-04-2002")}-{formateDate("1-20-2006")}</span>
                        <p className='text-[16px] leading-6 font-medium text-textColor'>MBBS</p>
                        <p className='text-[16px] leading-5 font-medium text-textColor'>AIIMS,Delhi</p>
                        
                    </div>
                    
                </li>
            </ul>
        </div>
        <div className='mt-12'>
            <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>Experience</h3>
            <ul className='grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5'>
                <li className='p-4 rounded bg-[#fff9ea]'>
                    <span className='text-yellowColor text-[15px] leading-6 font-semibold'>{formateDate("1-04-2012")}-{formateDate("1-20-2019")}</span>
                    <p className='text-[16px] leading-6 font-medium text-textColor'>Surgeon</p>
                    <p className='text-[16px] leading-6 font-medium text-textColor'>MAX,Delhi</p>
                </li>
                <li className='p-4 rounded bg-[#fff9ea]'>
                    <span className='text-yellowColor text-[15px] leading-6 font-semibold'>{formateDate("1-30-2020")}-{formateDate("1-20-2024")}</span>
                    <p className='text-[16px] leading-6 font-medium text-textColor'>Surgeon</p>
                    <p className='text-[16px] leading-6 font-medium text-textColor'>BCM,Sitapur</p>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default DoctorAbout
