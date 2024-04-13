import React, { useState, useEffect } from "react";
import axios from "axios";

const RoomsList = ({ location }) => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      const response = await axios.get(
        ``
      );
      const roomsData = response.data;
      setRooms(roomsData);
    };

    fetchRooms();
  }, [location]);

  return (
    <div>
      <h1>Rooms at {location}</h1>
      <ul>
        {rooms.map((room) => (
          <li key={room.id}>
            <h3>{room.name}</h3>
            <p>Price: {room.price}</p>
            <p>Address: {room.address}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RoomsList;
