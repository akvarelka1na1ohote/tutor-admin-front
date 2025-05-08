import React from 'react';
import Footer from '../components/footer/footer';
import fon_about_project from '../images/fon_about_project.svg'; 
import img_1_about_project from '../images/img_1_about_project.svg';
import img_2_about_project from '../images/img_2_about_project.svg';
import img_3_about_project from '../images/img_3_about_project.svg';
import img_4_about_project from '../images/img_4_about_project.svg';
import ClientButton from '../components/buttons/client';
import PerformerButton from '../components/buttons/performer';

const AboutProjectPage = () => {
    return (
        <>
            <div className='h-[1920px] relative '>
                <p className='text-white text-9xl font-display-[Roboto] font-bold  absolute top-[120px] left-[100px] z-1'>HERZEN <br/>TUTOR</p>
                <img src={fon_about_project} alt='Background Image ' className=' filter blur-xs' />
                <p className='text-black text-3xl font-display-[Roboto] font-bold mt-[70px] absolute top-[465px] right-[983px]'>Преимущества проекта</p>
                <div className='flex justify-center items-center gap-30 mt-10'>
                    <div className='bg-white w-[300px] h-[300px] rounded-xl mt-[65px] relative'>
                        <img src={img_1_about_project} alt='img_1_about_project' className='w-[125px] h-[125px] mt-[55px] ml-[84px] ' />
                        <p className='text-black text-base font-display-[Roboto] mt-[10px]'>Более 100 учеников<br/> улучшили свою <br/>успеваемость</p>
                    </div>
                    <div className='bg-white w-[300px] h-[300px] rounded-xl mt-[65px] relative'>
                        <img src={img_2_about_project} alt='img_2_about_project' className='w-[130px] h-[130px] mt-[55px] ml-[84px]' />
                        <p className='text-black text-base font-display-[Roboto] mt-[10px]'>Более 50 школ нашли <br/> компетентных <br/>преподавателей </p>
                    </div>
                    <div className='bg-white w-[300px] h-[300px] rounded-xl  mt-[65px] relative'>
                        <img src={img_3_about_project} alt='img_3_about_project' className='w-[130px] h-[130px] mt-[55px] ml-[84px]' />
                        <p className='text-black text-base font-display-[Roboto] mt-[10px]'>Более 200 студентов <br/>  нашли себе работу <br/> и получили полезный опыт</p>
                    </div>
                    <p className='text-black text-3xl font-display-[Roboto] font-bold mt-[470px] absolute top-[495px] right-[1210px]'>Отзывы</p>
                </div>
                <div className='absolute top-[970px] left-[230px] '>
                        <img src={img_4_about_project} alt='img_4_about_project' className='w-[1080px] h-[430px]' />
                </div>
            </div>

            <ClientButton/>

            <PerformerButton/>

            <Footer />
        </>
    );
};

export default AboutProjectPage;