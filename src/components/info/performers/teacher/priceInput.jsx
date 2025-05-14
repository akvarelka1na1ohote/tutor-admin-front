import React, { useState } from 'react';

const PriceTeacher = ({ onPriceChange }) => {
    // Создаем состояния для хранения минимальной и максимальной стоимости часа
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

    // Обработчики изменения в полях ввода
    const handleMinPriceChange = (event) => {
        setMinPrice(event.target.value);
        onPriceChange({ minPrice: event.target.value, maxPrice }); // Вызываем функцию обратного вызова
    };

    const handleMaxPriceChange = (event) => {
        setMaxPrice(event.target.value);
        onPriceChange({ minPrice, maxPrice: event.target.value }); // Вызываем функцию обратного вызова
    };

    return (
        <div className='flex absolute top-[325px] left-[750px]'>
            <label className='text-sm font-medium text-slate-600 font-display-[Roboto]'>
                Стоимость часа
            </label>

            <input
                className='w-[100px] h-[45px] bg-blue-100 placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 absolute top-[30px]  '
                placeholder='От'
                value={minPrice}
                onChange={handleMinPriceChange}
                type="number"
            />
            <input
                className='w-[100px] h-[45px] bg-blue-100 placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 absolute top-[30px] left-[120px] '
                placeholder='До'
                value={maxPrice}
                onChange={handleMaxPriceChange}
                type="number"
            />
        </div>
    );
};

export default PriceTeacher;