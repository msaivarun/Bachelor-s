import React, { useState } from "react";
import room1 from "../assets/room1.jpeg";
import room2 from "../assets/room2.jpeg";
import room3 from "../assets/room3.jpeg";
import room4 from "../assets/room4.jpeg";
import room5 from "../assets/room5.jpeg";
import room6 from "../assets/room6.jpeg";
import room7 from "../assets/room7.jpg";
import room8 from "../assets/room8.jpg";
import room9 from "../assets/room9.jpg";
import room10 from "../assets/room10.jpg";
import room11 from "../assets/room11.jpg";
import room12 from "../assets/room12.jpg";
import room13 from "../assets/room13.jpg";
import room14 from "../assets/room14.jpeg";
import room15 from "../assets/room15.jpeg";
import room16 from "../assets/room16.webp";
import room17 from "../assets/room17.webp";
import room18 from "../assets/room18.jpeg";
import room19 from "../assets/room19.webp";
import room20 from "../assets/room20.jpeg";
import room21 from "../assets/room21.jpg";
import room22 from "../assets/room22.jpg";
import villa1 from "../assets/villa1.jpeg";
import villa2 from "../assets/villa2.jpeg";
import villa3 from "../assets/villa3.jpg";
import villa4 from "../assets/villa4.jpeg";
import villa5 from "../assets/villa5.jpeg";
import villa6 from "../assets/villa6.jpeg";
import villa7 from "../assets/villa7.jpg";
import villa8 from "../assets/villa8.jpeg";
import call_icon from "../assets/call_icon.jpg";

const roomsData = [
  { id: 1, name: "Room 1", image: room1, rating: 4.5, area: "Colony C", contact: "9234567890", type: "3 BHK", price: "15000" },
  { id: 2, name: "Room 2", image: room2, rating: 3.8, area: "Colony C", contact: "9234567890", type: "2 BHK", price: "12000" },
  { id: 3, name: "Room 3", image: room3, rating: 4.2, area: "Colony C", contact: "9234567890", type: "1 BHK", price: "10000" },
  { id: 4, name: "Room 4", image: room4, rating: 3.4, area: "Colony C", contact: "9234567890", type: "1 BHK", price: "10000" },
  { id: 5, name: "Room 5", image: room5, rating: 4.8, area: "Colony C", contact: "9234567890", type: "2 BHK", price: "12000" },
  { id: 6, name: "Room 6", image: room6, rating: 3.9, area: "Colony A", contact: "9234567890", type: "3 BHK", price: "15000" },
  { id: 7, name: "Room 7", image: room7, rating: 4.1, area: "Colony B", contact: "9234567890", type: "2 BHK", price: "12000" },
  { id: 8, name: "Room 8", image: room8, rating: 3.7, area: "Colony B", contact: "9234567890", type: "1 BHK", price: "10000" },
  { id: 9, name: "Room 9", image: room9, rating: 4.6, area: "Colony B", contact: "9234567890", type: "3 BHK", price: "15000" },
  { id: 10, name: "Room 10", image: room10, rating: 3.5, area: "Colony B", contact: "9234567890", type: "2 BHK", price: "12000" },
  { id: 11, name: "Room 11", image: room11, rating: 4.3, area: "Colony B", contact: "9234567890", type: "1 BHK", price: "10000" },
  { id: 12, name: "Room 12", image: room12, rating: 3.6, area: "Colony B", contact: "9234567890", type: "1 BHK", price: "10000" },
  { id: 13, name: "Room 13", image: room13, rating: 4.7, area: "Colony A", contact: "9234567890", type: "2 BHK", price: "12000" },
  { id: 14, name: "Room 14", image: room14, rating: 3.3, area: "Colony A", contact: "9234567890", type: "1 BHK", price: "10000" },
  { id: 15, name: "Room 15", image: room15, rating: 4.9, area: "Colony A", contact: "9234567890", type: "3 BHK", price: "15000" },
  { id: 16, name: "Room 16", image: room16, rating: 3.2, area: "Colony A", contact: "9234567890", type: "2 BHK", price: "12000" },
  { id: 17, name: "Room 17", image: room17, rating: 4.0, area: "Colony A", contact: "9234567890", type: "1 BHK", price: "10000" },
  { id: 18, name: "Room 18", image: room18, rating: 3.1, area: "Colony D", contact: "9234567890", type: "1 BHK", price: "10000" },
  { id: 19, name: "Room 19", image: room19, rating: 4.4, area: "Colony D", contact: "9234567890", type: "2 BHK", price: "12000" },
  { id: 20, name: "Room 20", image: room20, rating: 3.0, area: "Colony D", contact: "9234567890", type: "3 BHK", price: "15000" },
  { id: 21, name: "Room 21", image: room21, rating: 4.6, area: "Colony D", contact: "9234567890", type: "1 BHK", price: "10000" },
  { id: 22, name: "Room 22", image: room22, rating: 2.9, area: "Colony D", contact: "9234567890", type: "2 BHK", price: "12000" },
  { id: 23, name: "Villa 1", image: villa1, rating: 4.9, area: "Villas", contact: "9234567890", type: "3 BHK", price: "15000" },
  { id: 24, name: "Villa 2", image: villa2, rating: 4.4, area: "Villas", contact: "9234567890", type: "2 BHK", price: "12000" },
  { id: 25, name: "Villa 3", image: villa3, rating: 4.0, area: "Villas", contact: "9234567890", type: "1 BHK", price: "10000" },
  { id: 26, name: "Villa 4", image: villa4, rating: 4.2, area: "Villas", contact: "9234567890", type: "1 BHK", price: "10000" },
  { id: 27, name: "Villa 5", image: villa5, rating: 4.3, area: "Villas", contact: "9234567890", type: "2 BHK", price: "12000" },
  { id: 28, name: "Villa 6", image: villa6, rating: 4.5, area: "Villas", contact: "9234567890", type: "3 BHK", price: "15000" },
  { id: 29, name: "Villa 7", image: villa7, rating: 4.6, area: "Villas", contact: "9234567890", type: "1 BHK", price: "10000" },
  { id: 30, name: "Villa 8", image: villa8, rating: 4.7, area: "Villas", contact: "9234567890", type: "2 BHK", price: "12000" },
];

