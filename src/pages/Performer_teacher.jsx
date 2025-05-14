import '../App.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
//info_teacher

import Education from '../components/info/performers/teacher/aboutEducation.jsx';
import SaveTeacher from '../components/buttons/savePerfTeacher.jsx';
import HidePerfTeacher from '../components/buttons/hidePerfTeacher.jsx';
import CourseTeacher from '../components/dropdowns/courseListTeacher.jsx';

import AboutPerformerTeacher from '../components/info/performers/teacher/aboutTeacher.jsx';
import PerformerTeacherDoing from '../components/info/performers/teacher/aboutDoing.jsx';
import PriceTeacher from '../components/info/performers/teacher/priceInput.jsx';
import AddSubjectsTeacherButton from '../components/buttons/addSubjectTeacher.jsx';
import AgeTeacher from '../components/info/performers/teacher/age.jsx';
import ClassTeacher from '../components/info/performers/teacher/classTeacherButton.jsx';
import TableTeacher from '../components/info/performers/teacher/tableCheckBox.jsx';
import TableDayTeacher from '../components/info/performers/teacher/tableDayButton.jsx';
import AboutTableTeacher from '../components/info/performers/teacher/aboutTableInput.jsx';
import LocationTeacher from '../components/info/performers/teacher/locationCheckBox.jsx';
import ExperienceTeacher from  '../components/info/performers/teacher/experienceCheckBox.jsx';



import Footer from '../components/footer/footer.jsx';
import CreateInfoButton from '../components/buttons/createInfo.jsx';


const PerformerTeacherPage = () => {
 
  //info_teacher
  const [education, setEducation] = useState('');
  const [aboutPerformerTeacher, setAboutPerformerTeacher] = useState('');
  const [performerTeacherDoing, setPerformerTeacherDoing] = useState('');
  const [priceTeacher, setPriceTeacher] = useState(''); 
  const [subject, setSubjects] = useState([]);
  const [ageTeacher, setAgeTeacher] = useState('');
  const [classTeacher, setClassTeacher] = useState([]);
  const [tableTeacher, setTableTeacher] = useState('');
  const [tableDayTeacher, setTableDayTeacher] = useState([]);
  const [aboutTableTeacher, setAboutTableTeacher] = useState('');
  const [locationTeacher, setLocationTeacher] = useState('')
  const [experienceTeacher, setExperienceTeacher] = useState('');
  

  // Функция обработки клика на кнопке "Сохранить"
  const savePerformerTeacher = async () => {
      try {
        // Объявляем и присваиваем значение переменной data
        const data = {
          //info_about
          education,
          aboutPerformerTeacher,
          performerTeacherDoing,
          priceTeacher,
          subject,
          ageTeacher,
          classTeacher,
          tableTeacher,
          tableDayTeacher,
          aboutTableTeacher,
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
  const goToPerformerProfilePage = () => {
    navigate('/performer_profile'); 
  };
  return (
    <>
        <CreateInfoButton onClick={savePerformerTeacher} />
        

        <div className=" absolute top-[120px] left-[120px] ">
            <svg  onClick={goToPerformerProfilePage}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" class="size-9 hover:cursor-pointer">
                <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-4.28 9.22a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72h5.69a.75.75 0 0 0 0-1.5h-5.69l1.72-1.72a.75.75 0 0 0-1.06-1.06l-3 3Z" clip-rule="evenodd" />
            </svg>
        </div>

        <div className='mt-[120px] ml-[990px] rounded-3xl bg-gray-50 w-[373px] h-[50px]'>
            <svg  xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='neutral-700' className='size-12 ml-[325px]'>
                <path fill-rule='evenodd' d='M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z' clip-rule='evenodd' />
            </svg>
            <p className=' text-black text-xl font-display-[Roboto] mt-[-40px] ml-[-20px]'>Вы вошли как исполнитель</p>
        </div>

        <div className='mt-[30px] mr-[950px] '>
            <p className=' text-black text-3xl  font-bold font-display-[Roboto]'>Анкета учителя</p>
        </div>

        <div className='bg-white w-[1240px] h-[1440px] mt-[40px] mr-[120px] ml-[120px] mb-[100px] rounded-xl relative'>

            <SaveTeacher onClick={savePerformerTeacher} />
            <HidePerfTeacher onClick={savePerformerTeacher} /> 
            <CourseTeacher onCourseChange={(value) => setSelectedCourse(value)} />
            
            
            <Education value={education} onChange={(e) => setEducation(e.target.value)} />
            <AboutPerformerTeacher value={aboutPerformerTeacher} onChange={(e) => setAboutPerformerTeacher(e.target.value)} />
            <PerformerTeacherDoing value={performerTeacherDoing} onChange={(e) => setPerformerTeacherDoing(e.target.value)} />
            <PriceTeacher onPriceChange={(value) => setPriceTeacher(value)} />
            <AddSubjectsTeacherButton onSubjectsChange={setSubjects} subjects={subject} />
            <AgeTeacher value={ageTeacher} onChange={(e) => setAgeTeacher(e.target.value)} />
            <ClassTeacher value={classTeacher} onChange={setClassTeacher} />
            <TableTeacher onScheduleChange={(value) => setTableTeacher(value)} />
            <TableDayTeacher value={tableDayTeacher} onChange={setTableDayTeacher} />
            <AboutTableTeacher value={aboutTableTeacher} onChange={(e) => setAboutTableTeacher(e.target.value)} />
            <LocationTeacher onLocationChange={(value) => setLocationTeacher(value)} />;
            <ExperienceTeacher value={experienceTeacher} onExperienceChange={(value) => setExperienceTeacher(value)} />



        </div>
      
      <Footer />
    </>
  );
};

export default PerformerTeacherPage;