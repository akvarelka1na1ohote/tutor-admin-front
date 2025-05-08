import React from 'react';

const Email = ({ value, onChange }) => {
    
    return (
        <div className='w-full max-w-sm min-w-[200px] flex items-center gap-2 absolute top-[240px] right-[540px]'>
            <label className='text-sm text-slate-600'>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='size-6'>
                    <path d='M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z' />
                    <path d='M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z' />
                </svg>
            </label>
            <input 
                value={value}
                onChange={onChange}
                className='w-[350px] h-[40px] bg-blue-100 placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300' 
                placeholder='johnsmith@gmail.com' 
            />
        </div>
    );
};

export default Email;