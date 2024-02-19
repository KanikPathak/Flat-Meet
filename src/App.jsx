// App.jsx
import React, { useState } from "react";
import Cards from "./components/cards";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import RoomListingForm from "./components/RoomListingForm";

function App() {
  const [showRoomListingForm, setShowRoomListingForm] = useState(false);
  const [showLoginPopup, setShowLoginPopup] = useState(false);

  const [roomData, setRoomData] = useState([
    {
      name: "John",
      age: "25",
      gender: "Male",
      location: "Downtown, City Center",
      roomFeatures: "Furnished, WiFi, Private Bathroom",
      description:
        "Looking for a friendly roommate to share a spacious apartment in the heart of the city.",
      img: "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
    },
    {
      name: "Emma",
      age: "28",
      gender: "Female",
      location: "Suburb, Quiet Neighborhood",
      roomFeatures: "Pet-friendly, Parking, Shared Kitchen",
      description:
        "Seeking a roommate to split rent in a cozy house with a backyard. Ideal for someone who loves pets.",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
    },
    {
      name: "Raj",
      age: "23",
      gender: "Male",
      location: "Tech Hub, Near Offices",
      roomFeatures: "Modern, High-speed Internet, Gym Access",
      description:
        "Young professional looking for a roommate to share a modern apartment near tech offices.",
      img: "https://www.shutterstock.com/image-photo/profile-picture-smiling-successful-young-260nw-2040223583.jpg",
    },
    {
      name: "Sophie",
      age: "24",
      gender: "Female",
      location: "Artistic District, Cultural Hub",
      roomFeatures: "Art Studio, Creative Space, Balcony",
      description:
        "Art enthusiast seeking a roommate to share a vibrant apartment in the heart of the artistic community.",
      img: "https://marketplace.canva.com/EAFqNrAJpQs/1/0/1600w/canva-neutral-pink-modern-circle-shape-linkedin-profile-picture-WAhofEY5L1U.jpg",
    },
  ]);
  const handleRoomListingSubmit = (formData) => {
    setRoomData((prevRoomData) => [...prevRoomData, formData]);
    setShowRoomListingForm(false);
  };

  const handleLoginClick = () => {
    setShowLoginPopup(true);
  };

  const handleLoginClose = () => {
    setShowLoginPopup(false);
  };

  const handleGoogleLogin = () => {
    // Implement Google login logic here
    console.log("Logging in with Google...");
  };

  const handleEmailLogin = (email, password) => {
    // Implement email login logic here
    console.log(`Logging in with email: ${email} and password: ${password}`);
  };

  const handleContactOwnerClick = () => {
    // Handle contact owner logic here
    handleLoginClick();
    console.log("Contacting owner...");
  };

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex justify-center p-10 mt-10">
        <div
          className="prsnl p-20 border  text-white text-xl rounded-lg w-full"
          style={{ backgroundColor: "#a84750" }}
        >
          <div className="main-head text-5xl font-bold mb-4">
            DISCOVER YOUR PERFECT LIVING SPACE
          </div>
          <div className="sub-head text-xl mb-4">
            Connect with the perfect roommate hassle-free...
          </div>
          <div className="flex justify-start items-center">
            <div className="w-1/2 pr-4 flex gap-10">
              <button
                onClick={() => setShowRoomListingForm(true)}
                className="text-lg text-white hover:text-white p-5 px-20 rounded-lg mb-4 hover:scale-110 transition-transform"
                style={{ backgroundColor: "#1e95a6" }}
              >
                List your room
              </button>
              <button
                onClick={() => {
                  handleLoginClick();
                  handleContactOwnerClick(); // You can customize this function as needed
                }}
                className="text-lg text-white hover:text-white p-5 px-20 rounded-lg mb-4 hover:scale-110 transition-transform bg-white"
                style={{ color: "#1e95a6" }}
              >
                Login
              </button>
            </div>
            <div className="w-1/2 flex justify-end">
              <img
                src="./media/roomie1.png"
                className="h-60 object-cover rounded-lg"
                alt="Roommate Finder"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Room Listing Form */}
      {showRoomListingForm && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg w-96">
            <h2 className="text-2xl font-bold mb-4">List Your Room</h2>
            <RoomListingForm onFormSubmit={handleRoomListingSubmit} />
            <button
              onClick={() => setShowRoomListingForm(false)}
              className="text-white bg-red-500 px-4 py-2 rounded-lg mt-4"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Login/Signup Popup */}
      {showLoginPopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg w-96">
            <h2 className="text-2xl font-bold mb-4">Login/Signup</h2>

            {/* Email and Password Login Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const email = e.target.elements.email.value;
                const password = e.target.elements.password.value;
                handleEmailLogin(email, password);
              }}
              className="mb-4"
            >
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                required
                className="mt-1 p-2 w-full border rounded-md"
              />
              <label
                htmlFor="password"
                className="block mt-2 text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                autoComplete="current-password"
                required
                className="mt-1 p-2 w-full border rounded-md"
              />
              <button
                type="submit"
                className="mt-4 p-2 w-full bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Login
              </button>
            </form>

            {/* Google Login Button */}
            <button
              onClick={handleGoogleLogin}
              className="p-2 w-full bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              Login with Google
            </button>

            {/* Close Button */}
            <button
              onClick={handleLoginClose}
              className="text-white bg-red-500 px-4 py-2 rounded-lg mt-4"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Rooms Listing Cards */}

      <div className="text-center text-3xl p-5 font-bold">ROOMS LISTING</div>
      <div className="flex justify-center p-10 mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {roomData.map((room, index) => (
            <div key={index} className="relative">
              <Cards
                name={room.name}
                age={room.age}
                gender={room.gender}
                location={room.location}
                roomFeatures={room.roomFeatures}
                description={room.description}
                img={room.img}
                onContactOwnerClick={handleContactOwnerClick}
              />
            </div>
          ))}
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
