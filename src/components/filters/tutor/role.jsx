import React from 'react';

const Role = () => {
    return (
        <>
        
            <div className='flex items-center absolute top-[50px] left-[30px]'>
                <input
                    checked
                    id='default-radio-2'
                    type='radio'
                    value=''
                    name='default-radio'
                    className='w-5 h-5  bg-gray-100 border-gray-300 focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                />
                <label htmlFor='default-radio-2' className='ms-2 text-sm font-medium text-black dark:text-gray-300'>
                    Репетитор
                </label>

            </div>

            <div className='flex items-center absolute top-[90px] left-[30px]'>
                <input
                    checked
                    id='default-radio-2'
                    type='radio'
                    value=''
                    name='default-radio'
                    className='w-5 h-5  bg-gray-100 border-gray-300 focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                />
                <label htmlFor='default-radio-2' className='ms-2 text-sm font-medium text-black dark:text-gray-300'>
                    Учитель
                </label>

            </div>

        </>
    );
};

export default Role;