import React from 'react';
import { useHistory } from 'react-router-dom';

const Logout = () => {
  const history = useHistory();

  const handleLogout = async () => {
    const token = localStorage.getItem('token');

    // Token ile korumalı Logout API'sine istek gönderin
    const response = await fetch('http://localhost:9000/api/logout', {
      method: 'POST',
      headers: {
        Authorization: token,
      },
    });

    if (response.ok) {
      // Token'ı localStorage'dan silin
      localStorage.removeItem('token');

      // Sayfayı Login sayfasına yönlendirin
      history.push('/login');
    } else {
      // Hata durumunda kullanıcıyı bilgilendirin veya token'i kontrol edin
      console.error('Failed to logout');
    }
  };

  return (
    <div>
      <h2>Logout</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
