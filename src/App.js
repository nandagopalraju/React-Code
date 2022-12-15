
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/shared/Layout';
import AddUsers from './pages/AddUsers';
import AllUsers from './pages/AllUsers';
import UserConfirmation from './pages/UserConfirmation';

function App() {


  return (
    <Layout>
      <Routes>
        <Route path="/" element={ <AllUsers/>}></Route>
      
    
        <Route path="/add-user" element={ <AddUsers/>}></Route>
      
        <Route path="/confirm-user" element={ <UserConfirmation/>}></Route>
      </Routes>

    </Layout>
    
  );
}

export default App;
