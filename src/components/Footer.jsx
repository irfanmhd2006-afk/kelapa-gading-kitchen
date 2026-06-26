import React from 'react';

const Footer = () => {
  const tahunSekarang = new Date().getFullYear();

  return (
    <footer style={{
      backgroundColor: '#2b2d42', 
      color: '#fffdf6',          
      textAlign: 'center',
      padding: '20px 10px',
      fontSize: '0.9rem',
      fontFamily: '"Inter", "Arial", sans-serif',
      marginTop: 'auto',
      position : 'fix'    
    }}>
      <p style={{ margin: '0 0 5px 0', fontWeight: '500' }}>
        © {tahunSekarang} Kelapa Gading Kitchen. All Rights Reserved.
      </p>
      <p style={{ margin: '0', fontSize: '0.8rem', color: '#a0aab2' }}>
        Dibuat dengan ❤️ untuk Pecinta Kuliner Nusantara.
      </p>
    </footer>
  );
};

export default Footer;