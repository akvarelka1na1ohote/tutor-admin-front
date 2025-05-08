import React, { useState } from 'react';

const PlaceTutor = ({ onPlaceChange }) => {
    // Создаем состояние для хранения множества выбранных мест
    const [checkedPlaces, setCheckedPlaces] = useState([]);

    // Обновляем состояние при изменении чекбокса
    const handleCheckboxChange = (event) => {
        const { value } = event.target;
        
        if (checkedPlaces.includes(value)) {
            // Если чекбокс уже включен, удаляем его из массива
            setCheckedPlaces((prevValues) => prevValues.filter(place => place !== value));
        } else {
            // Иначе добавляем новое значение
            setCheckedPlaces((prevValues) => [...prevValues, value]);
        }

        // Отправляем новые данные родительскому компоненту
        onPlaceChange(checkedPlaces);
    };

    return (
        <div className="absolute top-[1050px] left-[60px]">
            <label className="text-sm text-slate-600 font-display-[Roboto]">Место проведения</label>

            {/* Чекбокс "У ученика" */}
            <div className="flex mt-6 mb-8">
                <input 
                    id="student-place"
                    type="checkbox"
                    value="У ученика"
                    className="w-[23px] h-[23px] text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    checked={checkedPlaces.includes('У ученика')}
                    onChange={handleCheckboxChange}
                />
                <label htmlFor="student-place" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 font-display-[Roboto]">
                    У ученика
                </label>
            </div>

            {/* Чекбокс "У учителя" */}
            <div className="flex mb-8">
                <input 
                    id="teacher-place"
                    type="checkbox"
                    value="У учителя"
                    className="w-[23px] h-[23px] text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    checked={checkedPlaces.includes('У учителя')}
                    onChange={handleCheckboxChange}
                />
                <label htmlFor="teacher-place" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 font-display-[Roboto]">
                    У учителя
                </label>
            </div>

            {/* Чекбокс "Дистанционно" */}
            <div className="flex">
                <input 
                    id="remote-place"
                    type="checkbox"
                    value="Дистанционно"
                    className="w-[23px] h-[23px] text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    checked={checkedPlaces.includes('Дистанционно')}
                    onChange={handleCheckboxChange}
                />
                <label htmlFor="remote-place" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 font-display-[Roboto]">
                    Дистанционно
                </label>
            </div>
        </div>
    );
};

export default PlaceTutor;