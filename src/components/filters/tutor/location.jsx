import React from 'react';


const Location = () => {
    return (
        <div className='absolute top-[1210px] left-[30px]'>
             <label className='text-sm text-black'>Локация</label>
            <div className='flex  mt-[10px] mb-[14px] '>
                <input 
                    id='default-checkbox'
                    type='checkbox'
                    value='Санкт-Петербург'
                    className='w-[23px] h-[23px] text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                />
                <label htmlFor='default-checkbox' className='ml-2 text-sm font-medium text-black dark:text-gray-300  font-display-[Roboto]'>
                    Санкт-Петербург
                </label>
            </div>
            <div className='flex  mt-[14px]'>
                <input 
                    id='default-checkbox'
                    type='checkbox'
                    value='Лен.обл'
                    className='w-[23px] h-[23px] text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                />
                <label htmlFor='default-checkbox' className='ml-2 text-sm font-medium text-black dark:text-gray-300  font-display-[Roboto]'>
                    Лен.обл
                </label>
            </div>
            <div className='flex mt-[14px]'>
                <input 
                    id='default-checkbox'
                    type='checkbox'
                    value='Неважно'
                    className='w-[23px] h-[23px] text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                />
                <label htmlFor='default-checkbox' className='ml-2 text-sm font-medium text-black dark:text-gray-300  font-display-[Roboto]'>
                    Неважно
                </label>
            </div>

        </div>
    );
};


export default Location;