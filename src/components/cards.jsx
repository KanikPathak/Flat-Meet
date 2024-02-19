// Modified Cards component
import React from "react";

function Cards({
  name,
  age,
  gender,
  img,
  location,
  roomFeatures,
  description,
  onContactOwnerClick,
}) {
  return (
    <div className="flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-300 hover:shadow-lg transition-transform duration-300 transform hover:scale-105">
        <div className="mb-4">
          <img
            src={img}
            alt=""
            className="h-32 w-32 rounded-full object-cover mb-4"
          />
          <p className="text-gray-800 text-lg mb-2">
            <span className="font-bold">Room Available in:</span> {location}
          </p>
          <p className="text-gray-800 text-lg mb-2">
            <span className="font-bold">Room Features:</span> {roomFeatures}
          </p>
          <p className="text-gray-800 text-lg mb-2">
            <span className="font-bold">Description:</span> {description}
          </p>
        </div>
        <p className="text-gray-700">
          - {name}, {age} years old, {gender}
        </p>
        <button
          onClick={onContactOwnerClick}
          className="mt-4 p-2 w-full bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Contact Owner
        </button>
      </div>
    </div>
  );
}

export default Cards;
