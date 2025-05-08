import '../App.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
//info_tutor
/*
import AddItemsTutorButton from '../components/buttons/addItemsTutor.jsx';
import ClassTutor from '../components/dropdowns/classListTutor.jsx';
import PriceTutor from '../components/info/tutor/priceInput.jsx';
import AgeTutor from '../components/info/tutor/ageInput.jsx';
import GenderTutor from '../components/info/tutor/genderCheckBox.jsx';
import AboutPupil from '../components/info/tutor/aboutPupilInput.jsx';
import CourseTutor from '../components/info/tutor/courseButton.jsx';
import TableTutor from '../components/info/tutor/tableCheckBox.jsx';
import TableDayTutor from '../components/info/tutor/tableDayButton.jsx';
import AboutTableTutor from '../components/info/tutor/aboutTableInput.jsx';
import PlaceTutor from '../components/info/tutor/placeCheckBox.jsx';
import LocationTutor from '../components/info/tutor/locationCheckBox.jsx';
import ExperienceTutor from  '../components/info/tutor/experienceCheckBox.jsx';
*/
import Education from '../components/info/performers/tutor/aboutEducation.jsx';
import SaveTutor from '../components/buttons/savePerfTutor.jsx';
import HidePerfTutor from '../components/buttons/hidePerfTutor.jsx';
import CourseTutor from '../components/dropdowns/courseListTutor.jsx';

import AboutPerformerTutor from '../components/info/performers/tutor/aboutTutor.jsx';
import PerformerTutorDoing from '../components/info/performers/tutor/aboutDoing.jsx';
import PriceTutor from '../components/info/performers/tutor/priceInput.jsx';
import AddSubjectsTutorButton from '../components/buttons/addSubjectTutor.jsx';
import AgeTutor from '../components/info/performers/tutor/age.jsx';
import ClassTutor from '../components/info/performers/tutor/classTutorButton.jsx';
import TableTutor from '../components/info/performers/tutor/tableCheckBox.jsx';
import TableDayTutor from '../components/info/performers/tutor/tableDayButton.jsx';
import AboutTableTutor from '../components/info/performers/tutor/aboutTableInput.jsx';
import PlaceTutor from '../components/info/performers/tutor/placeCheckBox.jsx';
import LocationTutor from '../components/info/performers/tutor/locationCheckBox.jsx';
import ExperienceTutor from  '../components/info/performers/tutor/experienceCheckBox.jsx';



import Footer from '../components/footer/footer.jsx';
import CreateInfoButton from '../components/buttons/createInfo.jsx';


const PerformerTutorPage = () => {
 
  //info_tutor
  const [education, setEducation] = useState('');
  const [aboutPerformerTutor, setAboutPerformerTutor] = useState('');
  const [performerTutorDoing, setPerformerTutorDoing] = useState('');
  const [priceTutor, setPriceTutor] = useState(''); 
  const [subject, setSubjects] = useState([]);
  const [ageTutor, setAgeTutor] = useState('');
  const [classTutor, setClassTutor] = useState([]);
  const [tableTutor, setTableTutor] = useState('');
  const [tableDayTutor, setTableDayTutor] = useState([]);
  const [aboutTableTutor, setAboutTableTutor] = useState('');
  const [placeTutor, setPlaceTutor] = useState('');
  const [locationTutor, setLocationTutor] = useState('')
  const [experienceTutor, setExperienceTutor] = useState('');
  

  // Функция обработки клика на кнопке "Сохранить"
  const savePerformerTutor = async () => {
      try {
        // Объявляем и присваиваем значение переменной data
        const data = {
          //info_about
          education,
          aboutPerformerTutor,
          performerTutorDoing,
          priceTutor,
          subject,
          ageTutor,
          classTutor,
          tableTutor,
          tableDayTutor,
          aboutTableTutor,
          placeTutor,
          locationTutor,
          experienceTutor,
          
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
        <CreateInfoButton onClick={savePerformerTutor} />
        

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
            <p className=' text-black text-3xl  font-bold font-display-[Roboto]'>Анкета репетитора</p>
        </div>

        <div className='bg-white w-[1240px] h-[1440px] mt-[40px] mr-[120px] ml-[120px] mb-[100px] rounded-xl relative'>

            <SaveTutor onClick={savePerformerTutor} />
            <HidePerfTutor onClick={savePerformerTutor} /> 
            <CourseTutor onCourseChange={(value) => setSelectedCourse(value)} />
            
            
            <Education value={education} onChange={(e) => setEducation(e.target.value)} />
            <AboutPerformerTutor value={aboutPerformerTutor} onChange={(e) => setAboutPerformerTutor(e.target.value)} />
            <PerformerTutorDoing value={performerTutorDoing} onChange={(e) => setPerformerTutorDoing(e.target.value)} />
            <PriceTutor onPriceChange={(value) => setPriceTutor(value)} />
            <AddSubjectsTutorButton onSubjectsChange={setSubjects} subjects={subject} />
            <AgeTutor value={ageTutor} onChange={(e) => setAgeTutor(e.target.value)} />
            <ClassTutor value={classTutor} onChange={setClassTutor} />
            <TableTutor onScheduleChange={(value) => setTableTutor(value)} />
            <TableDayTutor value={tableDayTutor} onChange={setTableDayTutor} />
            <AboutTableTutor value={aboutTableTutor} onChange={(e) => setAboutTableTutor(e.target.value)} />
            <PlaceTutor onPlaceChange={(value) => setPlaceTutor(value)} />
            <LocationTutor onLocationChange={(value) => setLocationTutor(value)} />;
            <ExperienceTutor value={experienceTutor} onExperienceChange={(value) => setExperienceTutor(value)} />



        </div>
      
      <Footer />
    </>
  );
};

export default PerformerTutorPage;