import React, { useState } from 'react';
const CourseTeacher = ({ onChange }) => {
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
      <div className="flex absolute top-[520px] left-[50px]">
        <label className="text-sm text-slate-600">Курс обучения</label>
        <button
          className={`bg-blue-300 hover:bg-indigo-600 cursor-pointer w-[130px] h-[35px]
                     absolute top-[30px] left-[3px] rounded-xl font-display-Roboto
                     ${selectedCourses.includes('1 курс') ? 'bg-indigo-600' : ''}`}
          onClick={() => handleClick('1 курс')}
        >
          1 курс
        </button>
        <button
          className={`bg-blue-300 hover:bg-indigo-600 cursor-pointer w-[130px] h-[35px]
                     absolute top-[30px] left-[150px] rounded-xl font-display-Roboto
                     ${selectedCourses.includes('2 курс') ? 'bg-indigo-600' : ''}`}
          onClick={() => handleClick('2 курс')}
        >
          2 курс
        </button>
        <button
          className={`bg-blue-300 hover:bg-indigo-600 cursor-pointer w-[130px] h-[35px]
                     absolute top-[30px] left-[297px] rounded-xl font-display-Roboto
                     ${selectedCourses.includes('3 курс') ? 'bg-indigo-600' : ''}`}
          onClick={() => handleClick('3 курс')}
        >
          3 курс
        </button>
        <button
          className={`bg-blue-300 hover:bg-indigo-600 cursor-pointer w-[130px] h-[35px]
                     absolute top-[30px] left-[444px] rounded-xl font-display-Roboto
                     ${selectedCourses.includes('4 курс') ? 'bg-indigo-600' : ''}`}
          onClick={() => handleClick('4 курс')}
        >
          4 курс
        </button>
        <button
          className={`bg-blue-300 hover:bg-indigo-600 cursor-pointer w-[130px] h-[35px]
                     absolute top-[80px] left-[3px] rounded-xl font-display-Roboto
                     ${selectedCourses.includes('5 курс') ? 'bg-indigo-600' : ''}`}
          onClick={() => handleClick('5 курс')}
        >
          5 курс
        </button>
        <button
          className={`bg-blue-300 hover:bg-indigo-600 cursor-pointer w-[130px] h-[35px]
                     absolute top-[80px] left-[150px] rounded-xl font-display-Roboto
                     ${selectedCourses.includes('Выпускник') ? 'bg-indigo-600' : ''}`}
          onClick={() => handleClick('Выпускник')}
        >
          Выпускник
        </button>
        <button
          className={`bg-blue-300 hover:bg-indigo-600 cursor-pointer w-[130px] h-[35px]
                     absolute top-[80px] left-[297px] rounded-xl font-display-Roboto
                     ${selectedCourses.includes('Не важно') ? 'bg-indigo-600' : ''}`}
          onClick={() => handleClick('Не важно')}
        >
          Не важно
        </button>
      </div>
    );
  };
  
  export default CourseTeacher;