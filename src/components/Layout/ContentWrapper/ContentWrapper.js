import React from 'react';

import './ContentWrapper.css';
import Footer from '../Footer';
import MainContent from '../MainContent';
import Sidebar from '../Sidebar';
import Header from '../Header';

const ContentWrapper = () => {
  return (
    <>
    <div className='content-wrapper'>          
        <Sidebar/>
        <Header/>
        <MainContent>
        </MainContent>
        <div className="push"></div> 
        <Footer/>
    </div>
    </>
  );
};

export default ContentWrapper;