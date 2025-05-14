
// const AgeTeacher = ({ value, onChange }) => {
    
//     return (
//         <div className='flex absolute top-[325px] left-[1060px]'>
//             <p className='text-sm font-medium text-slate-600 font-display-[Roboto]'>
//                 Возраст репетитора
//             </p>

//             <div className='flex items-center gap-2 absolute mt-[30px]'>
//                 <form>
//                     <textarea
//                         className='w-[140px] h-[45px] bg-blue-100 placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 top-[30px]  '
//                         value={value}
//                         onChange={onChange}
//                         type="number"
//                     ></textarea>
//                 </form>    
//             </div>
//         </div>
//     );
// };

// export default AgeTeacher; 


import React, { useState } from 'react';

const AgeTeacher = ({ onAgeChange }) => {
    // Создаем состояния для хранения минимальной и максимальной стоимости часа
    const [age, setAge] = useState('');

    // Обработчики изменения в полях ввода
    const handleAgeChange = (event) => {
        setAge(event.target.value);
        onAgeChange({ age: event.target.value }); // Вызываем функцию обратного вызова
    };
    
    return (
        <div className='flex absolute top-[325px] left-[1050px]'>
            <p className='text-sm font-medium text-slate-600 font-display-[Roboto]'>
                Возраст учителя
            </p>

            <input
                className='w-[100px] h-[45px] bg-blue-100 placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 absolute top-[30px]  '
                value={age}
                onChange={handleAgeChange}
                type="number"
            />
        </div>
    );
};

export default AgeTeacher; 
