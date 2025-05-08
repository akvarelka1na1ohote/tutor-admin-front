import React from 'react';

const HidePerfTutor = ({ onClick }) => {
    return (
        <button className='bg-red-500 hover:cursor-pointer w-[170px] h-[50px] absolute top-[100px] right-[40px] rounded-xl font-display-[Roboto]' onClick={onClick}>
            Скрыть анкету репетитора
        </button>
    );
};

export default HidePerfTutor;