import React from 'react';
import chat from '../images/chat.svg';
import Footer from '../components/footer/footer';

const ChatPage= () => {

    return (
        <>
            <div className=' w-[925px] h-[925px]  ml-[290px] mb-[10px]'>
                 <img src={chat} alt='chat' className='w-[925px] h-[925px]' />
            </div>
            
            <Footer/>
        </>    
    );
};  
export default ChatPage;