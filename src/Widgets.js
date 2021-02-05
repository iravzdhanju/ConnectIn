import React from 'react';
import './Widgets.css';
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className='widgets_Article'>
      <div className='widgets_articleLeft'>
        <FiberManualRecordIcon />
      </div>
      <div className='widgets_articleRight'>
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className='widgets'>
      <div className='widgets_Header'>
        <h2>LinkedIn News</h2>

        <InfoIcon />
      </div>
      {newsArticle('I am Back', 'Top News - 1000 readers')}
      {newsArticle(
        'Tesla is a Electric car',
        'Cars And Automotive - 400 readers'
      )}
      {newsArticle(
        'Bitcoin is a cryprocurrency',
        'Accounting and Stocks - 300 readers'
      )}
      {newsArticle(
        'React is a FrontEnd Language',
        'Computing and IT - 150 readers'
      )}
      {newsArticle('This Webpage is Great', 'Social Media  - 100 readers')}
    </div>
  );
}

export default Widgets;
