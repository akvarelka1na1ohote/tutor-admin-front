import React, { useState } from 'react';

const CourseTutor = ({ onCourseChange }) => {
    // Состояние для отслеживания открытого состояния выпадающего списка
    const [isOpen, setIsOpen] = useState(false);
    
    // Состояние для хранения выбранного курса
    const [selectedCourse, setSelectedCourse] = useState('1 курс');

    // Переключатель видимости выпадающего списка
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    // Установка выбранного курса и передача назад родителю
    const handleSelect = (courseValue) => {
        setSelectedCourse(courseValue);
        setIsOpen(false); // закрываем выпадающий список
        localStorage.setItem('selectedCourse', courseValue); // сохраняем выбранный курс в localStorage
        if (onCourseChange) {
            onCourseChange(courseValue); // вызываем колбэк-функцию родителя
        }
        console.log('Курс:', courseValue); // выводим выбранный курс в консоль
    };

    return (
        <>
            <button
                id='dropdownDefaultButton'
                onClick={toggleDropdown}
                className='text-white bg-blue-300 w-[150px] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 absolute top-[65px] left-[860px]'
                type='button'>
                {selectedCourse} {/* Отображаем выбранный курс */}
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='size-3 ml-[40px]'>
                    <path fill-rule='evenodd' d='M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z' clip-rule='evenodd'/>
                </svg>
            </button>
            <label className='text-sm font-medium text-slate-600 absolute top-[30px] left-[860px] font-display-[Roboto]'>Курс</label>
            <div
                id='dropdown'
                className={`z-1 ${isOpen ? '' : 'hidden'} bg-white divide-y divide-gray-100  shadow-sm  ml-[860px] mt-[100px] w-[150px] dark:bg-gray-700 absolute `}>
                <ul className=' text-sm text-gray-700 dark:text-gray-200' aria-labelledby='dropdownDefaultButton'>
                    <li>
                        <a 
                            href='#' 
                            className='block px-4 py-2 font-display-[Roboto]  hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer'
                            onClick={() => handleSelect('1 курс')}>1 курс</a>
                    </li>
                    <li>
                        <a 
                            href='#' 
                            className='block px-4 py-2 font-display-[Roboto] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer'
                            onClick={() => handleSelect('2 курс')}>2 курс</a>
                    </li>
                    <li>
                        <a 
                            href='#' 
                            className='block px-4 py-2 font-display-[Roboto] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer'
                            onClick={() => handleSelect('3 курс')}>3 курс</a>
                    </li>
                    <li>
                        <a 
                            href='#' 
                            className='block px-4 py-2 font-display-[Roboto] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer'
                            onClick={() => handleSelect('4 курс')}>4 курс</a>
                    </li>
                    <li>
                        <a 
                            href='#' 
                            className='block px-4 py-2 font-display-[Roboto] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer'
                            onClick={() => handleSelect('5 курс')}>5 курс</a>
                    </li>
                    <li>
                        <a 
                            href='#' 
                            className='block px-4 py-2 font-display-[Roboto] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer'
                            onClick={() => handleSelect('6 курс')}>6 курс</a>
                    </li>
                    <li>
                        <a 
                            href='#' 
                            className='block px-4 py-2 font-display-[Roboto] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer'
                            onClick={() => handleSelect('7 курс')}>Выпускник</a>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default CourseTutor;