import React from 'react';

const CreateInfoButton = ({ onClick }) => {
    return (
        <button className='bg-green-500 hover:cursor-pointer w-[170px] h-[50px] absolute top-[200px] right-[165px] rounded-xl font-display-[Roboto]' onClick={onClick}>
            Создать заявку
        </button>
    );
};

export default CreateInfoButton;