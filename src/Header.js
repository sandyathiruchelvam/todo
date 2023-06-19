import React from 'react';
import { FaSyncAlt } from 'react-icons/fa';

const Header = () => {
  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h2 className='header'>ToDo List</h2>
      <FaSyncAlt />
    </header>
  );
};

export default Header;







