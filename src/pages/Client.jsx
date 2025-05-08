import '../App.css';
import React, { useState } from 'react';
//info_about
import FullName from '../components/info/about/fullNameInput.jsx';
import DateBirth from '../components/info/about/dateBirthInput.jsx';
import Gender from '../components/dropdowns/genderList.jsx';
import Phone from  '../components/info/about/userPhoneInput.jsx';
import Email from '../components/info/about/userEmailInput.jsx';
import EditButton from '../components/buttons/edit.jsx';
import CreateButton from '../components/buttons/create.jsx';
import OutButton from '../components/buttons/logOutClientProfile.jsx';
//info_tutor
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

const ClientPage = () => {
  // info_about
  const [fullName, setFullName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [gender, setSelectedGender] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  //info_tutor
  const [subject, setSubjects] = useState([]);
  const [selectedClass, setSelectedClass] = useState('1 класс');
  const [priceTutor, setPriceTutor] = useState(''); 
  const [ageTutor, setAgeTutor] = useState({ ageFrom: '', ageTo: '' });
  const [selectedGenderTutor, setGenderTutor] = useState('');
  const [aboutPupil, setAboutPupil] = useState('');
  const [courseTutor, setCourseTutor] = useState([]);
  const [tableTutor, setTableTutor] = useState('');
  const [tableDayTutor, setTableDayTutor] = useState([]);
  const [aboutTableTutor, setAboutTableTutor] = useState('');
  const [placeTutor, setPlaceTutor] = useState('');
  const [locationTutor, setLocationTutor] = useState('')
  const [experienceTutor, setExperienceTutor] = useState('');
  //info_teacher
  const [priceTeacher, setPriceTeacher] = useState('');
  const [ageTeacher, setAgeTeacher] = useState({ ageFrom: '', ageTo: '' });
  const [selectedGenderTeacher, setGenderTeacher] = useState('');
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
        //info_about
        fullName,
        dateOfBirth,
        gender,
        phone,
        email,
         //info_tutor
        subject,
        selectedClass,
        ageTutor,
        selectedGenderTutor,
        courseTutor,   
        aboutPupil,
        priceTutor,
        tableTutor,
        tableDayTutor,
        aboutTableTutor,
        placeTutor,
        locationTutor,
        experienceTutor,
         //info_teacher
        priceTeacher, 
        ageTeacher,
        selectedGenderTeacher,
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

  return (
    <>
      
      <div className='mt-[120px] ml-[990px] rounded-3xl bg-gray-50 w-[373px] h-[50px]'>
            <svg  xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='neutral-700' className='size-12 ml-[325px]'>
                <path fill-rule='evenodd' d='M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z' clip-rule='evenodd' />
            </svg>
            <p className=' text-black text-xl font-display-[Roboto] mt-[-40px] ml-[-20px]'>Вы вошли как заказчик</p>
      </div>
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

        <EditButton />

        <CreateButton onClick={handleSubmit} />
        
        <OutButton />

        
      </div>

      <div className='mt-[30px] mr-[920px] '>
        <p className=' text-black text-3xl  font-bold font-display-[Roboto]'>Заявка на репетитора</p>
      </div>

      <div className='bg-white w-[1240px] h-[1340px] mt-[40px] mr-[120px] ml-[120px]  rounded-xl relative'>

        <AddItemsTutorButton onSubjectsChange={setSubjects} subjects={subject} />

        <ClassTutor onClassChange={(value) => setSelectedClass(value)} />  

        <PriceTutor onPriceChange={(value) => setPriceTutor(value)} />

        <AgeTutor value={ageTutor} onChange={setAgeTutor} />

        <GenderTutor onGenderChange={(value) => setGenderTutor(value)} />

        <CourseTutor value={courseTutor} onChange={setCourseTutor} /> 

        <AboutPupil value={aboutPupil} onChange={(e) => setAboutPupil(e.target.value)} />

        <TableTutor onScheduleChange={(value) => setTableTutor(value)} />

        <TableDayTutor value={tableDayTutor} onChange={setTableDayTutor} />

        <AboutTableTutor value={aboutTableTutor} onChange={(e) => setAboutTableTutor(e.target.value)} />

        <PlaceTutor onPlaceChange={(value) => setPlaceTutor(value)} />

        <LocationTutor onLocationChange={(value) => setLocationTutor(value)} />;
        
        <ExperienceTutor value={experienceTutor} onExperienceChange={(value) => setExperienceTutor(value)} />

      </div>

      <div className='mt-[30px] mr-[950px]'>
        <p className=' text-black text-3xl  font-bold font-display-[Roboto]'>Заявка на учителя</p>
      </div>

      <div className='bg-white w-[1240px] h-[1340px] mt-[40px] mr-[120px] ml-[120px]  rounded-xl relative'>

        <AddItemsTeacherButton onSubjectsChange={setSubjects} subjects={subject} />
        
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
      
      <div className=' font-bold mt-[30px] mr-[900px]'>
        <p className=' text-black font-bold text-3xl font-display-[Roboto]'>Обработанные заявки</p>
      </div>

      <div className='bg-white w-[1240px] h-[209px] mt-[40px] mr-[120px] ml-[120px] mb-[166px] rounded-xl'>
          <p className=' text-black  font-display-[Roboto] pt-[90px]  text-xl'>Их пока нет</p>
      </div>
      
      <Footer />
    </>
  );
};

export default ClientPage;