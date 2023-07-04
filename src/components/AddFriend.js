import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const AddFriend = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('token');

    // Yeni karakter verilerini içeren bir JSON oluşturun
    const newFriend = {
      name: name,
      age: parseInt(age),
      email: email,
    };

    // Token ile korumalı Friends ekleme API'sine istek gönderin
    const response = await fetch('http://localhost:9000/api/friends', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
      body: JSON.stringify(newFriend),
    });

    if (response.ok) {
      // Başarı durumunda sayfayı FriendsList sayfasına yönlendirin
      history.push('/friends');
    } else {
      // Hata durumunda kullanıcıyı bilgilendirin veya token'i kontrol edin
      console.error('Failed to add friend');
    }
  };

  return (
    <div>
      <h2>Add Friend</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Age:
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Add Friend</button>
      </form>
    </div>
  );
};

export default AddFriend;
