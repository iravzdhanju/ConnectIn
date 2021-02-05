import { Avatar } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import './HeaderOption.css';

function HeaderOption({ avatar, Icon, title, onClick }) {
  const user = useSelector(selectUser);
  return (
    <div onClick={onClick} className='headerOption'>
      {Icon && <Icon className='headerOption' />}
      {avatar && (
        <Avatar className='headerOption_icon'>{user?.email[0]}</Avatar>
      )}
      <h3 className='headerOption_title'>{title}</h3>
    </div>
  );
}

export default HeaderOption;
