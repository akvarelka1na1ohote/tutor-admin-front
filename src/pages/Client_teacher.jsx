import '../App.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
//info_teacher
import AddItemsTeacherButton from '../components/buttons/addItemsTeacher.jsx';
import PriceTeacher from '../components/info/teacher/priceInput.jsx';
import AgeTeacher from '../components/info/teacher/agetInput.jsx';
import GenderTeacher from '../components/info/teacher/genderCheckBox.jsx';
import AboutVacancy from '../components/info/teacher/aboutVacancyInput.jsx';
import ClassTeacher from '../components/info/teacher/classButton.jsx';
import CourseTeacher from '../components/info/teacher/courseButton.jsx';
import AboutEducationTeacher from '../components/info/teacher/aboutEducationInput.jsx';
import TableTeacher from '../components/info/teacher/tableCheckBox.jsx';
import TableDayTeacher from '../components/info/teacher/tableDayButtons.jsx';
import AboutTableTeacher from '../components/info/teacher/aboutTableInput.jsx';
import LocationTeacher from '../components/info/teacher/locationCheckBox.jsx';
import ExperienceTeacher from '../components/info/teacher/experienceCheckBox.jsx';

import Footer from '../components/footer/footer.jsx';
import CreateInfoButton from '../components/buttons/createInfo.jsx';


const ClientTeacherPage = () => {
  //info_teacher
  const [priceTeacher, setPriceTeacher] = useState('');
  const [ageTeacher, setAgeTeacher] = useState({ ageFrom: '', ageTo: '' });
  const [selectedGenderTeacher, setGenderTeacher] = useState('');
  const [subjects, setSubjects] = useState([]);
  const [classTeacher, setClassTeacher] = useState([]);
  const [courseTeacher, setCourseTeacher] = useState([]);
  const [tableTeacher, setTableTeacher] = useState('');
  const [tableDayTeacher, setTableDayTeacher] = useState([]);
  const [aboutTableTeacher, setAboutTableTeacher] = useState('');
  const [aboutVacancyTeacher, setVacancyTeacher] = useState('');
  const [aboutEducationTeacher, setEducationTeacher] = useState('');
  const [locationTeacher, setLocationTeacher] = useState('');
  const [experienceTeacher, setExperienceTeacher] = useState('');

  // Функция обработки клика на кнопке "Сохранить"
  const handleSubmit = async () => {
    try {
      // Объявляем и присваиваем значение переменной data
      const data = {
         //info_teacher
        priceTeacher, 
        ageTeacher,
        selectedGenderTeacher,
        subjects,
        classTeacher,
        courseTeacher,
        tableTeacher,
        tableDayTeacher,
        aboutTableTeacher,
        aboutVacancyTeacher,
        aboutEducationTeacher,
        locationTeacher,
        experienceTeacher,
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

  // Получение хука навигации для переадресации между страницами
    const navigate = useNavigate(); 
    // Функция для перехода на страницу клиента
    const goToClientProfilePage = () => {
      navigate('/client_profile'); 
    };

  return (
    <>
      
      
      <CreateInfoButton onClick={handleSubmit} />

      <div className=" absolute top-[120px] left-[120px] ">
          <svg  onClick={goToClientProfilePage}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" class="size-9 hover:cursor-pointer">
            <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-4.28 9.22a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72h5.69a.75.75 0 0 0 0-1.5h-5.69l1.72-1.72a.75.75 0 0 0-1.06-1.06l-3 3Z" clip-rule="evenodd" />
          </svg>
      </div>

      <div className='mt-[120px] ml-[990px] rounded-3xl bg-gray-50 w-[373px] h-[50px]'>
            <svg  xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='neutral-700' className='size-12 ml-[325px]'>
                <path fill-rule='evenodd' d='M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z' clip-rule='evenodd' />
            </svg>
            <p className=' text-black text-xl font-display-[Roboto] mt-[-40px] ml-[-20px]'>Вы вошли как заказчик</p>
      </div>


      <div className='mt-[30px] mr-[1000px]'>
        <p className=' text-black text-3xl  font-bold font-display-[Roboto]'>Заявка на учителя</p>
      </div>

      <div className='bg-white w-[1240px] h-[1340px] mt-[40px] mr-[120px] ml-[120px]  mb-[100px] rounded-xl relative'>

        <AddItemsTeacherButton onSubjectsChange={setSubjects} subjects={subjects} />
        
        <PriceTeacher onPriceChange={(value) => setPriceTeacher(value)} />

        <AgeTeacher value={ageTeacher} onChange={setAgeTeacher} />

        <GenderTeacher onGenderChange={(value) => setGenderTeacher(value)} />

        <ClassTeacher value={classTeacher} onChange={setClassTeacher} />

        <CourseTeacher value={courseTeacher} onChange={setCourseTeacher} />

        <AboutVacancy value={aboutVacancyTeacher} onChange={(e) => setVacancyTeacher(e.target.value)} />

        <AboutEducationTeacher value={aboutEducationTeacher} onChange={(e) => setEducationTeacher(e.target.value)} /> 

        <TableTeacher onScheduleChange={(value) => setTableTeacher(value)}/>

        <TableDayTeacher value={tableDayTeacher} onChange={setTableDayTeacher} />
   
        <AboutTableTeacher value={aboutTableTeacher} onChange={(e) => setAboutTableTeacher(e.target.value)} />
        
        <LocationTeacher onLocationChange={(value) => setLocationTeacher(value)} />

        <ExperienceTeacher value={experienceTeacher} onExperienceChange={(value) => setExperienceTeacher(value)}/>


      </div>
      
      <Footer />
    </>
  );
};

export default ClientTeacherPage;