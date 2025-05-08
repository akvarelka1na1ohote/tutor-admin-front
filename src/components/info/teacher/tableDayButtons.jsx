import React, { useState } from 'react';

const TableDayTeacher = ({ onChange }) => {
  // Локальное состояние компонента, хранящее выбранные дни
  const [selectedDays, setSelectedDays] = useState([]);

  // Обработка кликов по дням
  const handleClick = (day) => {
    let updatedDays;
    if (selectedDays.includes(day)) {
      // Удаление дня, если он уже выбран
      updatedDays = selectedDays.filter(d => d !== day);
    } else {
      // Добавление нового дня
      updatedDays = [...selectedDays, day];
    }
    setSelectedDays(updatedDays);
    // Передача обновленных значений наружу через проп onChange
    onChange(updatedDays);
  };

  return (
    <div className="flex absolute top-[675px] left-[245px]">
      <button
        className={`bg-blue-300 hover:bg-indigo-600 cursor-pointer w-[70px] h-[40px]
                   absolute top-[20px] left-[3px] rounded-xl font-display-Roboto
                   ${selectedDays.includes('Пн') ? 'bg-indigo-600' : ''}`}
        onClick={() => handleClick('Пн')}
      >
        Пн
      </button>
      <button
        className={`bg-blue-300 hover:bg-indigo-600 cursor-pointer w-[70px] h-[40px]
                   absolute top-[20px] left-[90px] rounded-xl font-display-Roboto
                   ${selectedDays.includes('Вт') ? 'bg-indigo-600' : ''}`}
        onClick={() => handleClick('Вт')}
      >
        Вт
      </button>
      <button
        className={`bg-blue-300 hover:bg-indigo-600 cursor-pointer w-[70px] h-[40px]
                   absolute top-[20px] left-[177px] rounded-xl font-display-Roboto
                   ${selectedDays.includes('Ср') ? 'bg-indigo-600' : ''}`}
        onClick={() => handleClick('Ср')}
      >
        Ср
      </button>
      <button
        className={`bg-blue-300 hover:bg-indigo-600 cursor-pointer w-[70px] h-[40px]
                   absolute top-[20px] left-[264px] rounded-xl font-display-Roboto
                   ${selectedDays.includes('Чт') ? 'bg-indigo-600' : ''}`}
        onClick={() => handleClick('Чт')}
      >
        Чт
      </button>
      <button
        className={`bg-blue-300 hover:bg-indigo-600 cursor-pointer w-[70px] h-[40px]
                   absolute top-[20px] left-[351px] rounded-xl font-display-Roboto
                   ${selectedDays.includes('Пт') ? 'bg-indigo-600' : ''}`}
        onClick={() => handleClick('Пт')}
      >
        Пт
      </button>
      <button
        className={`bg-blue-300 hover:bg-indigo-600 cursor-pointer w-[70px] h-[40px]
                   absolute top-[20px] left-[438px] rounded-xl font-display-Roboto
                   ${selectedDays.includes('Сб') ? 'bg-indigo-600' : ''}`}
        onClick={() => handleClick('Сб')}
      >
        Сб
      </button>
      <button
        className={`bg-blue-300 hover:bg-indigo-600 cursor-pointer w-[70px] h-[40px]
                   absolute top-[20px] left-[525px] rounded-xl font-display-Roboto
                   ${selectedDays.includes('Вс') ? 'bg-indigo-600' : ''}`}
        onClick={() => handleClick('Вс')}
      >
        Вс
      </button>
    </div>
  );
};

export default TableDayTeacher;