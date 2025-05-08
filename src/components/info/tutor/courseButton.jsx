import React, { useState } from 'react';

const CourseTutor = ({ onChange }) => {
    // Локальное состояние компонента, хранящее выбранные курсы
    const [selectedCourses, setSelectedCourses] = useState([]);

    // Обработка кликов по курсам
    const handleClick = (course) => {
        let updatedCourses;
        if (selectedCourses.includes(course)) {
            // Если курс уже выбран, удаляем его из массива
            updatedCourses = selectedCourses.filter(c => c !== course);
        } else {
            // Если курс не выбран, добавляем его
            updatedCourses = [...selectedCourses, course];
        }
        setSelectedCourses(updatedCourses);
        // Передача обновленных значений наружу через проп onChange
        onChange(updatedCourses);
    };

    return (
        <div className="flex absolute top-[440px] left-[50px]">
            <label className="text-sm text-slate-600 ">Курс</label>
            <button
                className={`bg-blue-300 hover:bg-indigo-600 cursor-pointer w-[130px] h-[35px] absolute top-[30px] left-[3px] rounded-xl font-display-Roboto
                           ${selectedCourses.includes('1') ? 'bg-indigo-600' : ''}`}
                onClick={() => handleClick('1')}
            >
                1 курс
            </button>
            <button
                className={`bg-blue-300 hover:bg-indigo-600 cursor-pointer w-[130px] h-[35px] absolute top-[30px] left-[150px] rounded-xl font-display-Roboto
                           ${selectedCourses.includes('2') ? 'bg-indigo-600' : ''}`}
                onClick={() => handleClick('2')}
            >
                2 курс
            </button>
            <button
                className={`bg-blue-300 hover:bg-indigo-600 cursor-pointer w-[130px] h-[35px] absolute top-[30px] left-[297px] rounded-xl font-display-Roboto
                           ${selectedCourses.includes('3') ? 'bg-indigo-600' : ''}`}
                onClick={() => handleClick('3')}
            >
                3 курс
            </button>
            <button
                className={`bg-blue-300 hover:bg-indigo-600 cursor-pointer w-[130px] h-[35px] absolute top-[30px] left-[444px] rounded-xl font-display-Roboto
                           ${selectedCourses.includes('4') ? 'bg-indigo-600' : ''}`}
                onClick={() => handleClick('4')}
            >
                4 курс
            </button>
            <button
                className={`bg-blue-300 hover:bg-indigo-600 cursor-pointer w-[130px] h-[35px] absolute top-[80px] left-[3px] rounded-xl font-display-Roboto
                           ${selectedCourses.includes('5') ? 'bg-indigo-600' : ''}`}
                onClick={() => handleClick('5')}
            >
                5 курс
            </button>
            <button
                className={`bg-blue-300 hover:bg-indigo-600 cursor-pointer w-[130px] h-[35px] absolute top-[80px] left-[150px] rounded-xl font-display-Roboto
                           ${selectedCourses.includes('выпускник') ? 'bg-indigo-600' : ''}`}
                onClick={() => handleClick('выпускник')}
            >
                Выпускник
            </button>
            <button
                className={`bg-blue-300 hover:bg-indigo-600 cursor-pointer w-[130px] h-[35px] absolute top-[80px] left-[297px] rounded-xl font-display-Roboto
                           ${selectedCourses.includes('не важно') ? 'bg-indigo-600' : ''}`}
                onClick={() => handleClick('не важно')}
            >
                Не важно
            </button>
        </div>
    );
};

export default CourseTutor;