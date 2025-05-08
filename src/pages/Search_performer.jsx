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
      if (selectedSubject) {
        query.subjectId = selectedSubject.id;
      }
      if (ageRange.from) query.age_From = parseInt(ageRange.from);
      if (ageRange.to) query.age_To = parseInt(ageRange.to);
      if (priceRange.from) query.cost_From = parseInt(priceRange.from);
      if (priceRange.to) query.cost_To = parseInt(priceRange.to);
      if (place.length > 0) {
        if (place.includes('Дистанционно')) query.distant = true;
        if (place.includes('У ученика')) query.u_Pupil = true;
        if (place.includes('У репетитора')) query.u_Tutor = true;
      }
      if (location.length > 0) {
        if (location.includes('Санкт-Петербург')) query.sPb = true;
        if (location.includes('Лен.обл')) query.len = true;
      }
      if (experience.length > 0) {
        if (experience.includes('С опытом')) query.with_Expirience = true;
        if (experience.includes('Без опыта')) query.without_Expirience = true;
      }
      if (gender.length > 0) {
        if (gender.includes('Мужской')) query.gender_User = true;
        if (gender.includes('Женский')) query.gender_User = false;
      }
      if (selectedClass) {
        query[`class_${selectedClass.id}`] = true;
      }
      if (selectedCourse) {
        query[`course_${selectedCourse.id}`] = true;
      }
      if (timetable.length > 0) {
        timetable.forEach((day) => {
          const dayMap = {
            'По договоренности': 'arrangement',
            'Понедельник': 'monday',
            'Вторник': 'tuesday',
            'Среда': 'wednesday',
            'Четверг': 'thursday',
            'Пятница': 'friday',
            'Суббота': 'saturday',
            'Воскресенье': 'sunday'
          };
          if (dayMap[day]) query[dayMap[day]] = true;
        });
      }
      if (role !== null) {
        query.id_Role = role;
      }

      const response = await api.api.clientsList({ query });
      setClients(response.data);
    } catch (error) {
      console.error('Failed to fetch clients:', error);
    }
  };

  // Fetch clients whenever filters change
  useEffect(() => {
    fetchClients();
  }, [selectedSubject, selectedClass, selectedCourse, gender, ageRange, experience, priceRange, place, location, timetable, role]);

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