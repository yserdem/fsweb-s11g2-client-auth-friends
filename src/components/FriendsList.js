import React, { useEffect, useState } from 'react';

const FriendsList = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const fetchFriends = async () => {
      const token = localStorage.getItem('token');

      // Token ile korumalı Friends listesi API'sine istek gönderin
      const response = await fetch('http://localhost:9000/api/friends', {
        headers: {
          Authorization: token,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setFriends(data);
      } else {
        // Hata durumunda kullanıcıyı bilgilendirin veya token'i kontrol edin
        console.error('Failed to fetch friends');
      }
    };

    fetchFriends();
  }, []);

  return (
    <div>
      <h2>Friends List</h2>
      <ul>
        {friends.map((friend) => (
          <li key={friend.id}>{`${friend.name} -- ${friend.email}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default FriendsList;
