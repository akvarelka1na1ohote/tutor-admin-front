import React, { useState } from 'react';

// Компонент для отображения одного предмета
const SubjectTag = ({ subjectTutor }) => {
  return (
    <div className="bg-indigo-400 p-2 m-2 rounded-lg">
      {subject}
    </div>
  );
};

// Основной компонент
const AddSubjectsTutorButton = () => {
  const [subjects, setSubjects] = useState([]); // Состояние для хранения списка предметов
  const [inputValue, setInputValue] = useState(''); // Состояние для строки ввода

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddSubject = () => {
    if (inputValue.trim() !== '') {
      setSubjects([...subjects, inputValue]);
      setInputValue('');
    }
  };

  return (
    <div>
      {/* Строка ввода для названия предмета */}
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Название предмета..."
        className="w-[300px] h-[40px] bg-blue-100 placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 absolute top-[450px] left-[750px]"
      />

        <label className='text-sm font-medium text-slate-600 font-display-[Roboto] absolute top-[420px] left-[750px]'>
            Предметы
        </label>

      {/* Кнопка добавления предмета */}
      <button className="bg-blue-500 text-white hover:cursor-pointer w-[40px] h-[40px] absolute top-[450px] left-[1070px] rounded-xl"
        onClick={handleAddSubject}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-8 absolute top-[5px] left-[4px]"
        >
          <path
            fillRule="evenodd"
            d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Отображение добавленных предметов в виде плашек */}
      <div className="flex flex-wrap mt-4 absolute top-[100px] left-[45px]">
        {subjects.map((subject, index) => (
          <SubjectTag key={index} subject={subject} />
        ))}
      </div>
    </div>
  );
};

export default AddSubjectsTutorButton;