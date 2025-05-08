import React, { useState } from 'react';

const ClassTutor = ({ onClassChange }) => {
    // Состояние для отслеживания открытого состояния выпадающего списка
    const [isOpen, setIsOpen] = useState(false);
    
    // Состояние для хранения выбранного класса
    const [selectedClass, setSelectedClass] = useState('1 класс');

    // Переключатель видимости выпадающего списка
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    // Установка выбранного класса и передача назад родителю
    const handleSelect = (classValue) => {
        setSelectedClass(classValue);
        setIsOpen(false); // закрываем выпадающий список
        localStorage.setItem('selectedClass', classValue); // сохраняем выбранный класс в localStorage
        if (onClassChange) {
            onClassChange(classValue); // вызываем колбэк-функцию родителя
        }
        console.log('Класс:', classValue); // выводим выбранный класс в консоль
    };

    return (
        <>
            <button
                id='dropdownDefaultButton'
                onClick={toggleDropdown}
                className='text-white bg-blue-300 w-[150px] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 absolute top-[145px] left-[110px]'
                type='button'>
                {selectedClass} {/* Отображаем выбранный класс */}
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='size-3 ml-[40px]'>
                    <path fill-rule='evenodd' d='M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z' clip-rule='evenodd'/>
                </svg>
            </button>
            <label className='text-sm text-slate-600 absolute top-[155px] left-[50px] font-display-[Roboto]'>Класс</label>
            <div
                id='dropdown'
                className={`z-1 ${isOpen ? '' : 'hidden'} bg-white divide-y divide-gray-100  shadow-sm  ml-[110px] mt-[190px] w-[150px] dark:bg-gray-700 absolute `}>
                <ul className=' text-sm text-gray-700 dark:text-gray-200' aria-labelledby='dropdownDefaultButton'>
                    <li>
                        <a 
                            href='#' 
                            className='block px-4 py-2 font-display-[Roboto]  hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer'
                            onClick={() => handleSelect('1 класс')}>1 класс</a>
                    </li>
                    <li>
                        <a 
                            href='#' 
                            className='block px-4 py-2 font-display-[Roboto] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer'
                            onClick={() => handleSelect('2 класс')}>2 класс</a>
                    </li>
                    <li>
                        <a 
                            href='#' 
                            className='block px-4 py-2 font-display-[Roboto] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer'
                            onClick={() => handleSelect('3 класс')}>3 класс</a>
                    </li>
                    <li>
                        <a 
                            href='#' 
                            className='block px-4 py-2 font-display-[Roboto] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer'
                            onClick={() => handleSelect('4 класс')}>4 класс</a>
                    </li>
                    <li>
                        <a 
                            href='#' 
                            className='block px-4 py-2 font-display-[Roboto] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer'
                            onClick={() => handleSelect('5 класс')}>5 класс</a>
                    </li>
                    <li>
                        <a 
                            href='#' 
                            className='block px-4 py-2 font-display-[Roboto] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer'
                            onClick={() => handleSelect('6 класс')}>6 класс</a>
                    </li>
                    <li>
                        <a 
                            href='#' 
                            className='block px-4 py-2 font-display-[Roboto] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer'
                            onClick={() => handleSelect('7 класс')}>7 класс</a>
                    </li>
                    <li>
                        <a 
                            href='#' 
                            className='block px-4 py-2 font-display-[Roboto] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer'
                            onClick={() => handleSelect('8 класс')}>8 класс</a>
                    </li>
                    <li>
                        <a 
                            href='#' 
                            className='block px-4 py-2 font-display-[Roboto] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer'
                            onClick={() => handleSelect('9 класс')}>9 класс</a>
                    </li>
                    <li>
                        <a 
                            href='#' 
                            className='block px-4 py-2 font-display-[Roboto] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer'
                            onClick={() => handleSelect('10 класс')}>10 класс</a>
                    </li>
                    <li>
                        <a 
                            href='#' 
                            className='block px-4 py-2 font-display-[Roboto] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer'
                            onClick={() => handleSelect('11 класс')}>11 класс</a>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default ClassTutor;