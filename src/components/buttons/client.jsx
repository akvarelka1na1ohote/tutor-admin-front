import React from 'react';
import { useNavigate } from 'react-router-dom'; 
const ClientButton = () => {
    const navigate = useNavigate(); 

    const goToClientPage = () => {
        navigate('/client_profile'); 
    };

    return (
        <button
            onClick={goToClientPage} 
            className="bg-white rounded-lg font-display-[Roboto]  font-bold text-indigo-400 hover:cursor-pointer w-[210px] h-[50px] absolute top-[155px] right-[160px]"
        >
            Войти как заказчик
        </button>
    );
};

export default ClientButton;