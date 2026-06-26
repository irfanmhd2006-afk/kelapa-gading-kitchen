import React from 'react';

const About = () => {
  return (
    <div style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto', fontFamily: '"Inter", sans-serif' }}>
      <h1 style={{ fontSize: '2.5rem', color: '#2b2d42', marginBottom: '20px', textAlign: 'center' }}>
        Tentang Kami
      </h1>
      <div style={{ lineHeight: '1.8', color: '#333', fontSize: '1.1rem', textAlign: 'justify' }}>
        <p style={{ marginBottom: '15px' }}>
          Selamat datang di <strong>Kelapa Gading Kitchen</strong>! Kami adalah wadah digital kuliner yang didedikasikan untuk mendokumentasikan, melestarikan, dan membagikan berbagai resep masakan andalan nusantara, khususnya hidangan autentik khas Sumatera Barat dan kreasi kuliner lezat lainnya yang menggugah selera.
        </p>
        <p style={{ marginBottom: '15px' }}>
          Berawal dari kecintaan terhadap seni memasak di dapur rumah tangga, Kelapa Gading Kitchen berkomitmen untuk menyajikan panduan memasak yang mudah dipahami, mulai dari takaran bahan yang presisi hingga langkah-langkah memasak yang runtut. Kami percaya bahwa makanan yang lezat didasari oleh cinta dan resep yang tepat.
        </p>
        <p>
          Terima kasih telah mempercayakan referensi dapur Anda bersama kami. Mari terus memasak, berkreasi, dan menjaga cita rasa tradisi tetap hidup di meja makan kita!
        </p>
      </div>
    </div>
  );
};

export default About;