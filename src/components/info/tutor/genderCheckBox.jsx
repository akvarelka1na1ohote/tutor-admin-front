import React, { useState } from 'react';
const GenderTutor = ({ onGenderChange }) => {
    // Создаем состояние для хранения выбранного значения
    const [selectedGenderTutor, setGenderTutor] = useState('Не важно'); // Изначально выбран "Не важно"

    // Обновляем состояние при изменении радиокнопки
    const handleRadioChange = (value) => {
        setGenderTutor(value);
        onGenderChange(value); // Вызываем функцию обратного вызова
    };

    return (
        <div className='absolute top-[220px] left-[320px]'>
            <label className='text-sm text-slate-600'>Пол репетитора</label>
            <div className='flex mt-6 mb-8'>
                <input 
                    id='men'
                    type='checkbox'
                    name='gender'
                    value='Мужской'
                    className='w-[23px] h-[23px] text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                    checked={selectedGenderTutor === 'Мужской'}
                    onChange={() => handleRadioChange('Мужской')} // Передаем 'Мужской' при выборе
                />
                <label htmlFor='male-radio' className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 font-display-[Roboto]'>
                    Мужской
                </label>
            </div>
            <div className='flex mb-8'>
                <input 
                    id='women'
                    type='checkbox'
                    name='gender'
                    value='Женский'
                    className='w-[23px] h-[23px] text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                    checked={selectedGenderTutor === 'Женский'}
                    onChange={() => handleRadioChange('Женский')} // Передаем 'Женский' при выборе
                />
                <label htmlFor='default-checkbox' className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 font-display-[Roboto]'>
                    Женский
                </label>
            </div>
            <div className='flex mb-8'>
                <input 
                    id='not-important'
                    type='checkbox'
                    name='gender'
                    value='Не важно'
                    className='w-[23px] h-[23px] text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                    checked={selectedGenderTutor === 'Не важно'}
                    onChange={() => handleRadioChange('Не важно')} // Передаем 'Не важно' при выборе
                />
                <label htmlFor='not-important-radio' className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 font-display-[Roboto]'>
                    Не важно
                </label>
            </div>
        </div>
    );
};

export default GenderTutor;