import React from 'react';

export default function Form({ item, type }) {
  const isClient = type === 'client';
  const birthYear = item?.birth_User ? new Date(item.birth_User).getFullYear() : null;
  const age = birthYear ? 2025 - birthYear : 'Не указан';
  const fullInfo = `${item?.name_User || 'Аноним'}, ${age} лет`;
  
  // Стоимость
  const cost = isClient 
    ? item?.cost_From && item?.cost_To
      ? `${item.cost_From} - ${item.cost_To} руб/час`
      : 'Не указана'
    : item?.price_From && item?.price_To
      ? `${item.price_From} - ${item.price_To} руб/час`
      : 'Не указана';

  // Класс ученика (для клиента) или преподаваемые классы (для репетитора)
  const classLevel = isClient
    ? item?.class_Level || 'Не указан'
    : item?.teach_Levels?.join(', ') || 'Не указано';

  // Описание
  const description = isClient 
    ? item?.about_Pupil || 'Не указано' 
    : item?.about_User || 'Не указано';

  // Предметы
  const uniqueSubjects = item?.subjects?.length 
    ? [...new Set(item.subjects)].join(', ') 
    : 'Не указаны';

  // Опыт работы
  const experience = item?.experience 
    ? `${item.experience} лет` 
    : 'Не указан';

  // Формат занятий
  const lessonFormat = item?.lesson_Format?.join(', ') || 'Не указан';

  // Местоположение
  const location = item?.location || 'Не указано';

  return (
    <div className="rounded overflow-hidden shadow-lg border border-gray-200 mb-4 w-[800px]">
      <header className="bg-gray-100 border-b border-gray-200 px-6 py-4">
        <h2 className="font-bold text-gray-800">{fullInfo}</h2>
      </header>
      <hr className="border-t border-gray-200" />
      <div className="px-6 py-4 text-gray-800">
        <p><strong>Тип:</strong> {isClient ? 'Клиент' : 'Репетитор'}</p>
        <p><strong>Стоимость:</strong> {cost}</p>
        <p><strong>Предметы:</strong> {uniqueSubjects}</p>
        <p><strong>Классы:</strong> {classLevel}</p>
        <p><strong>Опыт работы:</strong> {experience}</p>
        <p><strong>Формат занятий:</strong> {lessonFormat}</p>
        <p><strong>Местоположение:</strong> {location}</p>
        <p><strong>О себе:</strong> {description}</p>
      </div>
      <hr className="border-t border-gray-200" />
      <footer className="px-6 py-4 text-right text-gray-600">
        <button className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500">Связаться</button>
      </footer>
    </div>
  );
}