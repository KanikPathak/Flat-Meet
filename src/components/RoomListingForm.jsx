// RoomListingForm.jsx
import React, { useState } from "react";

const RoomListingForm = ({ onFormSubmit }) => {
  const [formData, setFormData] = useState({
    rent: "",
    location: "",
    name: "",
    description: "",
    image: "",
    foodPreference: "No preference",
    isSmoker: false,
    isDrinker: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(formData);
    setFormData({
      rent: "",
      location: "",
      name: "",
      description: "",
      image: "",
      foodPreference: "No preference",
      isSmoker: false,
      isDrinker: false,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 ">
      <div className="flex flex-col">
        <label htmlFor="rent" className="text-lg font-semibold mb-1">
          Rent:
        </label>
        <input
          type="text"
          id="rent"
          name="rent"
          value={formData.rent}
          onChange={handleChange}
          placeholder="Enter rent amount"
          className="p-2 border rounded"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="location" className="text-lg font-semibold mb-1">
          Location:
        </label>
        <input
          type="text"
          id="location"
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="Enter location"
          className="p-2 border rounded"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="name" className="text-lg font-semibold mb-1">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          className="p-2 border rounded"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="description" className="text-lg font-semibold mb-1">
          Description:
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Describe your room"
          rows="4"
          className="p-2 border rounded"
        ></textarea>
      </div>

      <div className="flex flex-col">
        <label htmlFor="image" className="text-lg font-semibold mb-1">
          Image URL:
        </label>
        <input
          type="text"
          id="image"
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Enter image URL"
          className="p-2 border rounded"
        />
      </div>

      <div className="flex flex-col">
        <label className="text-lg font-semibold mb-1">Food Preference:</label>
        <select
          name="foodPreference"
          value={formData.foodPreference}
          onChange={handleChange}
          className="p-2 border rounded"
        >
          <option value="No preference">No preference</option>
          <option value="Vegetarian">Vegetarian</option>
          <option value="Non-vegetarian">Non-vegetarian</option>
        </select>
      </div>

      <div className="flex items-center">
        <input
          type="checkbox"
          id="smoker"
          name="isSmoker"
          checked={formData.isSmoker}
          onChange={handleChange}
          className="mr-2"
        />
        <label htmlFor="smoker" className="text-lg">
          Smoker
        </label>
      </div>

      <div className="flex items-center">
        <input
          type="checkbox"
          id="drinker"
          name="isDrinker"
          checked={formData.isDrinker}
          onChange={handleChange}
          className="mr-2"
        />
        <label htmlFor="drinker" className="text-lg">
          Drinker
        </label>
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
};

export default RoomListingForm;
