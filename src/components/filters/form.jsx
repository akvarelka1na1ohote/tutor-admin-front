import React from 'react';

export default function Form({ item, type }) {
  const isClient = type === 'client';
  
  // Основная информация
  const birthYear = item?.birth_User ? new Date(item.birth_User).getFullYear() : null;
  const age = birthYear ? new Date().getFullYear() - birthYear : 'Не указан';
  const fullInfo = `${item?.name_User || 'Аноним'}, ${age} лет`;
  const gender = item?.gender_User === 'male' ? 'Мужской' : item?.gender_User === 'female' ? 'Женский' : 'Не указан';

  // Контактные данные
  const phone = item?.phone_User || 'Не указан';
  const email = item?.email_User || 'Не указан';

  // Стоимость занятий
  const cost = isClient 
    ? item?.cost_From && item?.cost_To
      ? `${item.cost_From} - ${item.cost_To} руб/час`
      : 'Не указана'
    : item?.price_From && item?.price_To
      ? `${item.price_From} - ${item.price_To} руб/час`
      : 'Не указана';

  // Классы/уровни
  const classLevel = isClient
    ? item?.class_Level || 'Не указан'
    : item?.teach_Levels?.join(', ') || 'Не указано';

  // Предметы (с обработкой дубликатов)
  const uniqueSubjects = item?.subjects?.length 
    ? [...new Set(item.subjects)].join(', ') 
    : 'Не указаны';

  // Описание
  const description = isClient 
    ? item?.about_Pupil || 'Не указано' 
    : item?.about_User || 'Не указано';

  // Опыт работы (только для репетиторов)
  const experience = !isClient && item?.experience 
    ? `${item.experience} ${getExperienceWord(item.experience)}`
    : 'Не применимо';

  // Формат занятий
  const lessonFormat = item?.lesson_Format?.join(', ') || 'Не указан';

  // Местоположение
  const location = item?.location || 'Не указано';

  // Расписание
  const schedule = item?.schedule?.join(', ') || 'Не указано';

  // Вспомогательная функция для склонения слова "год"
  function getExperienceWord(years) {
    years = parseInt(years);
    if (isNaN(years)) return 'лет';
    
    const lastDigit = years % 10;
    const lastTwoDigits = years % 100;
    
    if (lastTwoDigits >= 11 && lastTwoDigits <= 19) return 'лет';
    if (lastDigit === 1) return 'год';
    if (lastDigit >= 2 && lastDigit <= 4) return 'года';
    return 'лет';
  }

  return (
    <div className="rounded overflow-hidden shadow-lg border border-gray-200 mb-4 ml-30 w-[800px]">
      <header className="bg-gray-100 border-b border-gray-200 px-6 py-4">
        <h2 className="font-bold text-gray-800">{fullInfo}</h2>
      </header>
      
      <div className="px-6 py-4 text-gray-800 grid grid-cols-2 gap-4">
        {/* Основная информация */}
        <div className="col-span-2 grid grid-cols-2 gap-4 border-b pb-4 mb-4">
          <div>
            <p><strong>Тип:</strong> {isClient ? 'Клиент' : 'Репетитор'}</p>
            <p><strong>Пол:</strong> {gender}</p>
          </div>
          <div>
            <p><strong>Телефон:</strong> {phone}</p>
            <p><strong>Email:</strong> {email}</p>
          </div>
        </div>

        {/* Информация о занятиях */}
        <div>
          <p><strong>Стоимость:</strong> {cost}</p>
          <p><strong>Предметы:</strong> {uniqueSubjects}</p>
          <p><strong>{isClient ? 'Класс ученика' : 'Преподаваемые классы'}:</strong> {classLevel}</p>
        </div>
        
        <div>
          {!isClient && <p><strong>Опыт работы:</strong> {experience}</p>}
          <p><strong>Формат занятий:</strong> {lessonFormat}</p>
          <p><strong>Местоположение:</strong> {location}</p>
        </div>

        {/* Расписание (если есть) */}
        {schedule && (
          <div className="col-span-2">
            <p><strong>Расписание:</strong> {schedule}</p>
          </div>
        )}

        {/* Описание */}
        <div className="col-span-2 border-t pt-4">
          <p><strong>О себе:</strong></p>
          <p className="mt-2">{description}</p>
        </div>
      </div>
      
      <footer className="px-6 py-4 text-right text-gray-600 bg-gray-50">
        <button className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500 transition-colors">
          Связаться
        </button>
      </footer>
    </div>
  );
}