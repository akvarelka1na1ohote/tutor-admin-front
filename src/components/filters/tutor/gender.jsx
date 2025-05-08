import React from 'react';

const Gender = ({ gender, setGender }) => {
  const handleChange = (e) => {
    const value = e.target.value;
    setGender((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  return (
    <div className='absolute top-[370px] left-[30px]'>
      <label className='text-sm text-slate-600'>Пол репетитора</label>
      <div className='flex mt-[10px] mb-[14px]'>
        <input
          id='male'
          type='checkbox'
          value='Мужской'
          checked={gender.includes('Мужской')}
          onChange={handleChange}
          className='w-[23px] h-[23px] text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
        />
        <label htmlFor='male' className='ml-2 text-sm font-medium text-black dark:text-gray-300 font-display-[Roboto]'>
          Мужской
        </label>
      </div>
      <div className='flex mt-[14px]'>
        <input
          id='female'
          type='checkbox'
          value='Женский'
          checked={gender.includes('Женский')}
          onChange={handleChange}
          className='w-[23px] h-[23px] text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
        />
        <label htmlFor='female' className='ml-2 text-sm font-medium text-black dark:text-gray-300 font-display-[Roboto]'>
          Женский
        </label>
      </div>
      <div className='flex mt-[14px]'>
        <input
          id='any'
          type='checkbox'
          value='Неважно'
          checked={gender.includes('Неважно')}
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

export default Gender;