import React, { useState } from 'react';


const LocationTutor = ({ onLocationChange }) => {
    // Массив для хранения выбранных мест
    const [selectedLocations, setSelectedLocations] = useState([]);
    // Хранение дополнительного значения, если выбрана "Другая"
    const [otherLocation, setOtherLocation] = useState('');
 // Обработчик смены чекбокса
    const handleCheckboxChange = (option) => {
        let updatedLocations;
        if (selectedLocations.includes(option)) {
            // Если галочка была включена, удаляем её из массива
            updatedLocations = selectedLocations.filter(loc => loc !== option);
        } else {
            // Если галочку поставили, добавляем новую опцию
            updatedLocations = [...selectedLocations, option];
        }
        setSelectedLocations(updatedLocations);
        onLocationChange(updatedLocations); // Отправляем изменения вверх
    };

    // Обработчик изменения текста в дополнительном поле
    const handleInputChange = (event) => {
        setOtherLocation(event.target.value); // Сохраняем введенное значение
    };

    return (
        <div className='absolute top-[1200px] left-[290px]'>
            <label className='text-sm font-medium text-slate-600 font-display-[Roboto]'>Локация</label>

            {/* Выбор Санкт-Петербурга */}
            <div className="flex mt-6 mb-8">
                <input 
                    id="spb-checkbox"
                    type="checkbox"
                    value="Санкт-Петербург"
                    className="w-[23px] h-[23px]"
                    checked={selectedLocations.includes('Санкт-Петербург')}
                    onChange={() => handleCheckboxChange('Санкт-Петербург')}
                />
                <label htmlFor="spb-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 font-display-[Roboto]">
                    Санкт-Петербург
                </label>
            </div>

            {/* Выбор Ленинградской области */}
            <div className="flex mb-8">
                <input 
                    id="lenoblast-checkbox"
                    type="checkbox"
                    value="Лен. обл."
                    className="w-[23px] h-[23px]"
                    checked={selectedLocations.includes('Лен. обл.')}
                    onChange={() => handleCheckboxChange('Лен. обл.')}
                />
                <label htmlFor="lenoblast-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 font-display-[Roboto]">
                    Лен. обл.
                </label>
            </div>

            {/* Дополнительное поле для другого местоположения */}
            <div className="flex mb-8 relative">
                <input 
                    id="other-checkbox"
                    type="checkbox"
                    value="Другая"
                    className="w-[23px] h-[23px]"
                    checked={selectedLocations.includes('Другая')}
                    onChange={() => handleCheckboxChange('Другая')}
                />
                <label htmlFor="other-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 font-display-[Roboto]">
                    Другая
                </label>

                {selectedLocations.includes('Другая') && (
                    <input 
                        className='w-[300px] h-[40px] ml-8 bg-blue-100 placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300'
                        placeholder='Введите вашу локацию...'
                        value={otherLocation}
                        onChange={handleInputChange}
                    />
                )}
            </div>
        </div>
    );
};

export default LocationTutor;