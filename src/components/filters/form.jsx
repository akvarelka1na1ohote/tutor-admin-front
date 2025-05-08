import React from 'react';

export default function Form({ item, type }) {
  // Determine if item is a client or performer
  const isClient = type === 'client';
  const name = item?.user?.name_User || 'Без имени';
  const subjects = isClient
    ? item?.matchClients?.map(mc => mc.subject?.name_Subject).filter(Boolean).join(', ') || 'Не указаны'
    : item?.matchPerformers?.map(mp => mp.subject?.name_Subject).filter(Boolean).join(', ') || 'Не указаны';
  const cost = isClient
    ? item?.cost_From && item?.cost_To
      ? `${item.cost_From} - ${item.cost_To} руб/час`
      : 'Не указана'
    : 'Не применимо'; // Performers may not have cost fields
  const location = isClient
    ? [
        item?.sPb && 'Санкт-Петербург',
        item?.len && 'Лен.обл',
        item?.other || ''
      ].filter(Boolean).join(', ') || 'Не указана'
    : item?.about_User || 'Не указана'; // Use about_User for performers
  const classes = isClient
    ? Object.keys(item || {})
        .filter(key => key.startsWith('class_') && item[key])
        .map(key => key.replace('class_', '') + ' класс')
        .join(', ') || 'Не указаны'
    : item?.course_User
      ? `${item.course_User} курс`
      : 'Не указан';

  return (
    <div className="rounded overflow-hidden shadow-lg border border-gray-200 mb-4 w-[800px]">
      <header className="bg-gray-100 border-b border-gray-200 px-6 py-4">
        <h2 className="font-bold text-gray-800">{name}</h2>
      </header>
      <hr className="border-t border-gray-200" />
      <div className="px-6 py-4">
        <p><strong>Тип:</strong> {isClient ? 'Клиент' : 'Репетитор'}</p>
        <p><strong>Предметы:</strong> {subjects}</p>
        <p><strong>Класс/Курс:</strong> {classes}</p>
        {isClient && <p><strong>Стоимость:</strong> {cost}</p>}
        <p><strong>Локация:</strong> {location}</p>
        <p><strong>Описание:</strong> {isClient ? item?.about_Pupil || 'Нет описания' : item?.about_User || 'Нет описания'}</p>
      </div>
      <hr className="border-t border-gray-200" />
      <footer className="px-6 py-4 text-right text-gray-600">
        {isClient ? 'Заявка клиента' : 'Профиль репетитора'}
      </footer>
    </div>
  );
}