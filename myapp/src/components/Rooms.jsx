import React, { useState } from "react";
import room1 from "../assets/room1.jpeg";
import room2 from "../assets/room2.jpeg";
import room3 from "../assets/room3.jpeg";
import room4 from "../assets/room4.jpeg";
import room5 from "../assets/room5.jpeg";

const roomsData = [
  { id: 1, name: "Room 1", image: room1, rating: 4.5, area: "Colony A" },
  { id: 2, name: "Room 2", image: room2, rating: 3.8, area: "Colony B" },
  { id: 3, name: "Room 3", image: room3, rating: 4.2, area: "Colony A" },
  { id: 4, name: "Room 4", image: room4, rating: 3.4, area: "Colony B" },
  { id: 5, name: "Room 5", image: room5, rating: 4.8, area: "Colony A" },
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
    <div>
      <div className="search-container">
        <h1 className="title">Rental Rooms</h1>
        <select className="search-options" onChange={handleAreaSelect} value={searchArea}>
          <option value="">Select Area</option>
          <option value="Colony A">Colony A</option>
          <option value="Colony B">Colony B</option>
        </select>
        <button className="search-button" onClick={handleSearch}>Search</button>
      </div>

      <div className="search-results">
        {searchResults.map((room) => (
          <div key={room.id} className="room">
            <img src={room.image} alt={room.name} />
            <div className="room-info">
              <h3>{room.name}</h3>
              <div className="area">{room.area}</div>
              <div className="rating">{room.rating} stars</div>
              <div className="user-rating">
                <span>Your Rating:</span>
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
                <span>Average Rating:</span>
                {calculateAverageRating(room.id)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
