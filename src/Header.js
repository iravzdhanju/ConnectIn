import React from 'react';
import './Header.css';
import HeaderOption from './HeaderOption';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
function header() {
  return (
    <div className='header'>
      <div className='header_left'>
        <img
          src='http://www.flaticon.com/svg/static/icons/svg/174/174857.svg'
          alt='ImageConnecitin'
        />

        <div className='header_search'>
          <SearchIcon />
          <input type='text' placeholder='Search' />
        </div>
      </div>

      <div className='header_right'>
        <HeaderOption Icon={HomeIcon} title='Home' />
        <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
        <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
        <HeaderOption Icon={ChatIcon} title='Messaging' />
        <HeaderOption Icon={NotificationsIcon} title='Notifications' />

        <HeaderOption avatar='../src/assets/connectin.png' title='me' />
      </div>
    </div>
  );
}

export default header;
