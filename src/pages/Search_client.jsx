import React, { useState, useEffect } from 'react';
import Role from '../components/filters/tutor/role';
import Items from '../components/filters/tutor/items';
import Class from '../components/filters/tutor/class';
import Gender from '../components/filters/tutor/gender';
import Age from '../components/filters/tutor/age';
import Courses from '../components/filters/tutor/course';
import Experience from '../components/filters/tutor/experience';
import Price from '../components/filters/tutor/price';
import Place from '../components/filters/tutor/place';
import Location from '../components/filters/tutor/location';
import Timetable from '../components/filters/tutor/timetable';
import Form from '../components/filters/form';
import Footer from '../components/footer/footer';
import SearchSwitchButtonClient from '../components/buttons/changeFromClientSearch.jsx';
import { Api } from '../Api';

const api = new Api();
const CURRENT_YEAR = 2025;

const SearchPageClient = () => {
  const [subjects, setSubjects] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedClass, setSelectedClass] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [gender, setGender] = useState([]);
  const [ageRange, setAgeRange] = useState({ from: '', to: '' });
  const [experience, setExperience] = useState([]);
  const [priceRange, setPriceRange] = useState({ from: '', to: '' });
  const [place, setPlace] = useState([]);
  const [location, setLocation] = useState([]);
  const [timetable, setTimetable] = useState([]);
  const [role, setRole] = useState(null);
  const [performers, setPerformers] = useState([]);

  // Fetch subjects on mount
  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const response = await api.api.subjectsList();
        setSubjects(response.data.map(subject => ({
          id: subject.id,
          name: subject.name_Subject
        })));
        if (response.data.length > 0) {
          setSelectedSubject({
            id: response.data[0].id,
            name: response.data[0].name_Subject
          });
        }
      } catch (error) {
        console.error('Failed to fetch subjects:', error);
      }
    };
    fetchSubjects();
  }, []);

  // Fetch performers based on filters
  const fetchPerformers = async () => {
    try {
      const query = {};

      // Subject filter (requires backend support, e.g., join with matchPerformers)
      if (selectedSubject) {
        query.subjectId = selectedSubject.id; // Note: May not work without matchPerformers
      }

      // Role filter
      if (role !== null) {
        query.id_Role = role;
      }

      // Course filter (DbPerformer.course_User)
      if (selectedCourse) {
        query.course_User = selectedCourse.id;
      }

      // Gender filter (only if "Мужской" or "Женский" selected, ignore "Неважно")
      if (gender.length > 0 && !gender.includes('Неважно')) {
        if (gender.length === 1) {
          query.gender_User = gender.includes('Мужской');
        }
      }

      // Age filter (convert to birth year range)
      if (ageRange.from || ageRange.to) {
        if (ageRange.from) {
          query.birth_Year_To = CURRENT_YEAR - parseInt(ageRange.from); // Younger
        }
        if (ageRange.to) {
          query.birth_Year_From = CURRENT_YEAR - parseInt(ageRange.to); // Older
        }
      }

      // Experience filter (only if "С опытом" or "Без опыта" selected, ignore "Неважно")
      if (experience.length > 0 && !experience.includes('Неважно')) {
        if (experience.length === 1) {
          query.with_Expirience = experience.includes('С опытом');
        }
      }

      // Note: Class, Price, Place, Location, Timetable filters not applicable to DbPerformer

      const response = await api.api.performersList({ query });
      setPerformers(response.data);
    } catch (error) {
      console.error('Failed to fetch performers:', error);
      setPerformers([]);
    }
  };

  // Fetch performers whenever filters change
  useEffect(() => {
    fetchPerformers();
  }, [selectedSubject, selectedCourse, gender, ageRange, experience, role]);

  return (
    <>
      <SearchSwitchButtonClient />
      <div className="flex">
        <div className="bg-white w-[300px] h-[1550px] mt-[30px] ml-[120px] mb-[200px] rounded-lg relative">
          <Role role={role} setRole={setRole} />
          <Items subjects={subjects} selectedSubject={selectedSubject} setSelectedSubject={setSelectedSubject} />
          <Class selectedClass={selectedClass} setSelectedClass={setSelectedClass} />
          <Gender gender={gender} setGender={setGender} />
          <Age ageRange={ageRange} setAgeRange={setAgeRange} />
          <Courses selectedCourse={selectedCourse} setSelectedCourse={setSelectedCourse} />
          <Experience experience={experience} setExperience={setExperience} />
          <Price priceRange={priceRange} setPriceRange={setPriceRange} />
          <Place place={place} setPlace={setPlace} />
          <Location location={location} setLocation={setLocation} />
          <Timetable timetable={timetable} setTimetable={setTimetable} />
        </div>
        <div className="mt-[30px] ml-[50px] absolute left-[370px] top-[200px]">
          {performers.length > 0 ? (
            performers.map((performer) => (
              <Form key={performer.id} item={performer} type="performer" />
            ))
          ) : (
            <p className="text-gray-600">Репетиторы не найдены</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SearchPageClient;