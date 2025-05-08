import React, { useState } from 'react';

const ClassTeacher = ({ onChange }) => {
    // Локальное состояние компонента, хранящее выбранные классы
    const [selectedClasses, setSelectedClasses] = useState([]);

    // Обработка кликов по классам
    const handleClick = (className) => {
        let updatedClasses;
        if (selectedClasses.includes(className)) {
            // Если класс уже выбран, удаляем его из массива
            updatedClasses = selectedClasses.filter(cls => cls !== className);
        } else {
            // Если класс не выбран, добавляем его
            updatedClasses = [...selectedClasses, className];
        }
        setSelectedClasses(updatedClasses);
        // Передача обновленных значений наружу через проп onChange
        onChange(updatedClasses);
    };

    return (
        <div className="flex absolute top-[330px] left-[50px]">
            <label className="text-sm text-slate-600">Класс ученика</label>

            {/* Кнопки классов */}
            <button
                className={`bg-blue-300 hover:bg-indigo-600 cursor-pointer w-[130px] h-[35px]
                         absolute top-[30px] left-[3px] rounded-xl font-display-Roboto
                         ${selectedClasses.includes('1 класс') ? 'bg-indigo-600' : ''}`}
                onClick={() => handleClick('1 класс')}
            >
                1 класс
            </button>
            <button
                className={`bg-blue-300 hover:bg-indigo-600 cursor-pointer w-[130px] h-[35px]
                         absolute top-[30px] left-[150px] rounded-xl font-display-Roboto
                         ${selectedClasses.includes('2 класс') ? 'bg-indigo-600' : ''}`}
                onClick={() => handleClick('2 класс')}
            >
                2 класс
            </button>
            <button
                className={`bg-blue-300 hover:bg-indigo-600 cursor-pointer w-[130px] h-[35px]
                         absolute top-[30px] left-[297px] rounded-xl font-display-Roboto
                         ${selectedClasses.includes('3 класс') ? 'bg-indigo-600' : ''}`}
                onClick={() => handleClick('3 класс')}
            >
                3 класс
            </button>
            <button
                className={`bg-blue-300 hover:bg-indigo-600 cursor-pointer w-[130px] h-[35px]
                         absolute top-[30px] left-[444px] rounded-xl font-display-Roboto
                         ${selectedClasses.includes('4 класс') ? 'bg-indigo-600' : ''}`}
                onClick={() => handleClick('4 класс')}
            >
                4 класс
            </button>
            <button
                className={`bg-blue-300 hover:bg-indigo-600 cursor-pointer w-[130px] h-[35px]
                         absolute top-[80px] left-[3px] rounded-xl font-display-Roboto
                         ${selectedClasses.includes('5 класс') ? 'bg-indigo-600' : ''}`}
                onClick={() => handleClick('5 класс')}
            >
                5 класс
            </button>
            <button
                className={`bg-blue-300 hover:bg-indigo-600 cursor-pointer w-[130px] h-[35px]
                         absolute top-[80px] left-[150px] rounded-xl font-display-Roboto
                         ${selectedClasses.includes('6 класс') ? 'bg-indigo-600' : ''}`}
                onClick={() => handleClick('6 класс')}
            >
                6 класс
            </button>
            <button
                className={`bg-blue-300 hover:bg-indigo-600 cursor-pointer w-[130px] h-[35px]
                         absolute top-[80px] left-[297px] rounded-xl font-display-Roboto
                         ${selectedClasses.includes('7 класс') ? 'bg-indigo-600' : ''}`}
                onClick={() => handleClick('7 класс')}
            >
                7 класс
            </button>
            <button
                className={`bg-blue-300 hover:bg-indigo-600 cursor-pointer w-[130px] h-[35px]
                         absolute top-[80px] left-[444px] rounded-xl font-display-Roboto
                         ${selectedClasses.includes('8 класс') ? 'bg-indigo-600' : ''}`}
                onClick={() => handleClick('8 класс')}
            >
                8 класс
            </button>
            <button
                className={`bg-blue-300 hover:bg-indigo-600 cursor-pointer w-[130px] h-[35px]
                         absolute top-[130px] left-[3px] rounded-xl font-display-Roboto
                         ${selectedClasses.includes('9 класс') ? 'bg-indigo-600' : ''}`}
                onClick={() => handleClick('9 класс')}
            >
                9 класс
            </button>
            <button
                className={`bg-blue-300 hover:bg-indigo-600 cursor-pointer w-[130px] h-[35px]
                         absolute top-[130px] left-[150px] rounded-xl font-display-Roboto
                         ${selectedClasses.includes('10 класс') ? 'bg-indigo-600' : ''}`}
                onClick={() => handleClick('10 класс')}
            >
                10 класс
            </button>
            <button
                className={`bg-blue-300 hover:bg-indigo-600 cursor-pointer w-[130px] h-[35px]
                         absolute top-[130px] left-[297px] rounded-xl font-display-Roboto
                         ${selectedClasses.includes('11 класс') ? 'bg-indigo-600' : ''}`}
                onClick={() => handleClick('11 класс')}
            >
                11 класс
            </button>
        </div>
    );
};

export default ClassTeacher;