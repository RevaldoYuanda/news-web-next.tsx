// components/Navbar.tsx
import Link from 'next/link';
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className='nav'>
      <div style={containerStyle}>
        <h1 style={titleStyle}>News Website</h1>
        <ul style={listStyle}>
          <li style={listItemStyle}><Link href="/">Home</Link></li>
          <li style={listItemStyle}><Link href="/politics">Politics</Link></li>
          <li style={listItemStyle}><Link href="/sports">Sports</Link></li>
          <li style={listItemStyle}><Link href="/technology">Technology</Link></li>
        </ul>
      </div>
    </nav>
  );
};

// Styling in JS (for simplicity, but consider using CSS or CSS-in-JS)

const containerStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const titleStyle = {
  fontSize: '24px',
};

const listStyle = {
  listStyleType: 'none',
  margin: 0,
  padding: 0,
  display: 'flex',
};

const listItemStyle = {
  marginLeft: '20px',
};

export default Navbar;
