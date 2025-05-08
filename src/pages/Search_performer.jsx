import React from 'react';
import Role from '../components/filters/tutor/role';
import Items from '../components/filters/tutor/items';
import Class from '../components/filters/tutor/class';
import Gender from '../components/filters/tutor/gender'
import Age from '../components/filters/tutor/age'
import Courses from '../components/filters/tutor/course';
import Experience from '../components/filters/tutor/experience';
import Price from '../components/filters/tutor/price';
import Place from '../components/filters/tutor/place';
import Location from '../components/filters/tutor/location';
import Timetable from '../components/filters/tutor/timetable';
import Footer from '../components/footer/footer'

import SearchSwitchButtonPerf from '../components/buttons/changeFromPerfSearch';


const SearchPagePerformer= () => {

    return (
        <>
            <SearchSwitchButtonPerf />
            
            <div className='bg-white  w-[300px] h-[1550px] mt-[30px]  ml-[120px] mb-[200px] rounded-lg relative '>

                <Role/>
                
                <Items/>

                <Class/>

                <Gender/>

                <Age/>

                <Courses/>

                <Experience/>

                <Price/>

                <Place/>

                <Location/>
                
                <Timetable/>
                

            </div>
            
            <Footer/>
        </>    
    );
};  
export default SearchPagePerformer;