import '../App.css';
import React, { useState }  from 'react';
import { useNavigate } from 'react-router-dom'; 
import img_1_empty_performer from '../images/img_1_empty_performer.svg';
import img_2_empty_performer from '../images/img_2_empty_performer.svg';
//info_about
import FullName from '../components/info/about/fullNameInput.jsx';
import DateBirth from '../components/info/about/dateBirthInput.jsx';
import Gender from '../components/dropdowns/genderList.jsx';
import Phone from  '../components/info/about/userPhoneInput.jsx';
import Email from '../components/info/about/userEmailInput.jsx';
//import EditButton from '../components/buttons/edit.jsx';
import CreateProfileButton from '../components/buttons/createProfile.jsx';
import OutButtonPerf from '../components/buttons/logOutPerf.jsx';
import ProfileSwitchButtonPerf from '../components/buttons/changeFromPerfProf.jsx';



import Footer from '../components/footer/footer';

const PerformerProfilePage= () => {
    // info_about
      const [fullName, setFullName] = useState('');
      const [dateOfBirth, setDateOfBirth] = useState('');
      const [gender, setSelectedGender] = useState('');
      const [phone, setPhone] = useState('');
      const [email, setEmail] = useState('');

      //info_tutor
      const [education, setEducation] = useState('');

    




    // Функция обработки клика на кнопке "Сохранить"
    // Функция обработки клика на кнопке "Сохранить"
  const handleSubmit = async () => {
    try {
      // Объявляем и присваиваем значение переменной data
      const data = {
        //info_about
        fullName,
        dateOfBirth,
        gender,
        phone,
        email,
      };

      // Логируем данные для проверки
      console.log(data);
      // Сохраняем данные в localStorage
      localStorage.setItem('userData', JSON.stringify(data));
      
      // Симулируем успешную операцию
      alert('Данные успешно сохранены!');
    } catch (error) {
      console.error(error.message);
      alert('Произошла ошибка при сохранении данных.');
    }
  };


  const navigate = useNavigate(); 

  // Функция для перехода на страницу клиента
  const goToPerformerTutorPage = () => {
    navigate('/performer_tutor'); 
  };

  const goToPerformerTeacherPage = () => {
    navigate('/performer_teacher'); 
  }; 

  const changeToClient = () => {
    navigate('/client_profile');
  }
  






    return (
        <>
            
            <ProfileSwitchButtonPerf />
            
        <div className='bg-white  w-[1240px] h-[320px] mt-[50px] mr-[120px] ml-[120px]  rounded-xl relative '>
            <div className='bg-slate-300 w-[210px] h-[245px] mr-[900px] mt-[25px]  inline-block  rounded-xl '>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 w-[120px] h-[120px] mt-[55px] ml-[46px] hover:cursor-pointer">
                <path fill-rule="evenodd" d="M5.625 1.5H9a3.75 3.75 0 0 1 3.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 0 1 3.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 0 1-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875ZM12.75 12a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V18a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V12Z" clip-rule="evenodd" />
                <path d="M14.25 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 16.5 7.5h-1.875a.375.375 0 0 1-.375-.375V5.25Z" />
            </svg>
            </div>

            <FullName value={fullName} onChange={(e) => setFullName(e.target.value)} />

            <DateBirth value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} />

            <Gender onChange={(value) => setSelectedGender(value)} />

            <Phone value={phone} onChange={(e) => setPhone(e.target.value)} />  

            <Email value={email} onChange={(e) => setEmail(e.target.value)} />

            

            <CreateProfileButton onClick={handleSubmit} />
            
            <OutButtonPerf />
            

        </div>

        
        {/* Правый блок с изображением и ссылкой на переход */}
        <div className='w-[180px] h-[180px] mt-[120px]  ml-[120px] mb-[100px]'>
            <img src={img_1_empty_performer} alt='img_1_empty_performer' className='w-[170px] h-[170px] mt-[150px] ml-[544px] hover:cursor-pointer' onClick={goToPerformerTutorPage}  />
            <p className='text-black text-2xl font-display-[Roboto] font-bold  absolute top-[895px] right-[563px]'>Не создано пока ни одной анкеты репетитора</p>
        </div>

        <div className='w-[180px] h-[180px] mt-[170px] ml-[120px] mb-[300px]'>
            <img src={img_2_empty_performer} alt='img_2_empty_performer' className='w-[170px] h-[170px] ml-[544px] hover:cursor-pointer' onClick={goToPerformerTeacherPage}  />
            <p className='text-black text-2xl font-display-[Roboto] font-bold  absolute top-[1250px] right-[563px]'>Не создано пока ни одной анкеты учителя</p>
        </div>


        <div className=' mr-[900px]'>
            <p className=' text-black font-bold text-3xl font-display-[Roboto]'>Обработанные заявки</p>
        </div>

        <div className='bg-white w-[1240px] h-[209px] mt-[40px] mr-[120px] ml-[120px] mb-[166px] rounded-xl'>
            <p className=' text-black  font-display-[Roboto] pt-[90px]  text-xl'>Их пока нет</p>
        </div>
      



            <Footer/>
        </>    
    );
};  
export default PerformerProfilePage;