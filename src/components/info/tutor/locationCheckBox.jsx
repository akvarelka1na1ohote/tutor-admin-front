import React, { useState } from 'react';

const LocationTutor = ({ onLocationChange }) => {
    const [checkedLocations, setCheckedLocations] = useState([]); // Массив для хранения выбранных значений
    const [otherLocation, setOtherLocation] = useState('');

    // Обработка смены чекбокса
    const handleCheckboxChange = (event) => {
        const { value } = event.target;
        
        if (value === 'Другая') {
            // Отдельная обработка поля "другое": очищаем поле, если снять отметку
            if (!checkedLocations.includes('Другая')) {
                setOtherLocation('');
            }
        }
        
        if (checkedLocations.includes(value)) {
            // Удаляем из массива, если чекбокс снят
            setCheckedLocations(prevValues => prevValues.filter(v => v !== value));
        } else {
            // Добавляем в массив, если чекбокс установлен
            setCheckedLocations(prevValues => [...prevValues, value]);
        }
        
        // Передача новых значений обратно
        onLocationChange(checkedLocations);
    };

    // Обработка изменения текста поля "другое"
    const handleInputChange = (event) => {
        setOtherLocation(event.target.value);
    };

    return (
        <div className="absolute top-[1050px] left-[290px]">
            <label className="text-sm text-slate-600 font-display-[Roboto]">Локация</label>
            
            {/* Чекбокс Санкт-Петербург */}
            <div className="flex mt-6 mb-8">
                <input 
                    id="spb-checkbox"
                    type="checkbox"
                    value="Санкт-Петербург"
                    className="w-[23px] h-[23px]"
                    checked={checkedLocations.includes('Санкт-Петербург')}
                    onChange={handleCheckboxChange}
                />
                <label htmlFor="spb-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 font-display-[Roboto]">
                    Санкт-Петербург
                </label>
            </div>
            
            {/* Чекбокс Ленинградская область */}
            <div className="flex mb-8">
                <input 
                    id="lenoblast-checkbox"
                    type="checkbox"
                    value="Лен.обл"
                    className="w-[23px] h-[23px]"
                    checked={checkedLocations.includes('Лен.обл')}
                    onChange={handleCheckboxChange}
                />
                <label htmlFor="lenoblast-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 font-display-[Roboto]">
                    Лен.обл
                </label>
            </div>
            
            {/* Поле ввода для другой локации */}
            <div className="flex mb-8 relative">
                <input 
                    id="other-input"
                    type="checkbox"
                    value="Другая"
                    className="w-[23px] h-[23px]"
                    checked={checkedLocations.includes('Другая')}
                    onChange={handleCheckboxChange}
                />
                <label htmlFor="other-input" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 font-display-[Roboto]">
                    Другая
                </label>
                
                {checkedLocations.includes('Другая') && (
                    <input 
                        className="w-[300px] h-[40px] ml-8 bg-blue-100 placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300"
                        placeholder=""
                        value={otherLocation}
                        onChange={handleInputChange}
                    />
                )}
            </div>
        </div>
    );
};

export default LocationTutor;