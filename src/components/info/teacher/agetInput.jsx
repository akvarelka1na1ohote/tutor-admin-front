const AgeTeacher = ({ value, onChange }) => {
    const handleChangeFrom = (event) => {
        let newValue = Number(event.target.value);
        if (!Number.isNaN(newValue)) {
            onChange({ ...value, ageFrom: newValue });
        }
    };

    const handleChangeTo = (event) => {
        let newValue = Number(event.target.value);
        if (!Number.isNaN(newValue)) {
            onChange({ ...value, ageTo: newValue });
        }
    };

    return (
        <div className='absolute top-[240px] left-[50px] space-x-4'>
            <label className='text-sm text-slate-600 font-display-[Roboto] block mb-2'>
                Возраст учителя
            </label>
            <div className='flex space-x-4'>
                <input
                    className='w-[100px] h-[45px] bg-blue-100 placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300'
                    placeholder='От'
                    value={value.ageFrom}
                    onChange={handleChangeFrom}
                    type="number"
                />
                <input
                    className='w-[100px] h-[45px] bg-blue-100 placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300'
                    placeholder='До'
                    value={value.ageTo}
                    onChange={handleChangeTo}
                    type="number"
                />
            </div>
        </div>
    );
};

export default AgeTeacher;