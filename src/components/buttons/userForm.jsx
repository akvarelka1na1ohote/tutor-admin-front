import React from 'react';
import { useNavigate } from 'react-router-dom'; 

const UserForm = ()=> {

    const navigate = useNavigate(); 
    
        const goToForm = () => {
        navigate('/form'); 
            };
    return (
        <button  onClick={goToForm}  className='bg-orange-500 hover:cursor-pointer w-[170px] h-[50px] absolute top-[170px] right-[60px] rounded-xl font-display-[Roboto]'>
            Созданные заявки
        </button>
    );
};

export default UserForm;