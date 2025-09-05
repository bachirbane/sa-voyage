import React from "react";
import { FaPlaneDeparture, FaMosque, FaKaaba } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full bg-gradient-to-r from-emerald-500 via-green-500 to-teal-700 text-white py-20 px-6 text-center rounded-b-xl shadow-lg">
        <h1 className="text-5xl font-extrabold mb-4 tracking-wide drop-shadow-md">
          About Sa-voyage
        </h1>
        <p className="text-xl max-w-3xl mx-auto leading-relaxed font-medium">
          We provide premium spiritual journeys for Hajj, Umrah, and Voyage.
          Travel with confidence, guided by experienced professionals who care
          about your comfort and peace of mind.
        </p>
      </div>

      {/* About Content */}
      <section className="m-8 p-8 bg-gradient-to-br from-emerald-500 via-green-500 to-teal-700 rounded-3xl shadow-xl text-white leading-8">
        <h2 className="text-4xl font-bold text-center mb-6">Who We Are</h2>
        <p className="mb-4 text-lg">
          <strong>Sa-Voyage</strong> is a trusted travel agency based in{" "}
          <strong>Town, City , Country</strong>. Our mission is to make your
          spiritual journeys memorable and stress-free, offering
          <strong> Hajj Pilgrimages</strong>, <strong>Umrah Packages</strong>,
          and
          <strong> Flight Tickets</strong> to destinations worldwide.
        </p>
        <p className="mb-4">
          We are committed to understanding your spiritual needs and providing:
        </p>
        <ul className="list-disc list-inside mb-4 space-y-1">
          <li>Hand-picked, high-quality accommodations</li>
          <li>Expert guidance and personalized support</li>
          <li>A peaceful and unforgettable spiritual travel experience</li>
        </ul>
      </section>

      {/* Services Section */}
      <section className="m-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto justify-items-center text-center">
        {/* Card 1 - Hajj */}
        <div
          onClick={() => navigate("/reservation")}
          className="cursor-pointer bg-white/70 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-transform duration-300 hover:-translate-y-2 w-80 border border-emerald-100"
        >
          <div className="w-20 h-20 mx-auto mb-5 rounded-full bg-gradient-to-tr from-emerald-500 to-green-400 flex items-center justify-center shadow-md">
            <FaKaaba className="text-4xl text-white" />
          </div>
          <h3 className="text-2xl font-extrabold mb-3 text-emerald-700">
            Hajj
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Experience comprehensive spiritual journeys to Mecca with trusted
            guidance and support.
          </p>
        </div>

        {/* Card 2 - Umrah */}
        <div
          onClick={() => navigate("/reservation")}
          className="cursor-pointer bg-white/70 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-transform duration-300 hover:-translate-y-2 w-80 border border-emerald-100"
        >
          <div className="w-20 h-20 mx-auto mb-5 rounded-full bg-gradient-to-tr from-emerald-500 to-green-400 flex items-center justify-center shadow-md">
            <FaMosque className="text-4xl text-white" />
          </div>
          <h3 className="text-2xl font-extrabold mb-3 text-emerald-700">
            Umrah
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Personalized Umrah trips designed for peace of mind, comfort, and
            spiritual fulfillment.
          </p>
        </div>

        {/* Card 3 - Flight Tickets */}
        <div
          onClick={() => navigate("/reservation")}
          className="cursor-pointer bg-white/70 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-transform duration-300 hover:-translate-y-2 w-80 border border-emerald-100"
        >
          <div className="w-20 h-20 mx-auto mb-5 rounded-full bg-gradient-to-tr from-emerald-500 to-green-400 flex items-center justify-center shadow-md">
            <FaPlaneDeparture className="text-4xl text-white" />
          </div>
          <h3 className="text-2xl font-extrabold mb-3 text-emerald-700">
            Flight Tickets
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Easily book flights to destinations worldwide with smooth and
            reliable service.
          </p>
        </div>
      </section>
    </>
  );
}

export default About;
