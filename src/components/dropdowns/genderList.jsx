import React, { useState } from 'react';

const Gender = ({ onChange }) => {
    // Состояние для отслеживания открытого состояния выпадающего списка
    const [isOpen, setIsOpen] = useState(false);
    
    // Состояние для хранения выбранного пола
    const [selectedGender, setSelectedGender] = useState(localStorage.getItem('selectedGender') || 'Мужской');

    // Функция для переключения видимости выпадающего списка
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    // Функция для установки выбранного пола
    const handleSelect = (gender) => {
        setSelectedGender(gender);
        setIsOpen(false); // Закрываем выпадающее меню после выбора
        localStorage.setItem('selectedGender', gender); // Сохраняем выбранное значение в localStorage
        if (onChange) {
            onChange(gender); // Вызываем колбэк-функцию родителя
        }
        console.log('Пол:', gender); // Вывод в консоль
    };

    return (
        <>  
            <button
                id='dropdownDefaultButton'
                onClick={toggleDropdown}
                className='text-white bg-blue-300 w-[120px] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 absolute top-[135px] right-[720px]'
                type='button'>
                {selectedGender} {/* Отображается выбранное значение */}
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='size-5 ml-[10px]'>
                    <path fill-rule='evenodd' d='M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z' clip-rule='evenodd' />
                </svg>
            </button>
            <label className='text-sm text-slate-600 absolute top-[145px] right-[896px] font-display-[Roboto] '>Пол:</label>
            <div
                id='dropdown'
                className={`z-1 ${isOpen ? '' : 'hidden'} bg-white divide-y divide-gray-100  shadow-sm  ml-[400px] mt-[-97px] w-[120px] dark:bg-gray-700 absolute `}
            >
                <ul className=' text-sm font-display-[Roboto] text-gray-700 dark:text-gray-200' aria-labelledby='dropdownDefaultButton'>
                    <li>
                        <a 
                            href='#' 
                            className='block px-4 py-2 font-display-[Roboto] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer'
                            onClick={() => handleSelect('Мужской')} // Обработчик выбора
                        >Мужской</a>
                    </li>
                    <li>
                        <a 
                            href='#' 
                            className='block px-4 py-2 font-display-[Roboto] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer'
                            onClick={() => handleSelect('Женский')}
                        >Женский</a>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Gender;