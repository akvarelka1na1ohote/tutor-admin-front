import React, { useState } from 'react';

const TableTutor = ({ onScheduleChange }) => {
    // Используем массив для хранения выбранных пунктов
    const [selectedOptions, setSelectedOptions] = useState([]);

    // Обновляем список выбранных опций при изменении чекбокса
    const handleCheckboxChange = (option) => {
        let updatedOptions;
        if (selectedOptions.includes(option)) {
            // Если чекбокс уже отмечен, удаляем этот пункт из массива
            updatedOptions = selectedOptions.filter((item) => item !== option);
        } else {
            // Иначе добавляем новый пункт
            updatedOptions = [...selectedOptions, option];
        }
        setSelectedOptions(updatedOptions);
        onScheduleChange(updatedOptions); // Вызываем функцию обратного вызова с новым списком
    };

    return (
        <div className='absolute top-[820px] left-[50px]'>
            <label className='text-sm font-medium text-slate-600 absolute top-[-30px] left-[1px] font-display-[Roboto]'>Расписание</label>
            <div className='flex mb-4'>
                <input 
                    id='default-checkbox-agreement'
                    type='checkbox'
                    value='По договоренности'
                    className='w-[23px] h-[23px] text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                    checked={selectedOptions.includes('По договоренности')}
                    onChange={() => handleCheckboxChange('По договоренности')} 
                />
                <label htmlFor='default-checkbox-agreement' className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 font-display-[Roboto]'>
                    По договоренности
                </label>
            </div>
            <div className='flex mb-4'>
                <input 
                    id='default-checkbox-fixed'
                    type='checkbox'
                    value='Фиксированное'
                    className='w-[23px] h-[23px] text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                    checked={selectedOptions.includes('Фиксированное')}
                    onChange={() => handleCheckboxChange('Фиксированное')} 
                />
                <label htmlFor='default-checkbox-fixed' className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 font-display-[Roboto]'>
                    Фиксированное
                </label>
            </div>
        </div>
    );
};

export default TableTutor;