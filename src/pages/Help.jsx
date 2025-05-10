import Footer from '../components/footer/footer';
import img_5_help from '../images/img_5_help.svg';
import img_6_help from '../images/img_6_help.svg';
import img_7_help from '../images/img_7_help.svg';
import img_8_help from '../images/img_8_help.svg';
import img_9_help from '../images/img_9_help.svg';
const HelpPage= () => {

    return (
        <>
            <div className=' w-[800px] h-[3600px] mt-[20px]  ml-[80px]'>
                <p className='text-black text-base font-display-[Roboto] ml-[430px] mt-[120px]'>Переходим во вкладку Регистрация/вход как исполнитель или заказчик</p>
                <img src={img_5_help } alt='img_5_help' className='w-[525px] h-[525px] ml-[365px]' />
                 <p className='text-black text-base font-display-[Roboto] ml-[480px] mt-[120px]'>Заполняем необходимые данные если вы уже зарегистрированы</p>
                <img src={img_6_help } alt='img_6_help' className='w-[525px] h-[525px] ml-[365px]' />
                <p className='text-black text-base font-display-[Roboto] ml-[480px] mt-[120px]'>Если вы не зарегистрированы,регистрируемся</p>
                <img src={img_7_help } alt='img_7_help' className='w-[525px] h-[525px] ml-[365px]' />
                <p className='text-black text-base font-display-[Roboto] ml-[480px] mt-[120px]'>Если забыли пароль,переходим по нужной вкладке</p>
                <img src={img_8_help } alt='img_8_help' className='w-[525px] h-[525px] ml-[365px]' />
                <p className='text-black text-base font-display-[Roboto] ml-[480px] mt-[120px]'>Далее после входа в систему попадаем либо в кабинет заказчика,либо в кабинет исполнителя</p>
                <img src={img_9_help } alt='img_9_help' className='w-[525px] h-[525px] ml-[365px]' />
            </div>
            
            <Footer/>
        </>    
    );
};  
export default HelpPage;
