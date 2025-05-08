import React from 'react';

const CreateProfileButton = ({ onClick }) => {
    return (
        <button className='bg-green-500 hover:cursor-pointer w-[170px] h-[50px] absolute top-[30px] right-[60px] rounded-xl font-display-[Roboto]' onClick={onClick}>
            Сохранить
        </button>
    );
};

export default CreateProfileButton;