import React from 'react';

const EditButton = ({ onEditClick }) => {
    return (
        <button 
            className='bg-indigo-600 hover:cursor-pointer w-[170px] h-[50px] font-display-[Roboto] absolute top-[25px] right-[60px] rounded-xl '
            onClick={onEditClick}
        >
            Редактировать
        </button>
    );
};

export default EditButton;