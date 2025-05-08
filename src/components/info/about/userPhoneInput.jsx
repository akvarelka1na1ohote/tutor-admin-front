import React from 'react';

const Phone = ({ value, onChange }) => {
    
    return (
        <div className='w-full max-w-sm min-w-[200px] flex items-center gap-2 absolute top-[190px] right-[540px]'>
            <label className='text-sm text-slate-600'>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='size-6'>
                    <path fill-rule='evenodd' d='M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z' clip-rule='evenodd' />
                </svg>
            </label>
            <input 
                value={value}
                onChange={onChange}
                className='w-[350px] h-[40px] bg-blue-100 placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300' 
                placeholder='X-XXX-XXX-XX-XX' 
            />
        </div>
    );
};

export default Phone;