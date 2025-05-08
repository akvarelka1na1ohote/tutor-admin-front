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
import SearchSwitchButtonPerf from '../components/buttons/changeFromPerfSearch';
import { Api } from '../Api';

const api = new Api();
const CURRENT_YEAR = 2025;

const SearchPagePerformer = () => {
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
  const [clients, setClients] = useState([]);

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

  // Fetch clients based on filters
  const fetchClients = async () => {
    try {
      const query = {};

      // Subject filter (requires backend support, e.g., join with matchClients)
      if (selectedSubject) {
        query.subjectId = selectedSubject.id; // Note: May not work without matchClients
      }

      // Class filter
      if (selectedClass) {
        query[`class_${selectedClass.id}`] = true;
      }

      // Course filter
      if (selectedCourse) {
        query[`course_${selectedCourse.id}`] = true;
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

      // Price filter
      if (priceRange.from) query.cost_From = parseInt(priceRange.from);
      if (priceRange.to) query.cost_To = parseInt(priceRange.to);

      // Place filter
      if (place.length > 0) {
        query.distant = place.includes('Дистанционно');
        query.u_Pupil = place.includes('У ученика');
        query.u_Tutor = place.includes('У репетитора');
      }

      // Location filter (only if "Санкт-Петербург" or "Лен.обл" selected, ignore "Неважно")
      if (location.length > 0 && !location.includes('Неважно')) {
        query.sPb = location.includes('Санкт-Петербург');
        query.len = location.includes('Лен.обл');
      }

      // Note: Role and Timetable filters not applicable to DbClient

      const response = await api.api.clientsList({ query });
      setClients(response.data);
    } catch (error) {
      console.error('Failed to fetch clients:', error);
      setClients([]);
    }
  };

  // Fetch clients whenever filters change
  useEffect(() => {
    fetchClients();
  }, [selectedSubject, selectedClass, selectedCourse, gender, ageRange, experience, priceRange, place, location]);

  return (
    <>
      <SearchSwitchButtonPerf />
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
          {clients.length > 0 ? (
            clients.map((client) => (
              <Form key={client.id} item={client} type="client" />
            ))
          ) : (
            <p className="text-gray-600">Клиенты не найдены</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SearchPagePerformer;