import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/header.jsx';
import SearchPage from './pages/Search.jsx';
import SearchPageCLient from './pages/Search_client.jsx';
import SearchPagePerformer from './pages/Search_performer.jsx';
import AboutProjectPage from './pages/About_project.jsx';
import HelpPage from './pages/Help.jsx';
import ChatPage from './pages/Chat.jsx';
import PerformerPage from './pages/Performer.jsx';
import PerformerProfilePage from './pages/Performer_profile.jsx';
import PerformerTutorPage from './pages/Performer_tutor.jsx';
import PerformerTeacherPage from './pages/Performer_teacher.jsx';
import ClientTutorPage from './pages/Client_tutor.jsx';
import ClientTeacherPage from './pages/Client_teacher.jsx';
import ClientProfilePage from './pages/Client_profile.jsx';
import CreatedForm from './pages/Form.jsx';


function App() {
  return (
    <BrowserRouter basename='/herzen-tutor'>
     <Header/>
      <Routes>
        <Route path='/search' element={<SearchPage />} />
        <Route path='/search_client' element={<SearchPageCLient />} />
        <Route path='/search_performer' element={<SearchPagePerformer />} />
        <Route path='/about_project' element={<AboutProjectPage />} />
        <Route path='/help' element={<HelpPage />} />
        <Route path='/chat' element={<ChatPage />} />
        <Route path='/performer' element={<PerformerPage />} />
        <Route path='/performer_profile' element={<PerformerProfilePage />} />
        <Route path='/performer_tutor' element={<PerformerTutorPage />} />
        <Route path='/performer_teacher' element={<PerformerTeacherPage />} />
        <Route path='/client_profile' element={<ClientProfilePage />} />
        <Route path='/client_tutor' element={<ClientTutorPage />} />
        <Route path='/client_teacher' element={<ClientTeacherPage />} />
        <Route path='/form' element={<CreatedForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;