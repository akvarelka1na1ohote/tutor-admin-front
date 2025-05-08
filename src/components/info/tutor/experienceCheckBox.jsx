import React, { useState } from 'react';
const ExperienceTutor = ({ onExperienceChange }) => {
  // Создаем состояние для хранения выбранного значения
  const [hasExperience, setHasExperience] = useState(false); // Изначально не выбран ни один чекбокс

  // Обновляем состояние при изменении чекбокса
  const handleCheckboxChange = (value) => {
    setHasExperience(value);
    onExperienceChange(value); // Вызываем функцию обратного вызова
  };

  return (
    <div className="absolute top-[1070px] left-[770px]">
      <label className="text-sm text-slate-600">Наличие опыта</label>
      <div className="flex mt-6 mb-8">
        <input
          id="default-checkbox"
          type="checkbox"
          value="С опытом"
          className="w-[23px] h-[23px] text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          checked={hasExperience === true}
          onChange={() => handleCheckboxChange(true)} // Передаем true при выборе "С опытом"
        />
        <label
          htmlFor="default-checkbox"
          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 font-display-[Roboto]"
        >
          С опытом
        </label>
      </div>
      <div className="flex mb-8">
        <input
          id="default-checkbox"
          type="checkbox"
          value="Без опыта"
          className="w-[23px] h-[23px] text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          checked={hasExperience === false}
          onChange={() => handleCheckboxChange(false)} // Передаем false при выборе "Без опытом"
        />
        <label
          htmlFor="default-checkbox"
          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 font-display-[Roboto]"
        >
          Без опытом
        </label>
      </div>
    </div>
  );
};

export default ExperienceTutor;
