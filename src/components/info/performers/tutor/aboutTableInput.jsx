const AboutTableTutor = ({ value, onChange }) => {
    
    return (
        <div className='mt-[400px] mr-[1000px] '>
            
            <div className='flex items-center gap-2 mt-[22px] ml-[40px]'>
                <form>
                    <textarea
                        className='w-[1160px] h-[250px] bg-blue-100 placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 resize-none'
                        value={value}
                        onChange={onChange}
                    ></textarea>
                </form>    
            </div>
        </div>
    );
};

export default AboutTableTutor;