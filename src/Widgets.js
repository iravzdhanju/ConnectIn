import React from 'react';
import './Widgets.css';
import InfoIcon from '@material-ui/icons/Info';
function Widgets() {
  return (
    <div className='widgets'>
      <div className='widgets_Header'>
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
    </div>
  );
}

export default Widgets;
