import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Комбинированный компонент ButtonWithLogoutConfirmation
const OutButton = () => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const navigate = useNavigate(); 
    
        const goToPerformerPage = () => {
            closeModal();
            console.log('Пользователь вошел как исполнитель');
            navigate('/performer_profile'); 
        };

        const goToAboutPage = () => {
            closeModal();
            console.log('Пользователь вышел из учетной записи');
            navigate('/about_project'); 
        };

    return (
        <>
            <button 
                className='bg-red-600 hover:cursor-pointer w-[170px] h-[50px] font-display-[Roboto] absolute top-[100px] right-[60px] rounded-xl'
                onClick={openModal}
            >
                Выход
            </button>

            {/* Если модальное окно открыто, оно показывается */}
            { showModal && (
                <div className="fixed inset-0 flex items-center justify-center z-2">
                    <div className="relative">
                        {/* Фон, закрываемый при щелчке */}
                        <div 
                            className="fixed inset-0 bg-black opacity-70"
                            onClick={closeModal}
                        />
                        
                        {/* Окно подтверждения */}
                        <div 
                            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 p-8 bg-white shadow-lg rounded-md z-20 max-w-sm relative"
                        >
                            {/* Крестик для закрытия окна */}
                    
                            <svg onClick={closeModal}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 absolute top-2 right-2 cursor-pointer fill-black">
                                <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clip-rule="evenodd" />
                            </svg>

                            
                            <h2 className='text-black font-display-[Roboto]'>Что Вас интересует?</h2>
                            <div className="flex gap-4 mt-[10px]">
                                <button 
                                    className="w-[200px] px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                                    onClick={goToPerformerPage} 
                                >
                                    Войти как исполнитель
                                </button>
                                <button 
                                    className="w-full px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                                    onClick={goToAboutPage} 
                                >
                                    Выйти из учетной записи
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default OutButton;