import React from 'react';

const Age = ({ ageRange, setAgeRange }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAgeRange((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className='flex absolute top-[550px] left-[30px]'>
      <label className='text-sm text-black font-display-[Roboto]'>Возраст репетитора</label>
      <input
        name='from'
        value={ageRange.from}
        onChange={handleChange}
        className='w-[100px] h-[45px] bg-blue-100 placeholder:text-slate-400 text-black text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 absolute top-[30px]'
        placeholder='От'
      />
      <input
        name='to'
        value={ageRange.to}
        onChange={handleChange}
        className='w-[100px] h-[45px] bg-blue-100 placeholder:text-slate-400 text-black text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 absolute top-[30px] left-[120px]'
        placeholder='До'
      />
    </div>
  );
};

export default Age;