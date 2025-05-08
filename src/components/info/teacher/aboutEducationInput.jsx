const AboutEducationTeacher = ({ value, onChange }) => {
    return (
        <div className='flex items-center gap-2 absolute top-[300px] left-[665px]'>
            <label className='text-sm text-slate-600 absolute top-[1px] left-[1px] font-display-[Roboto] '>
                Образование
            </label>
            <form>
                <textarea  className='w-[520px] h-[310px] bg-blue-100 placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 resize-none'  
                value={value}
                onChange={onChange}
                ></textarea>
            </form>    
        </div>
    );
};

export default AboutEducationTeacher;