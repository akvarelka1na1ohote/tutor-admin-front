import React, { useState } from 'react';

const TableTeacher = ({ onScheduleChange }) => {
    // Создаем состояние для хранения выбранных типов расписания
    const [checkedSchedules, setCheckedSchedules] = useState([]);

    // Обновляем состояние при изменении чекбокса
    const handleCheckboxChange = (event) => {
        const { value } = event.target;
        
        if (checkedSchedules.includes(value)) {
            // Если чекбокс уже отмечен, удаляем из массива
            setCheckedSchedules(prevValues => prevValues.filter(type => type !== value));
        } else {
            // Иначе добавляем новое значение
            setCheckedSchedules(prevValues => [...prevValues, value]);
        }
        
        // Отправляем обновление наружу
        onScheduleChange(checkedSchedules);
    };

    return (
        <div className='absolute top-[680px] left-[50px]'>
            <label className='text-sm text-slate-600 absolute top-[-30px] left-[1px] font-display-[Roboto]'>Расписание</label>
            
            {/* Чекбокс "По договоренности" */}
            <div className='flex mb-4'>
                <input 
                    id='agreement-checkbox'
                    type='checkbox'
                    value='По договоренности'
                    className='w-[23px] h-[23px] text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                    checked={checkedSchedules.includes('По договоренности')}
                    onChange={handleCheckboxChange}
                />
                <label htmlFor='agreement-checkbox' className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 font-display-[Roboto]'>
                    По договоренности
                </label>
            </div>
            
            {/* Чекбокс "Фиксированное" */}
            <div className='flex mb-4'>
                <input 
                    id='fixed-checkbox'
                    type='checkbox'
                    value='Фиксированное'
                    className='w-[23px] h-[23px] text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                    checked={checkedSchedules.includes('Фиксированное')}
                    onChange={handleCheckboxChange}
                />
                <label htmlFor='fixed-checkbox' className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 font-display-[Roboto]'>
                    Фиксированное
                </label>
            </div>
        </div>
    );
};

export default TableTeacher;