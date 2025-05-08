import React from 'react';

export default function Form() {
    return (
        <div className="rounded overflow-hidden shadow-lg border border-gray-200 absolute left-[370px] top-[200px] w-[800px]">
            <header className="bg-gray-100 border-b border-gray-200 px-6 py-4">
                <h2 className="font-bold text-gray-800">Заголовок формы</h2>
            </header>
            <hr className="border-t border-gray-200"/>
            <div className="px-6 py-4">
                <p>Текст внутри формы.</p>
            </div>
            <hr className="border-t border-gray-200"/>
            <footer className="px-6 py-4 text-right text-gray-600">
                Подвал формы
            </footer>
        </div>
    );
}