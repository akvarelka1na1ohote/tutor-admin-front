import React, { useState } from 'react';

const PlaceTutor = ({ onPlaceChange }) => {
    // Массив для хранения выбранных мест проведения занятий
    const [selectedPlaces, setSelectedPlaces] = useState([]); // изначально ничего не выбрано

    // Обрабатываем смену чекбокса
    const handleCheckboxChange = (option) => {
        let updatedPlaces;
        if (selectedPlaces.includes(option)) {
            // Если галочка была установлена, удаляем её из массива
            updatedPlaces = selectedPlaces.filter(place => place !== option);
        } else {
            // Если галочку установили впервые, добавляем в массив
            updatedPlaces = [...selectedPlaces, option];
        }
        setSelectedPlaces(updatedPlaces);
        onPlaceChange(updatedPlaces); // передаем обновление вверх
    };

    return (
        <div className='absolute top-[1200px] left-[60px] '>
            <label className='text-sm font-medium text-slate-600 font-display-[Roboto]'>Место проведения</label>
            <div className='flex mt-6 mb-8'>
                <input 
                    id='place-student'
                    type='checkbox'
                    value='У ученика'
                    className='w-[23px] h-[23px] text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                    checked={selectedPlaces.includes('У ученика')}
                    onChange={() => handleCheckboxChange('У ученика')} 
                />
                <label htmlFor='place-student' className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 font-display-[Roboto]'>
                    У ученика
                </label>
            </div>
            <div className='flex mb-8'>
                <input 
                    id='place-tutor'
                    type='checkbox'
                    value='У учителя'
                    className='w-[23px] h-[23px] text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                    checked={selectedPlaces.includes('У учителя')}
                    onChange={() => handleCheckboxChange('У учителя')} 
                />
                <label htmlFor='place-tutor' className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 font-display-[Roboto]'>
                    У учителя
                </label>
            </div>
            <div className='flex'>
                <input 
                    id='place-distance'
                    type='checkbox'
                    value='Дистанционно'
                    className='w-[23px] h-[23px] text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                    checked={selectedPlaces.includes('Дистанционно')}
                    onChange={() => handleCheckboxChange('Дистанционно')} 
                />
                <label htmlFor='place-distance' className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 font-display-[Roboto]'>
                    Дистанционно
                </label>
            </div>
        </div>
    );
};

export default PlaceTutor;