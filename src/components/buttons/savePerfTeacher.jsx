import React from 'react';

const SavePerformerTutor = ({ onClick }) => {
    return (
        <button className='bg-green-500 hover:cursor-pointer w-[170px] h-[50px] absolute top-[40px] right-[40px] rounded-xl font-display-[Roboto]' onClick={onClick}>
            Сохранить
        </button>
    );
};

export default SavePerformerTutor;