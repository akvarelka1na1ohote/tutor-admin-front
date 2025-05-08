import React from 'react';

const Timetable = ({ timetable, setTimetable }) => {
  const days = [
    { id: 1, name: 'По договоренности', apiField: 'arrangement' },
    { id: 2, name: 'Понедельник', apiField: 'monday' },
    { id: 3, name: 'Вторник', apiField: 'tuesday' },
    { id: 4, name: 'Среда', apiField: 'wednesday' },
    { id: 5, name: 'Четверг', apiField: 'thursday' },
    { id: 6, name: 'Пятница', apiField: 'friday' },
    { id: 7, name: 'Суббота', apiField: 'saturday' },
    { id: 8, name: 'Воскресенье', apiField: 'sunday' }
  ];

  const handleChange = (e) => {
    const value = e.target.value;
    setTimetable((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  return (
    <div className="absolute top-[1350px] left-[30px]">
      <label className="block text-sm/6 font-medium text-black">График занятий</label>
      {days.map((day) => (
        <div key={day.id} className="flex mt-[10px]">
          <input
            id={`day-${day.id}`}
            type="checkbox"
            value={day.name}
            checked={timetable.includes(day.name)}
            onChange={handleChange}
            className="w-[23px] h-[23px] text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor={`day-${day.id}`}
            className="ml-2 text-sm font-medium text-black dark:text-gray-300 font-display-[Roboto]"
          >
            {day.name}
          </label>
        </div>
      ))}
    </div>
  );
};

export default Timetable;