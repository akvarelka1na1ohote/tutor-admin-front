import React from 'react';

const DateBirth = ({ value, onChange }) => {
    return (
        <div className='w-full max-w-sm min-w-[200px] flex items-center gap-2 absolute top-[80px] right-[540px]'>
            <label className='text-sm text-slate-600 font-display-[Roboto]'>
                День Рождения:
            </label>
            <input 
                value={value}
                onChange={onChange}
                className='w-[150px] h-[40px] bg-blue-100 placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300'
                placeholder='01-01-2001'
            />
        </div>
    );
};

export default DateBirth;