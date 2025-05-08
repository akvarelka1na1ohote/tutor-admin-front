const AboutTableTeacher = ({ value, onChange }) => {
    return (
        <div className='flex items-center gap-2 absolute top-[760px] right-[50px]'>
            <form>
                <textarea className='w-[1140px] h-[250px]  bg-blue-100 placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 resize-none'  
                value={value}
                onChange={onChange}
                />
            </form>    
        </div>
    );
};

export default AboutTableTeacher;