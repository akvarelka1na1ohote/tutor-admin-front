import React, { useState } from 'react';

const LocationTeacher = ({ onLocationChange }) => {
    // Сохраняем массив выбранных локейшенов
    const [checkedLocations, setCheckedLocations] = useState([]);

    // Обрабатываем изменение чекбокса
    const handleCheckboxChange = (event) => {
        const { value } = event.target;
        
        if (checkedLocations.includes(value)) {
            // Если чекбокс уже отмечен, убираем его из массива
            setCheckedLocations(prevValues => prevValues.filter(loc => loc !== value));
        } else {
            // Если чекбокс снят, добавляем его в массив
            setCheckedLocations(prevValues => [...prevValues, value]);
        }
        
        // Отсылаем выбранные значения вверх
        onLocationChange(checkedLocations);
    };

    return (
        <div className='absolute top-[1050px] left-[50px] '>
            <label className='text-sm text-slate-600 font-display-[Roboto]'>Локация</label>
            
            {/* Чекбокс Санкт-Петербург */}
            <div className='flex mt-6 mb-7'>
                <input 
                    id='spb-checkbox'
                    type='checkbox'
                    value='Санкт-Петербург'
                    className='w-[23px] h-[23px] text-blue-600 bg-gray-100 border-gray-300 rounded-md focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                    checked={checkedLocations.includes('Санкт-Петербург')}
                    onChange={handleCheckboxChange}
                />
                <label htmlFor='spb-checkbox' className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 font-display-[Roboto]'>
                    Санкт-Петербург
                </label>
            </div>
            
            {/* Чекбокс Ленинградская область */}
            <div className='flex mb-7'>
                <input 
                    id='lenobl-checkbox'
                    type='checkbox'
                    value='Лен.обл'
                    className='w-[23px] h-[23px] text-blue-600 bg-gray-100 border-gray-300 rounded-md focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                    checked={checkedLocations.includes('Лен.обл')}
                    onChange={handleCheckboxChange}
                />
                <label htmlFor='lenobl-checkbox' className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 font-display-[Roboto]'>
                    Лен.обл
                </label>
            </div>
            
            {/* Чекбокс "Другая" + поле ввода */}
            <div className='flex mb-7'>
                <input 
                    id='other-checkbox'
                    type='checkbox'
                    value='Другая'
                    className='w-[23px] h-[23px] text-blue-600 bg-gray-100 border-gray-300 rounded-md focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                    checked={checkedLocations.includes('Другая')}
                    onChange={handleCheckboxChange}
                />
                <label htmlFor='other-checkbox' className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 font-display-[Roboto]'>
                    Другая
                </label>
            </div>
            
            {/* Текстовое поле для дополнительной локации */}
            {checkedLocations.includes('Другая') && (
                <div className='flex absolute top-[110px] left-[130px]'>
                    <input 
                        className='w-[300px] h-[40px] bg-blue-100 placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300'
                        placeholder='Укажите свою локацию...'
                    />
                </div>
            )}
        </div>
    );
};

export default LocationTeacher;