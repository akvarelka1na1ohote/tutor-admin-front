import React from 'react';

const Location = ({ location, setLocation }) => {
  const handleChange = (e) => {
    const value = e.target.value;
    setLocation((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  return (
    <div className='absolute top-[1210px] left-[30px]'>
      <label className='text-sm text-black'>Локация</label>
      <div className='flex mt-[10px] mb-[14px]'>
        <input
          id='spb'
          type='checkbox'
          value='Санкт-Петербург'
          checked={location.includes('Санкт-Петербург')}
          onChange={handleChange}
          className='w-[23px] h-[23px] text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
        />
        <label htmlFor='spb' className='ml-2 text-sm font-medium text-black dark:text-gray-300 font-display-[Roboto]'>
          Санкт-Петербург
        </label>
      </div>
      <div className='flex mt-[14px]'>
        <input
          id='len'
          type='checkbox'
          value='Лен.обл'
          checked={location.includes('Лен.обл')}
          onChange={handleChange}
          className='w-[23px] h-[23px] text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
        />
        <label htmlFor='len' className='ml-2 text-sm font-medium text-black dark:text-gray-300 font-display-[Roboto]'>
          Лен.обл
        </label>
      </div>
      <div className='flex mt-[14px]'>
        <input
          id='any'
          type='checkbox'
          value='Неважно'
          checked={location.includes('Неважно')}
          onChange={handleChange}
          className='w-[23px] h-[23px] text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
        />
        <label htmlFor='any' className='ml-2 text-sm font-medium text-black dark:text-gray-300 font-display-[Roboto]'>
          Неважно
        </label>
      </div>
    </div>
  );
};

export default Location;