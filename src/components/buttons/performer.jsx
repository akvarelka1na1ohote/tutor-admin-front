import React from 'react';
import { useNavigate } from 'react-router-dom'; 


const PerformerButton = () => {
    const navigate = useNavigate(); 

    const goToPerformerPage = () => {
        navigate('/performer_profile'); 
    };

    return (
        <button
            onClick={goToPerformerPage} 
            className='bg-white rounded-lg font-display-[Roboto] font-bold text-indigo-400 hover:cursor-pointer w-[210px] h-[50px] absolute top-[260px] right-[160px]'
        >
            Войти как исполнитель
        </button>
    );
};

export default PerformerButton;