const Rooms = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchArea, setSearchArea] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [ratings, setRatings] = useState({});

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleAreaSelect = (event) => {
    setSearchArea(event.target.value);
  };

  const handleSearch = () => {
    const results = roomsData.filter(
      (room) =>
        room.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        room.area.toLowerCase() === searchArea.toLowerCase()
    );
    const sortedResults = results.sort((a, b) => b.rating - a.rating);
    setSearchResults(sortedResults);
  };

  const handleRatingChange = (roomId, rating) => {
    setRatings({ ...ratings, [roomId]: rating });
  };

  const calculateAverageRating = (roomId) => {
    const roomRatings = Object.values(ratings);
    const roomRatingSum = roomRatings.reduce((total, rating) => total + rating, 0);
    const averageRating = roomRatingSum / roomRatings.length;
    return isNaN(averageRating) ? 0 : averageRating.toFixed(1);
  };

  return (
    <div >
      <div className="search-container">
        <h1 className="title">Rental Rooms</h1>
          <select className="search-options" onChange={handleAreaSelect} value={searchArea}>
            <option value="">Select Area</option>
            <option value="Colony A">Colony A</option>
            <option value="Colony B">Colony B</option>
            <option value="Colony C">Colony C</option>
            <option value="Colony D">Colony D</option>
            <option value="Villas">Villas</option>
          </select>
          <button className="search-button" onClick={handleSearch}>Search</button>
      </div>

      <div className="search-results">
        {searchResults.map((room) => (
          <div key={room.id} className="room">
            <img src={room.image} alt={room.name} />
            <div className="room-info">
              <h3 style={{fontSize:"30px"}}>{room.price} INR</h3>
              <div className="rating">{room.type}</div>
              <div className="area">{room.area}</div>
              <div className="user-rating">
                <span>Rating:</span>
                {[...Array(5)].map((_, index) => (
                  <span
                    key={index}
                    className={ratings[room.id] >= index + 1 ? "filled" : ""}
                    onClick={() => handleRatingChange(room.id, index + 1)}
                  >
                    &#9733;
                  </span>
                ))}
              </div>
              <div className="average-rating">
              <img style={{ height: "25px", width:"20px" }} src={call_icon} alt="Call Icon" />
                <span>Contact: </span>
                <span>{room.contact}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
