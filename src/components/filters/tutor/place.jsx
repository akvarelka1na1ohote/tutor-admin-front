import React from 'react';


const Place = () => {
    return (
        <div className='absolute top-[1050px] left-[30px]'>
             <label className='text-sm text-black'>Место проведения</label>
            <div className='flex  mt-[10px] mb-[14px] '>
                <input 
                    id='default-checkbox'
                    type='checkbox'
                    value='Дистанционно'
                    className='w-[23px] h-[23px] text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                />
                <label htmlFor='default-checkbox' className='ml-2 text-sm font-medium text-black dark:text-gray-300  font-display-[Roboto]'>
                    Дистанционно
                </label>
            </div>
            <div className='flex  mt-[14px]'>
                <input 
                    id='default-checkbox'
                    type='checkbox'
                    value='У ученика'
                    className='w-[23px] h-[23px] text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                />
                <label htmlFor='default-checkbox' className='ml-2 text-sm font-medium text-black dark:text-gray-300  font-display-[Roboto]'>
                    У ученика
                </label>
            </div>
            <div className='flex mt-[14px]'>
                <input 
                    id='default-checkbox'
                    type='checkbox'
                    value='У репетитора'
                    className='w-[23px] h-[23px] text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                />
                <label htmlFor='default-checkbox' className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300  font-display-[Roboto]'>
                    У  репетитора
                </label>
            </div>

        </div>
    );
};


export default Place;