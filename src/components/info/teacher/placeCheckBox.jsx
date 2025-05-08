import React from 'react';


const PlaceTeacher = () => {
    return (
        <div className='absolute top-[1050px] left-[60px] '>
             <label className=' text-sm text-slate-600 font-display-[Roboto]'>Место проведения</label>
            <div className='flex  mt-6 mb-8'>
                <input 
                    id='default-checkbox'
                    type='checkbox'
                    value='У ученика'
                    className='w-[23px] h-[23px] text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                />
                <label htmlFor='default-checkbox' className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 font-display-[Roboto]'>
                    У ученика
                </label>
            </div>
            <div className='flex   mb-8'>
                <input 
                    id='default-checkbox'
                    type='checkbox'
                    value='У учителя'
                    className='w-[23px] h-[23px] text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                />
                <label htmlFor='default-checkbox' className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 font-display-[Roboto]'>
                    У учителя
                </label>
            </div>
            <div className='flex   mb-8'>
                <input 
                    id='default-checkbox'
                    type='checkbox'
                    value='Дистационно'
                    className='w-[23px] h-[23px] text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                />
                <label htmlFor='default-checkbox' className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 font-display-[Roboto]'>
                    Дистационно
                </label>
            </div>
        </div>
    );
};


export default PlaceTeacher;