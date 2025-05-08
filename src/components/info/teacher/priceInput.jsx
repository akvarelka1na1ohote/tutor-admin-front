import React, { useState } from 'react';

const PriceTeacher = ({ onPriceChange }) => {
    // Создаём состояния для хранения минимальной и максимальной ставки
    const [minRate, setMinRate] = useState('');
    const [maxRate, setMaxRate] = useState('');

    // Обработчик изменения поля "от"
    const handleMinRateChange = (event) => {
        setMinRate(event.target.value);
        onPriceChange && onPriceChange({ minRate: event.target.value, maxRate });
    };

    // Обработчик изменения поля "до"
    const handleMaxRateChange = (event) => {
        setMaxRate(event.target.value);
        onPriceChange && onPriceChange({ minRate, maxRate: event.target.value });
    };

    return (
        <div className='flex absolute top-[150px] left-[50px]'>
            <label className='text-sm text-slate-600 font-display-[Roboto]'>
                Ставка
            </label>

            <input
                className='w-[100px] h-[45px] bg-blue-100 placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 absolute top-[30px]'
                placeholder='От'
                value={minRate}
                onChange={handleMinRateChange}
                type="number"
            />
            <input
                className='w-[100px] h-[45px] bg-blue-100 placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 absolute top-[30px] left-[120px]'
                placeholder='До'
                value={maxRate}
                onChange={handleMaxRateChange}
                type="number"
            />
        </div>
    );
};

export default PriceTeacher;