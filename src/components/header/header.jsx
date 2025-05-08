import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

const Header = () => {
  return (
    <header className='bg-gray-800 text-white shadow-md flex items-center justify-between w-full h-[80px] fixed top-0 left-0 right-0 z-3'>
      <div className='pl-[120px]'>
        <img src={logo} alt='Logo' className='w-[130px] h-[130px]' />
      </div>
      <nav className='flex items-center space-x-10 pt-[29px] pb-[30px] pr-[120px]'>
        <Link to='/search_client' className='hover:font-display-[Roboto] hover:pt-[7px] pb-[7px] pr-[15px] pl-[15px] rounded-xl hover:bg-indigo-500 hover:-translate-y-1 hover:scale-110 hover:cursor-pointer transition duration-400 ease-in-out'>Поиск</Link>
        <Link to='/about_project' className='hover:font-display-[Roboto] hover:pt-[7px] pb-[7px] pr-[15px] pl-[15px] rounded-xl hover:bg-indigo-500 hover:-translate-y-1 hover:scale-110 hover:cursor-pointer transition duration-400 ease-in-out'>О проекте</Link>
        <Link to='/help' className='hover:font-display-[Roboto] hover:pt-[7px] pb-[7px] pr-[15px] pl-[15px] rounded-xl hover:bg-indigo-500 hover:-translate-y-1 hover:scale-110 hover:cursor-pointer transition duration-400 ease-in-out'>Помощь</Link>
        <Link to='https://www.herzen.spb.ru/' className='hover:font-display-[Roboto] hover:pt-[7px] pb-[7px] pr-[15px] pl-[15px] rounded-xl hover:bg-indigo-500 hover:-translate-y-1 hover:scale-110 hover:cursor-pointer transition duration-400 ease-in-out'>Сайт РГПУ</Link>
        <Link to='/chat' className='hover:font-display-[Roboto] hover:pt-[7px] pb-[7px] pr-[15px] pl-[15px] rounded-xl hover:bg-indigo-500 hover:-translate-y-1 hover:scale-110 hover:cursor-pointer transition duration-400 ease-in-out'>Чат</Link>
        <Link to='/client_profile' className='hover:font-display-[Roboto] hover:pt-[7px] pb-[7px] pr-[15px] pl-[15px] rounded-xl hover:bg-indigo-500 hover:-translate-y-1 hover:scale-110 hover:cursor-pointer transition duration-400 ease-in-out'>Профиль</Link>
      </nav>
    </header>
  );
};

export default Header;