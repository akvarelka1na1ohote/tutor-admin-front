import React, { useState } from 'react';

const TableTutor = ({ onScheduleChange }) => {
    // Хранение списка выбранных вариантов
    const [checkedValues, setCheckedValues] = useState([]);

    // Функция обработки изменения чекбокса
    const handleCheckboxChange = (event) => {
        const { value } = event.target;
        
        if (checkedValues.includes(value)) {
            // Если чекбокс уже отмечен — удаляем его из массива
            setCheckedValues(prevValues => prevValues.filter(v => v !== value));
        } else {
            // Иначе добавляем новое значение
            setCheckedValues(prevValues => [...prevValues, value]);
        }
    
        // Опционально передаем обновленные значения во внешний компонент
        onScheduleChange(checkedValues);
    };

    return (
        <div className="absolute top-[620px] left-[50px]">
            <label className="text-sm text-slate-600 absolute top-[-30px] left-[1px] font-display-[Roboto]">Расписание</label>
            
            {/* Чекбокс "По договоренности" */}
            <div className="flex mb-4">
                <input 
                    id="default-checkbox-agreement"
                    type="checkbox"
                    value="По договоренности"
                    className="w-[23px] h-[23px] text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    checked={checkedValues.includes("По договоренности")}
                    onChange={handleCheckboxChange}
                />
                <label htmlFor="default-checkbox-agreement" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 font-display-[Roboto]">
                    По договоренности
                </label>
            </div>
            
            {/* Чекбокс "Фиксированное" */}
            <div className="flex mb-4">
                <input 
                    id="default-checkbox-fixed"
                    type="checkbox"
                    value="Фиксированное"
                    className="w-[23px] h-[23px] text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    checked={checkedValues.includes("Фиксированное")}
                    onChange={handleCheckboxChange}
                />
                <label htmlFor="default-checkbox-fixed" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 font-display-[Roboto]">
                    Фиксированное
                </label>
            </div>
        </div>
    );
};

export default TableTutor;