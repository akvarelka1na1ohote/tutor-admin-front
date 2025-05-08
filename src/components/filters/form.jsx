import React from 'react';

export default function Form({ item, type }) {
  const isClient = type === 'client';
  const identifier = item?.phone_User || item?.email_User || `ID ${item.id}`;
  const cost = isClient
    ? item?.cost_From && item?.cost_To
      ? `${item.cost_From} - ${item.cost_To} руб/час`
      : 'Не указана'
    : 'Не применимо';
  const location = isClient
    ? [
        item?.sPb && 'Санкт-Петербург',
        item?.len && 'Лен.обл',
        item?.other || ''
      ].filter(Boolean).join(', ') || 'Не указана'
    : 'Не применимо';
  const classes = isClient
    ? Object.keys(item || {})
        .filter(key => key.startsWith('class_') && item[key])
        .map(key => key.replace('class_', '') + ' класс')
        .join(', ') || 'Не указаны'
    : item?.course_User
      ? `${item.course_User} курс`
      : 'Не указан';
  const description = isClient ? item?.about_Pupil || 'Нет описания' : item?.about_User || 'Нет описания';

  return (
    <div className="rounded overflow-hidden shadow-lg border border-gray-200 mb-4 w-[800px]">
      <header className="bg-gray-100 border-b border-gray-200 px-6 py-4">
        <h2 className="font-bold text-gray-800">{identifier}</h2>
      </header>
      <hr className="border-t border-gray-200" />
      <div className="px-6 py-4">
        <p><strong>Тип:</strong> {isClient ? 'Клиент' : 'Репетитор'}</p>
        <p><strong>Класс/Курс:</strong> {classes}</p>
        {isClient && <p><strong>Стоимость:</strong> {cost}</p>}
        {isClient && <p><strong>Локация:</strong> {location}</p>}
        <p><strong>Описание:</strong> {description}</p>
        {item?.gender_User !== undefined && (
          <p><strong>Пол:</strong> {item.gender_User ? 'Мужской' : 'Женский'}</p>
        )}
        {item?.birth_User && (
          <p><strong>Год рождения:</strong> {new Date(item.birth_User).getFullYear()}</p>
        )}
        {item?.with_Expirience !== undefined && (
          <p><strong>Опыт:</strong> {item.with_Expirience ? 'С опытом' : 'Без опыта'}</p>
        )}
      </div>
      <hr className="border-t border-gray-200" />
      <footer className="px-6 py-4 text-right text-gray-600">
        {isClient ? 'Заявка клиента' : 'Профиль репетитора'}
      </footer>
    </div>
  );
}