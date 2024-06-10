import React from 'react';
import { Button } from 'react-bootstrap';

const GenreButtons = ({ setType }) => {
  return (
    <div className='div-button'>
      <Button variant="dark" className='m-1' onClick={() => setType('history')}>History</Button>
      <Button variant="dark" className='m-1' onClick={() => setType('fantasy')}>Fantasy</Button>
      <Button variant="dark" className='m-1' onClick={() => setType('horror')}>Horror</Button>
      <Button variant="dark" className='m-1' onClick={() => setType('romance')}>Romance</Button>
      <Button variant="dark" className='m-1' onClick={() => setType('scifi')}>Scifi</Button>
    </div>
  );
};

export default GenreButtons;