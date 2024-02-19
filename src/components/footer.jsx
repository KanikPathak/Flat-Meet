import React from "react";

function Footer() {
  return (
    <footer
      className=" text-white py-8 mt-20"
      style={{
        backgroundColor: "#a84750",
      }}
    >
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* - About Us */}
          <div>
            <h2 className="text-2xl font-bold mb-4">About Us</h2>
            <p className="text-gray-100">
              FlatMate is a revolutionary platform connecting individuals with
              their ideal roommates. We strive to make the process of finding
              and renting rooms seamless and secure.
            </p>
          </div>

          {/* - Quick Links */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-100">
                  How to Find a Room
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-100">
                  How to Rent a Room
                </a>
              </li>
              <li>
                <a
                  href="https://assets1.cleartax-cdn.com/cleartax/images/1655708276_rentalagreementsampleandallyouneedtoknow.pdf"
                  className="hover:text-gray-100"
                >
                  Room Agreement
                </a>
              </li>
            </ul>
          </div>

          {/* - Contact Us */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="text-gray-100">
              Feel free to reach out to us for any inquiries or assistance.
            </p>
            <p className="mt-2">
              Email: <a href="mailto:admin@flatmate.com">info@flatmate.com</a>
            </p>
          </div>
        </div>

        {/* Motto */}
        <div className="mt-8 text-center">
          <p className="text-xl font-bold">
            Free to list, search & communicate
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-8  text-center text-gray-100 ">
          &copy; 2024 FlatMate. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
