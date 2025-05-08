import React from 'react';

export default function Form({ item, type }) {
  const isClient = type === 'client';
  const identifier = item?.phone_User || item?.email_User || 'Аноним';
  const birthYear = item?.birth_User ? new Date(item.birth_User).getFullYear() : null;
  const age = birthYear ? 2025 - birthYear : 'Не указан';
  const fullInfo = `${identifier}, ${age} лет`;
  const cost = isClient
    ? item?.cost_From && item?.cost_To
      ? `${item.cost_From} - ${item.cost_To} руб/час`
      : 'Не указана'
    : 'Не применимо';
  const classLevel = isClient
    ? Object.keys(item || {})
        .filter(key => key.startsWith('class_') && item[key])
        .map(key => key.replace('class_', '') + ' класс')
        .join(', ') || 'Не указан'
    : 'Не применимо';
  const description = isClient ? item?.about_Pupil || 'Нет описания' : item?.about_User || 'Нет описания';
  // Note: Subjects cannot be displayed without matchClients/matchPerformers data

  return (
    <div className="rounded overflow-hidden shadow-lg border border-gray-200 mb-4 w-[800px]">
      <header className="bg-gray-100 border-b border-gray-200 px-6 py-4">
        <h2 className="font-bold text-gray-800">{fullInfo}</h2>
      </header>
      <hr className="border-t border-gray-200" />
      <div className="px-6 py-4">
        <p><strong>Тип:</strong> {isClient ? 'Клиент' : 'Репетитор'}</p>
        <p><strong>Стоимость заявки:</strong> {cost}</p>
        <p><strong>Стоимость из анкеты:</strong> {cost}</p>
        <p><strong>Класс ученика:</strong> {classLevel}</p>
        <p><strong>О себе:</strong> {description}</p>
        {/* Предметы не отображаются, требуется добавление данных matchClients/matchPerformers в API */}
      </div>
      <hr className="border-t border-gray-200" />
      <footer className="px-6 py-4 text-right text-gray-600">
        <button className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500">Связаться</button>
      </footer>
    </div>
  );
}
